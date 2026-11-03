import { saveStorage } from "../utils";

export default function AppReducer(currentStudents, action) {
  try {
    const clonedStudents = [...currentStudents]

    switch (action.type) {
      case "addStudent":
        const { Name, Email } = action.payload

        if (!Name.trim() || !Email.trim()) {
          alert("please fill all inputs")
          return currentStudents;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
          alert("this Email is invalid")
          return currentStudents
        }

        const EmailIsFound = currentStudents.some(e => e.email === Email.trim())

        if (EmailIsFound) {
          alert("this email already exists")
          return currentStudents
        }

        if(currentStudents && currentStudents.length > 0){
          var maxId = currentStudents[currentStudents.length - 1].id
        }else{
          var maxId = 0
        }

        const student = {
          id: maxId + 1,
          fullName: Name,
          email: Email,
          status: "inactive"
        };

        const updatedStudents = [...currentStudents, student];

        saveStorage(updatedStudents)
        return updatedStudents;

      case "updateStudent":
        const { id, updatedName, updatedEmail } = action.payload
        const updatedList = currentStudents.map(e => 
            e.id === id ? { ...e, fullName: updatedName, email: updatedEmail } : e
        )
        saveStorage(updatedList)
        return updatedList;

      case "deleteStudent":
        const { idStudentDelete } = action.payload

        if (!confirm(`are you sure delete student ${idStudentDelete + 1}`)) return currentStudents
        clonedStudents.splice(idStudentDelete, 1)

        saveStorage(clonedStudents)
        return clonedStudents

      case "changeStudentStatus":
        const { idStudentChangeStatus } = action.payload
        const currentStatus = clonedStudents[idStudentChangeStatus].status

        clonedStudents[idStudentChangeStatus].status = (currentStatus === "active") ? "inactive" : "active"

        saveStorage(clonedStudents)
        return clonedStudents

      case "getStudents":
        const savedListStudents = localStorage.getItem("students");
        return savedListStudents ? JSON.parse(savedListStudents) : currentStudents;

      default:
        return currentStudents;
    }
  } catch (error) {
    console.error("Error in AppReducer :", error);
    return currentStudents;
  }
}
