function saveStorage(students) {
    localStorage.students = JSON.stringify(students)
}

function getTotalActive(students) {
    const activeStudents = students.filter(e => e.status === "active")
    return activeStudents.length
}

function getTotalInactive(students) {
    const inactiveStudents = students.filter(e => e.status === "inactive")
    return inactiveStudents.length
}

function calculateActivationRate(totalActive, totalStudents) {
    if (totalStudents == 0) return 0
    return Math.floor(totalActive * 100 / totalStudents)
}

export { saveStorage, getTotalActive, getTotalInactive, calculateActivationRate}
