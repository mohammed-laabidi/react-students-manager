import { COLORS } from "../COLORS"

export default function Header({handleClickOpenMenu}) {
    return (
        <header className="w-full flex gap-5">
            
            <button className={"sm:hidden"} onClick={handleClickOpenMenu}>
                <i className={"fa-solid fa-bars text-2xl"}/>
            </button>

            <div>
                <h1
                    className="text-3xl font-bold"
                    style={{ color: COLORS.text }}
                >
                    Dashboard
                </h1>

                <p
                    className="text-gray-300"
                    style={{ color: COLORS.text }}>
                    Student Management
                </p>
            </div>
        </header>
    )
}
