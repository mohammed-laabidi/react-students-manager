import { COLORS } from "../COLORS";

export default function Card({ icon, title, value, color }) {
    const themeColors = COLORS;

    const colorStyles = {
        red: {border:'border border-red-400',bgColor:"bg-red-700",titleColor:"text-red-200"},
        blue: {border:'border border-blue-400',bgColor:"bg-blue-700",titleColor:"text-blue-200"},
        green: {border:'border border-green-400',bgColor:"bg-green-700",titleColor:"text-green-200"},
        violet: {border:'border border-violet-400',bgColor:"bg-violet-700",titleColor:"text-violet-200"},
    };

    const styleSelect = colorStyles[color]

    return (
        <div className={`min-w-full py-3 ${styleSelect.border} border-2 rounded-md mt-5 flex items-center hover:scale-[1.1] transition duration-350 ease-in-out`}>
            <i className={`${icon} ${styleSelect.bgColor} text-xl p-4 mx-2 rounded-full`} style={{ color: themeColors.text }}></i>
            <div style={{ color: themeColors.text }}>
                <p className={`${styleSelect.titleColor}`}>{title}</p>
                <span className={"font-bold text-2xl"}>{value}</span>
            </div>
        </div>
    )
}
