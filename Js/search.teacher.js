let searchTeacher = document.getElementById("search-teacher")
searchTeacher.addEventListener("input" , (e) => {
    let searchValue = e.target.value;
    let filteredTeachers = cards.filter((el) => el.name.toUpperCase().includes(searchTeacher.toUpperCase()))
    let filteredJobsTeacher = cards.filter((el) => el.jobs.toUpperCase().includes(searchValue.toUpperCase()))
})