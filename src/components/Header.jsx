import { COLORS } from "../COLORS"

export default function Header({ handleClickOpenMenu }) {
    return (
        <header className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-5">



            <div>
                <div className="flex">
                    <button className={"sm:hidden mx-2"} onClick={handleClickOpenMenu}>
                    <i className={"fa-solid fa-bars text-3xl md:text-2xl"} />
                </button>
                
                <h1
                    className="text-3xl font-bold"
                    style={{ color: COLORS.text }}
                >
                    Dashboard
                </h1>
                </div>

                <p
                    className="text-gray-300 ml-10 md:ml-0"
                    style={{ color: COLORS.text }}>
                    Student Management
                </p>
            </div>

            <h2 className="text-lg md:text-2xl">Hello, Mohammed Laabidi</h2>
        </header>
    )
}
