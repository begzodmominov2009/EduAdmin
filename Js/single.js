let path = new URLSearchParams(location.search)
let id = path.get("teacherId")
let teachersStudents = document.getElementById("teachers-students")
let teacherContact = document.getElementById("teacher-contact")
let teacherContactBtn = document.getElementById("teacher-contact-btn")
let teacherStudentBtn = document.getElementById("teachers-students-btn")
let teacherData = document.getElementById("teacher-data")
let teacherDataStudents = document.getElementById("teacher-data-students")
let teacherStudents = document.getElementById("teacher-student")
let studentsNumber = document.getElementById("students-number")
let loadingTeacherSingle = document.getElementById("loading-teacher-single")
let teacherName = document.getElementById("teacher-name")
teacherStudentBtn.addEventListener("click", () => {
    teacherContact.classList.add("hidden")
    teacherContactBtn.style.backgroundColor = "transparent"
    teacherStudentBtn.style.backgroundColor = "#ffff"
    teachersStudents.classList.remove("hidden")

})
teacherContactBtn.addEventListener("click", () => {
    teacherContact.classList.remove("hidden")
    teacherContactBtn.style.backgroundColor = "#ffff"
    teacherStudentBtn.style.backgroundColor = "transparent"
    teachersStudents.classList.add("hidden")
})

async function getSingleDatas(id) {
    try {
        let res = await axios.get(`https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers/${id}`)
        let res2 = await axios.get(`https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers/${id}/Students`)
        let e = res2.data
        let el = res.data

        studentsNumber.textContent = e.length
        teacherName.textContent = el.firstName
        loadingTeacherSingle.classList.add("hidden")
        teacherData.innerHTML += `
          <div class="flex flex-col gap-2 items-center justify-center">
                        <div class="bg-gray-200 w-[120px] rounded-[50%] p-1  h-[120px]">
                            <img class="w-full h-full rounded-[50%]" src=${el.avatar} alt="">
                        </div>
                        <h1>${el.firstName}</h1>
                        <p class="bg-gray-200 p-1 rounded-lg text-[14px]">${el.profession}</p>
                    </div>
                    <div class="flex flex-col gap-2 mt-[20px]">
                        <div class="flex items-center justify-between">
                            <p>Age</p>
                            <p>${el.age} years</p>
                        </div>
                        <div class="flex items-center justify-between">
                            <p>Experience</p>
                            <p>${el.Experience} years</p>
                        </div>
                        <div class="flex items-center justify-between">
                        <p>Gander</p>
                            ${el.ganer}
                        </div>
                        <div class="flex items-center justify-between">
                            <p>Rating</p>
                            <div class="flex items-center gap-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                    aria-hidden="true">
                                    <path
                                        d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                    </path>
                                </svg>
                                <p>${el.rating}</p>
                            </div>
                        </div>
                        <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full bg-black rounded-full"></div>
                        </div>
                    </div>
                    <button data-slot="button"
                        class="inline-flex items-center bg-[black] text-[white] mt-[20px] justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full gap-2"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                            <path
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                            </path>
                            <path d="m15 5 4 4"></path>
                        </svg>
                        <p>Edit Profile</p>
                    </button>   
            `
          teacherContact.innerHTML += `
            <div class="flex items-center bg-gray-50 rounded-lg p-3 gap-3 pb-4">
                            <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-phone h-5 w-5 text-blue-600 dark:text-blue-400"
                                    aria-hidden="true">
                                    <path
                                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                                    </path>
                                </svg></div>
                            <div>
                                <p class="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                                <p class="text-gray-900 text-[14px] sm:text-[16px] dark:text-white">${el.phone}</p>
                            </div>
                        </div>
                        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                            <div class="flex items-center gap-1.5 sm:gap-3 mb-2">
                                <div class="p-2 rounded-lg bg-green-100 dark:bg-green-900"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-mail h-5 w-5 text-green-600 dark:text-green-400"
                                        aria-hidden="true">
                                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                                    </svg></div>
                                <div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
                                    <p class="text-gray-900 text-[14px] sm:text-[16px] dark:text-white">${el.email}</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                            <div class="flex items-center gap-1.5 sm:gap-3 mb-2">
                                <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-send h-5 w-5 text-blue-400"
                                        aria-hidden="true">
                                        <path
                                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                                        </path>
                                        <path d="m21.854 2.147-10.94 10.939"></path>
                                    </svg></div>
                                <div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Telegram</p>
                                    <p class="text-gray-900 text-[14px] sm:text-[16px] dark:text-white">@${el.telegram}</p>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-linkedin h-5 w-5 text-blue-600 dark:text-blue-400"
                                        aria-hidden="true">
                                        <path
                                            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                        </path>
                                        <rect width="4" height="12" x="2" y="9"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg></div>
                                <div>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                                    <p class="text-gray-900 dark:text-white text-[14px] sm:text-[16px] truncate">${el.linkedin}
                                    </p>
                                </div>
                            </div>
                        </div>
        `
        e.map((el) => {
            teacherStudents.innerHTML += `
            <div
                                class="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                                <span data-slot="avatar"
                                    class="relative flex size-10 shrink-0 overflow-hidden rounded-full"><img
                                        data-slot="avatar-image" class="aspect-square size-full" alt="Velma Kub"
                                        src=${el.avatar}></span>
                                <div class="flex-1">
                                    <p class="text-gray-900 dark:text-white">Velma Kub</p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Grade ${el.grade} • ${el.age} years old</p>
                                </div>
                                <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"
                                        aria-hidden="true">
                                        <path
                                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                                        </path>
                                    </svg><span class="text-gray-900 dark:text-white">${el.rating}</span></div>
                            </div>
            `
        })


    } catch (err) {
        console.log(err);

    }
}
getSingleDatas(id)