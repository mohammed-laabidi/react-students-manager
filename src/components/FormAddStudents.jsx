import { COLORS } from "../COLORS";
import Input from "./Input";

export default function FormAddStudents({ name, setName, email, setEmail, handleClickAdd, isEditing, clearAddForm }) {

    return (
        <div style={{ backgroundColor: COLORS.panel }} className="border border-gray-600 rounded-md p-3">
            <h2 className="text-lg font-bold">
                <i className={`fa-solid ${isEditing ? 'fa-pen' : 'fa-plus'} mr-3`} style={{ color: COLORS.primary }}></i>
                {isEditing ? "Edit Student" : "Add Student"}
            </h2>


            <hr className="my-2 text-gray-600" />

            <form onSubmit={e => e.preventDefault()}>
               
                <Input
                    id="name"
                    label="Full Name"
                    type="text"
                    placeholder="Ex: Mohammed Laabidi"
                    value={name}
                    handleChange={e => setName(e.target.value)}
                />

                <div className="my-2 flex flex-col">
                    <Input
                        id="email"
                        label="Email"
                        type="text"
                        placeholder="Ex: mohammed@example.com"
                        value={email}
                        handleChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex justify-evenly gap-2">
                    <button
                        onClick={handleClickAdd}
                        style={{ "--primary": COLORS.primary, "--primary-dark": COLORS.primaryDark }}
                        className={`w-full rounded-sm py-1 bg-[var(--primary)] hover:bg-[var(--primary-dark)] cursor-pointer`}
                    >
                        {isEditing ? "Save Changes" : "Add Student"}
                    </button>
                    <button 
                    type="reset" 
                    onClick={clearAddForm} 
                    style={{ "--secondary": COLORS.secondary, "--secondary-dark": COLORS.secondaryDark }} 
                    className="w-full rounded-sm py-1 bg-[var(--secondary)] hover: bg-[var(--secondary-dark)] cursor-pointer">Reset</button>
                </div>
            </form>
        </div>
    )
}
