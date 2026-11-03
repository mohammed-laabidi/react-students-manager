import { getTotalActive, getTotalInactive, calculateActivationRate } from "./utils";
import { COLORS } from "./COLORS";
import Menu from "./components/SideBar";
import Header from "./components/Header";
import Card from "./components/Card";
import FormAddStudents from "./components/FormAddStudents";
import FormSearchStudents from "./components/FormSearchStudents";
import TableEtudiant from "./components/StudentTable";
import { useEffect, useMemo, useState } from "react";
import { useAppReducer } from "./Context/AppContext";

export default function App() {

    const [students, dispatch] = useAppReducer()

    const [Name, setName] = useState("");

    const [Email, setEmail] = useState("");

    const [searchValue, setSearchValue] = useState("")

    const [filterStatus, setFilterStatus] = useState("all")

    const [editingStudent, setEditingStudent] = useState(null)


    const totalStudentsCount = Array.isArray(students) ? students.length : 0;

    const [totalStudents, setTotalStudents] = useState(totalStudentsCount)

    const [totalActive, setTotalActive] = useState(getTotalActive(students))

    const [totalInactive, setTotalInactive] = useState(getTotalInactive(students))

    const [activationRate, setActivationRate] = useState(0)

    const [openMenu, setOpenMenu] = useState(false)

    useEffect(() => { dispatch({ type: "getStudents" }) }, [])

    useEffect(() => {
        setTotalStudents(totalStudentsCount)
        setTotalActive(getTotalActive(students))
        setTotalInactive(getTotalInactive(students))
        setActivationRate(calculateActivationRate(getTotalActive(students), totalStudentsCount))
    }, [students])

    const visibleStudents = useMemo(() => {
        if (searchValue.trim() === "" && filterStatus === "all") {
            return students;
        }

        return students.filter(e => {
            const matchesSearch = e.fullName.toLowerCase().trim().startsWith(searchValue.toLowerCase().trim());
            const matchesFilter = (filterStatus === "all") ? true : e.status === filterStatus;

            return matchesSearch && matchesFilter;
        });
    }, [students, searchValue, filterStatus]);

    function clearAddForm() {
        setName("");
        setEmail("");
    }

    function handleClickAdd() {
        dispatch({ type: "addStudent", payload: { Name, Email } })
        clearAddForm()
    }

    const handleClickEdit = (student) => {
        setEditingStudent(student);
        setName(student.fullName);
        setEmail(student.email);
    };

    const handleUpdateStudent = () => {
        dispatch({
            type: "updateStudent",
            payload: { id: editingStudent.id, updatedName: Name, updatedEmail: Email }
        });
        setEditingStudent(null);
        clearAddForm()
    };

    const handleClickOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    const memoizedTable = useMemo(() => {
        return <TableEtudiant students={visibleStudents} handleClickEdit={handleClickEdit} />;
    }, [visibleStudents]);

    return (
        <div className="text-white h-full flex justify-end flex-row-reverse" style={{ backgroundColor: COLORS.background }}>


            <div className="px-2 md:px-15 py-5 w-full min-h-screen">

                <Header handleClickOpenMenu={handleClickOpenMenu}/>
                <section className="grid gap-4 grid-cols-1 place-items-center md:grid-cols-4">
                    <Card icon="fas fa-user-group" title="Total Students" value={totalStudents} color="blue" />
                    <Card icon="fa-solid fa-check" title="Active Students" value={totalActive} color="green" />
                    <Card icon="fa-regular fa-circle-xmark" title="Inactive Students" value={totalInactive} color="red" />
                    <Card icon="fa-solid fa-arrow-trend-up" title="Activation Rate" value={activationRate + "%"} color="violet" />
                </section>

                <section className="my-5 grid md:grid-cols-2 gap-5">
                    <FormAddStudents
                        name={Name}
                        setName={setName}
                        email={Email}
                        setEmail={setEmail}
                        handleClickAdd={editingStudent ? handleUpdateStudent : handleClickAdd}
                        isEditing={!!editingStudent}
                        clearAddForm={clearAddForm}
                    />

                    <FormSearchStudents
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        filterStatus={filterStatus}
                        setFilterStatus={setFilterStatus}
                    />
                </section>

                <section style={{ backgroundColor: COLORS.panel }} className="border border-gray-600 rounded-md">
                    {memoizedTable}
                </section>
            </div>

            <Menu openMenu={openMenu} handleClickOpenMenu={handleClickOpenMenu} />

        </div>
    )
}
