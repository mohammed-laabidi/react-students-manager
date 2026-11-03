
export default function Input({ label="", type = "", placeholder = "", value = "", handleChange = () => { }, id }) {

    return (
        <div className="flex flex-col gap-1">
            {label && <label htmlFor={id} className="text-sm font-medium text-gray-300">{label}</label>}
            <input 
                id={id}
                type={type} 
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className="text-sm border border-gray-600 outline-none mt-2 px-2 py-1 rounded-md" 
            />
        </div>
    )
}