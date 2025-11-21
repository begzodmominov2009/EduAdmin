let asideToggle = document.getElementById("aside-toggle")
let asideContent = document.querySelector(".aside-content")
let asideContents = document.querySelector(".aside-contents")
let asideContents2 = document.querySelector(".aside-contents2")
let asideContents3 = document.querySelector(".aside-contents3")
let asideContents4 = document.querySelector(".aside-contents4")
let main = document.getElementById("main")
let header = document.getElementById("header")
let aside = document.getElementById("aside")
let asideToggle2 = document.getElementById("aside-toggle2")
asideToggle.addEventListener("click", () => {
    asideContent.classList.add("hidden", "duration-400")
    asideContents.classList.add("hidden", "duration-400")
    asideContents2.classList.add("hidden", "duration-400")
    asideContents3.classList.add("hidden", "duration-400")
    asideContents4.classList.add("hidden", "duration-400")
    aside.style.width = "70px"
    header.style.paddingLeft = "90px";
    main.style.paddingLeft = "90px"
    main.style.transition = "0.4s"
    header.style.transition = "0.4s "
    asideToggle.classList.add("hidden", "duration-400")
    asideToggle2.classList.remove("hidden", "duration-400")
})
asideToggle2.addEventListener("click", () => {
    asideContent.classList.remove("hidden", "duration-400")
    asideContents.classList.remove("hidden", "duration-400")
    asideContents2.classList.remove("hidden", "duration-400")
    asideContents3.classList.remove("hidden", "duration-400")
    aside.classList.add("duration-400")
    asideContents4.classList.remove("hidden", "duration-400")
    aside.style.width = "260px"
    header.style.paddingLeft = "290px";
    main.style.paddingLeft = "290px"
    asideToggle.classList.remove("hidden", "duration-400")
    asideToggle2.classList.add("hidden", "duration-400")
})

let totalStudents = document.getElementById("total-students")
let totalTeachers = document.getElementById("total-teachers")
let avgTeacher = document.getElementById("avg-teacher")
let avgStudents = document.getElementById("avg-student")


async function totalTeacher() {
    try {
        let studentsRes = await axios.get("https://69208abe31e684d7bfcd6e40.mockapi.io/Students")
        let teachersRes = await axios.get("https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers")
        let teacher = teachersRes.data;
        let students = studentsRes.data;

        let totalRatingTeacher = teacher.reduce((sum, teacher) => sum + teacher.rating, 0)
        let avgRatingTeacher = totalRatingTeacher / teacher.length;
        avgTeacher.textContent = avgRatingTeacher.toFixed(1)        

        let totalRatingStudent = students.reduce((sum, students) => sum + students.rating, 0)
        let avgRatingStudent = totalRatingStudent / students.length
        avgStudents.textContent = avgRatingStudent.toFixed(1)

        totalTeachers.textContent = teachersRes.data.length
        totalStudents.textContent = studentsRes.data.length
    } catch (error) {
        console.log(error);

    }
}
totalTeacher()

