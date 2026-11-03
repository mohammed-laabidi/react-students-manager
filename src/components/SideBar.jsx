import { COLORS } from "../COLORS";

export default function Menu({openMenu,handleClickOpenMenu}) {

    const listInfos = [
        {
            id: 1,
            icon: "fas fa-home",
            title: "Dashboard",
        },
        {
            id: 2,
            icon: "fas fa-user-group",
            title: "Etudiants",
        }
    ];

    const listItems = listInfos.map(l => {
        return (
            <li key={l.id} style={{ "--primary": COLORS.primary, "--primary-dark": COLORS.primaryDark }} className="w-[90%] bg-[var(--primary)] hover:bg-[var(--primary-dark)] py-1 mb-3 rounded-sm cursor-pointer transition duration-150 ease-in-out">
                <a href="#">
                    <i className={`${l.icon} mr-5 ml-2`}></i>
                    {l.title}
                </a>
            </li>
        )
    })

    return (
        <aside   
            style={{ backgroundColor: COLORS.sidebar }}
            className={`text-nowrap h-screen w-12 ${(openMenu) ? "block w-60  " : "hidden"}  fixed top-0 left-0 sm:block hover:w-80 transition-all duration-350 overflow-hidden border-r border-white`}
        >
            <button className="md:hidden absolute top-3 right-3" onClick={handleClickOpenMenu}>
                <i className="fa-solid fa-xmark text-center text-2xl"/>
            </button>

            <h1 className={"font-medium text-xl mt-10 md:mt-5"}>
                <i
                    className="fa-solid fa-school p-[10px]"
                    style={{ color: COLORS.accent }}
                />

                Students Manger
            </h1>

            <ul className={"my-5 ml-2"}>
                {listItems}
            </ul>
        </aside>
    )
}
