import { COLORS } from "../COLORS";
import Input from "./Input";

const status = [
    {
        id: 1,
        content: "all"
    },
    {
        id: 2,
        content: "active"
    },
    {
        id: 3,
        content: "inactive"
    }
]


const statusOptionTags = status.map(s => {
    return (
        <option
            key={s.id}
            value={s.content}
            style={{ backgroundColor: COLORS.panel }}>
            {s.content}
        </option>
    )
})

export default function FormSearchStudents({ searchValue, setSearchValue, filterStatus, setFilterStatus }) {
    return (
        <div
            style={{ backgroundColor: COLORS.panel }}
            className="border border-gray-600 rounded-md p-3"
        >
            <h1 className="font-bold">
                <i
                    className={"fa-solid fa-magnifying-glass mr-3"}
                    style={{ color: COLORS.primary }}
                />
                Search for a student
            </h1>


            <form onSubmit={e => e.preventDefault()}>
                <Input
                    id="search"
                    type="search"
                    placeholder="Search by name..."
                    value={searchValue}
                    handleChange={e => setSearchValue(e.target.value)}
                />
 
                <div className="flex flex-col mt-5">
                    <label htmlFor="" className="text-sm">Filter by status</label>

                    <select
                        value={filterStatus}
                        onChange={e => setFilterStatus(e.target.value)}
                        className="text-sm border border-gray-600 outline-none mt-2 px-2 py-1 rounded-md"
                    >

                        {statusOptionTags}
                    </select>
                </div>
            </form>
        </div>
    )
}
