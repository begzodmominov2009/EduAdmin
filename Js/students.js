let studentsCard = document.querySelector(".students-card")
let studentsNumber = document.getElementById("students-number")
let asideToggleStudents = document.getElementById("aside-toggle-students")
let asideContentStudents = document.querySelector(".aside-content-students")
let asideContentsStudents = document.querySelector(".aside-content-students2")
let asideContentsStudents2 = document.querySelector(".aside-content-students3")
let asideContentsStudents3 = document.querySelector(".aside-content-students4")
let asideContentsStudents4 = document.querySelector(".aside-content-students5")
let mainStudents = document.getElementById("main-students")
let headerStudents = document.getElementById("header-students")
let asideStudents = document.getElementById("aside-students")
let asideToggleStudents2 = document.getElementById("aside-toggle2-students")
let teacherName = document.getElementById("teacher-name")
let formStudent = document.getElementById("form-student")
let addStudent = document.getElementById("add-student")
let moadlStudent = document.getElementById("modal-students")
let loading = document.getElementById("loading")


async function getDataStudents(content) {
    try {
        let res = await axios.get("https://69208abe31e684d7bfcd6e40.mockapi.io/Students")
        let teacherRes = await axios.get("https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers")
        studentsNumber.textContent = res.data.length
        loading.classList.add("hidden");
        console.log(res.data);
        teacherRes.data.map((el) => {
            teacherName.innerHTML += `
            <option value="${el.firstName}">${el.firstName}</option>
            `
        })
        res.data.map((el) => {
            content.innerHTML += `
            <div
                class="w-full border-1 group hover:shadow-xl transform transition hover:scale-102 duration-300 border-gray-200 dark:border-gray-600  dark:bg-gray-800 bg-white p-6 rounded-lg">
                <div class="flex flex-col gap-2 items-center justify-center">
                    <img class="aspect-square w-20 h-20 rounded-[50%] bg-blue-200 p-[3px]" alt="Marlene O'Reilly"
                        src=${el.avatar} 
                        <h3 class="text-gray-900 dark:text-white mb-1">${el.firstName}</h3>
                    <div class=" flex gap-3">
                        <div
                            class="border-[1px] border-blue-600 px-2 text-[14px] rounded-lg flex items-center gap-[2px]">
                            <p class="text-blue-600 text-[12px]">Grade ${el.grade}</p>
                        </div>
                        <div class="flex items-center gap-[2px]">
                            <p class="text-gray-900 dark:text-gray-400">${el.age}y</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex items-center gap-[2px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
                                <path
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                </path>
                            </svg>
                            <p class="text-gray-900 dark:text-[white] text-[14px]">${el.rating}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-coins h-4 w-4 text-yellow-500"
                                aria-hidden="true">
                                <circle cx="8" cy="8" r="6"></circle>
                                <path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
                                <path d="M7 6h1v4"></path>
                                <path d="m16.71 13.88.7.71-2.82 2.82"></path>
                            </svg>
                            <p class="text-gray-900 dark:text-[white] text-[14px]">${el.coins}</p>
                        </div>
                    </div>
                    <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div class="h-full bg-black rounded-full"></div>
                    </div>
                </div>
                <div class="flex flex-col gap-2 mt-12">
                    <div class="flex items-center gap-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500" aria-hidden="true">
                            <path
                                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                            </path>
                        </svg>
                        <span class="truncate text-gray-900 dark:text-gray-400">${el.phone}</span>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        </svg>
                        <span class="truncate text-gray-900 dark:text-gray-400">${el.email}</span>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400" aria-hidden="true">
                            <path
                                d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                            </path>
                            <path d="m21.854 2.147-10.94 10.939"></path>
                        </svg>
                        <span class="truncate text-gray-900 dark:text-gray-400">${el.telegram}</span>
                    </div>
                    <div class="flex items-center gap-[6px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                            </path>
                            <rect width="4" height="12" x="2" y="9"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span class="truncate text-gray-900 dark:text-gray-400">${el.linkedin}</span>
                    </div>
                </div>
                <div class="opacity-0 group-hover:opacity-100 duration-200">
                    <div class="flex items-center gap-2 mt-12">
                        <div
                            class="flex items-center py-0.5 w-full gap-2 bg-[white] group cursor-pointer hover:bg-gray-200 border-1 border-gray-300 rounded-lg flex items-center justify-center">
                            <svg class="text-gray-900 dark:text-[white] w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                                <path
                                    d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                                </path>
                                <path d="m15 5 4 4"></path>
                            </svg>
                            <p class="font-bold text-[14px]">Edit</p>
                        </div>
                        <div
                            class="flex items-center py-0.5 w-full gap-2 bg-[white] group cursor-pointer hover:bg-gray-200 border-1 border-gray-300 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-trash2 lucide-trash-2 h-4 w-4" aria-hidden="true">
                                <path d="M10 11v6"></path>
                                <path d="M14 11v6"></path>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                                <path d="M3 6h18"></path>
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                            <p class="text-[red] text-[14px] font-bold">Delet</p>
                        </div>
                    </div>
                </div>
            </div>
        `        })
    } catch (error) {
        console.log(error);
        loading.classList.add("hidden");
    }
}
getDataStudents(studentsCard)

formStudent.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e.target.value[1])

})
addStudent.addEventListener("click", () => {
    moadlStudent.classList.remove("hidden")
})

asideToggleStudents.addEventListener("click", () => {
    asideContentStudents.classList.add("hidden", "duration-400")
    asideContentsStudents.classList.add("hidden", "duration-400")
    asideContentsStudents2.classList.add("hidden", "duration-400")
    asideContentsStudents3.classList.add("hidden", "duration-400")
    asideContentsStudents4.classList.add("hidden", "duration-400")
    asideStudents.style.width = "70px"
    headerStudents.style.paddingLeft = "90px";
    mainStudents.style.paddingLeft = "90px"
    mainStudents.style.transition = "0.4s"
    headerStudents.style.transition = "0.4s "
    asideToggleStudents.classList.add("hidden", "duration-400")
    asideToggleStudents2.classList.remove("hidden", "duration-400")
})
asideToggleStudents2.addEventListener("click", () => {
    asideContentStudents.classList.remove("hidden", "duration-400")
    asideContentsStudents.classList.remove("hidden", "duration-400")
    asideContentsStudents2.classList.remove("hidden", "duration-400")
    asideContentsStudents3.classList.remove("hidden", "duration-400")
    asideStudents.classList.add("duration-400")
    asideContentsStudents4.classList.remove("hidden", "duration-400")
    asideStudents.style.width = "260px"
    headerStudents.style.paddingLeft = "290px";
    mainStudents.style.paddingLeft = "290px"
    asideToggleStudents.classList.remove("hidden", "duration-400")
    asideToggleStudents2.classList.add("hidden", "duration-400")
})