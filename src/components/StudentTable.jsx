import { COLORS } from "../COLORS";
import { useAppReducer } from "../Context/AppContext";

export default function TableEtudiant({ students, handleClickEdit }) {
    const [studentsList, dispatch] = useAppReducer()

    const statusStyle = {
        active: "bg-[#0E3332] text-green-500",
        inactive: "bg-[#341F2C] text-red-500",
    }

    const handleChangeStatus = (index) => {
        dispatch({ type: "changeStudentStatus", payload: { idStudentChangeStatus: index } })
    }

    const handleDeleteStudent = (index) => {
        dispatch({ type: "deleteStudent", payload: { idStudentDelete: index } })
    }

    const bodyTable = students && students.map((e, index) => (
        <tr key={e.id}>
            <td >{index + 1}</td>
            <td>{e.fullName}</td>
            <td>{e.email}</td>
            <td>
                <div className={`${(e.status == "active") ? statusStyle.active : statusStyle.inactive} w-fit px-3 py-2 rounded-full font-medium`}>{e.status}</div>
            </td>
            <td className="flex flex-col items-center gap-5 md:flex-row">
                <label className="relative inline-flex items-center cursor-pointer scale-75">
                    <input type="checkbox" className="sr-only peer" checked={e.status == "active"} onChange={() => handleChangeStatus(index)} />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                </label>

                <div className="flex gap-5">
                    <button
                        className={"text-blue-600 text-xl cursor-pointer"}
                        onClick={() => handleClickEdit(e)}
                    >
                        <i className="fa-solid fa-pen"></i>
                    </button>

                    <button
                        className={"text-red-600 text-xl cursor-pointer"}
                        onClick={() => handleDeleteStudent(index)}
                    >
                        <i className={"fa-solid fa-trash"} />
                    </button>
                </div>

            </td>
        </tr>
    ))


    return (
        <>
            <h1 className="font-bold ml-3 my-2">
                <i className={"fas fa-user-group mr-3"} style={{ color: COLORS.primary }}></i>
                Student List
            </h1>

            <div className="overflow-x-auto w-full">
                <table className={"min-h-[200px] relative table w-full text-left text-sm font-light border-separate border-spacing-10"}>
                    <thead >
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {(bodyTable && bodyTable.length > 0)
                            ? bodyTable
                            : <tr className="mt-3 text-center text-[25px] absolute top-[50%] left-[50%] translate-[-50%]">
                                <td className="whitespace-nowrap">No student found</td>
                            </tr>}
                    </tbody>
                </table>
            </div>
        </>
    )
}