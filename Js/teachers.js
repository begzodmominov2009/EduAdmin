let allCard = document.querySelector(".all-card")
let teachersNumber = document.getElementById("teachers-number")
let form = document.getElementById("form")
let modalTeachers = document.getElementById("modal-teachers")
let innerModal = document.getElementById("inner-modal")
let addTeachers = document.getElementById("add-teachers")
let selectGener = document.getElementById("select-gener")
let selectProfession = document.getElementById("select-profession")
let selectExperience = document.getElementById("select-experience")
let selectRating = document.getElementById("select-rating")
let searchTeacher = document.getElementById("search-teacher")
let clearFilter = document.getElementById("clearFilters")
let asideToggleTeachers = document.getElementById("aside-toggle-teacher")
let asideContentTeacher = document.querySelector(".aside-content-teacher")
let asideContentsTeacher = document.querySelector(".aside-content-teacher2")
let asideContentsTeacher2 = document.querySelector(".aside-content-teacher3")
let asideContentsTeacher3 = document.querySelector(".aside-content-teacher4")
let asideContentsTeacher4 = document.querySelector(".aside-content-teacher5")
let mainTeacher = document.getElementById("main-teachers")
let headerTeacher = document.getElementById("header-teacher")
let asideTeacher = document.getElementById("aside-teacher")
let asideToggleTeachers2 = document.getElementById("aside-toggle2-teacher")
let loadingTeacher = document.getElementById("loading-teacher")
let renderTeachers = []

async function getData() {
    try {
        let res = await axios.get("https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers")
        renderTeachers = res.data
        teachersNumber.textContent = res.data.length
        console.log(res.data);
        loadingTeacher.classList.add("hidden")
        showCard(renderTeachers)
    } catch (err) {
        console.log(err)
        loadingTeacher.classList.add("hidden")
    }
}

function showCard(data) {
    allCard.innerHTML = ""
    data.map((el) => {
        allCard.innerHTML += `
          <div
                class="w-full border-1 group hover:shadow-xl transform transition hover:scale-102 duration-300 dark:border-gray-600 dark:bg-gray-800 border-gray-200 bg-white p-6 rounded-lg">
                <div class="flex flex-col gap-2 items-center justify-center">
                    <a href="../Pages/single-teach.html?teacherId=${el.id}" class="block">
                      <img class="aspect-square object-cover w-20 h-20 rounded-[50%] bg-blue-200 p-[3px]" alt="Marlene O'Reilly" src="${el.avatar}">
                    </a>     
                    <h3 class="dark:text-[white] mb-1">${el.firstName}</h3>
                    <p class="px-2 pb-1 bg-gray-200 dark:bg-gray-900 dark:text-[white] rounded-lg text-[14px]"">${el.profession}</p>
                        <div class=" flex gap-3">
                        <div class=" flex items-center gap-[2px]">
                            <svg class="text-gray-900 dark:text-white" xmlns=" http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-briefcase h-4 w-4" aria-hidden="true">
                                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                            </svg>
                            <p class="text-[black] dark:text-gray-400">${el.Experience}y</p>
                        </div>
                        <div class="flex items-center gap-[2px]">
                            <svg class="text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-users h-4 w-4" aria-hidden="true">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                            </svg>
                            <p class="text-[black] dark:text-gray-400">5</p>
                        </div>
                </div>
                <div class="flex items-center gap-[2px]">
                    <svg class="text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true">
                        <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                        </path>
                    </svg>
                    <p class="text-[black] dark:text-[white]">${el.rating}</p>
                </div>
            </div>
            <div class="flex flex-col gap-2 mt-6 sm:mt-12">
                <div class="flex items-center gap-[6px]">
                    <svg class="text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-phone h-4 w-4 flex-shrink-0 text-blue-500" aria-hidden="true">
                        <path
                            d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
                        </path>
                    </svg>
                    <span class="truncate text-[black] dark:text-gray-400">${el.phone}</span>
                </div>
                <div class="flex items-center gap-[6px]">
                    <svg class="text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-mail h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    </svg>
                    <span class="truncate text-[black] dark:text-gray-400">${el.email}</span>
                </div>
                <div class="flex items-center gap-[6px]">
                    <svg class="text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-send h-4 w-4 flex-shrink-0 text-blue-400" aria-hidden="true">
                        <path
                            d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z">
                        </path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                    </svg>
                    <span class="truncate  text-[black] dark:text-gray-400">${el.telegram}</span>
                </div>
                <div class="flex items-center gap-[6px]">
                    <svg class="text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-linkedin h-4 w-4 flex-shrink-0 text-blue-600" aria-hidden="true">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    <span class="truncate  text-[black] dark:text-gray-400">${el.linkedin}</span>
                </div>
            </div>
            <div class="opacity-none md:opacity-0 group-hover:opacity-100 duration-200">
                <div class="flex items-center gap-2 mt-6 sm:mt-12">
                    <div
                        class="flex items-center py-0.5 w-full gap-2 bg-[white] dark:bg-gray-900 dark:border-gray-900 group cursor-pointer hover:bg-gray-200 border-1 border-gray-300 rounded-lg flex items-center justify-center">
                        <svg class="text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-pencil h-4 w-4" aria-hidden="true">
                            <path
                                d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z">
                            </path>
                            <path d="m15 5 4 4"></path>
                        </svg>
                        <p class="font-bold text-[14px] dark:text-[white]">Edit</p>
                    </div>
                    <div onClick="deletTeacher(${el.id})"
                        class="flex items-center py-0.5 w-full gap-2 bg-[white] dark:border-gray-900 dark:bg-gray-900 group cursor-pointer hover:bg-gray-200 border-1 border-gray-300 rounded-lg flex items-center justify-center">
                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
        `
    })
}

getData()

addTeachers.addEventListener("click", () => {
    modalTeachers.classList.remove("hidden")
})

async function addTeacher(payload) {
    try {
        await axios.post("https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers", payload)
    } catch (error) {
        console.log(error);

    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let teachersObj = {}
    teachersObj.firstName = form[0].value
    teachersObj.lastName = form[1].value
    teachersObj.createdAt = form[2].value
    teachersObj.age = form[3].value
    teachersObj.avatar = form[4].value
    teachersObj.profession = form[5].value
    teachersObj.rating = form[6].value
    teachersObj.Experience = form[7].value
    teachersObj.ganer = form[8].value
    teachersObj.phone = form[9].value
    teachersObj.email = form[10].value
    teachersObj.telegram = form[11].value
    teachersObj.linkedin = form[12].value
    modalTeachers.classList.add("hidden")
    addTeacher(teachersObj)
    getData()
})

innerModal.addEventListener("click", (e) => {
    e.stopPropagation();
})

modalTeachers.addEventListener("click", (e) => {
    modalTeachers.classList.add("hidden")
})

async function deletTeacher(id) {
    try {
        await axios.delete(`https://69208abe31e684d7bfcd6e40.mockapi.io/Teachers/${id}`)
        console.log("Deleted", id)
        await getData(allCard)
    } catch (err) {
        console.log(err)
    }
    getData()
}

selectGener.addEventListener("change", (e) => {
    let selectValue = e.target.value;
    let filtered = selectValue === "All Gener" ? renderTeachers : renderTeachers.filter((el) => el.ganer === selectValue)

    allCard.innerHTML = ""
    if (filtered.length === 0) {
        allCard.innerHTML = `
          <div class="flex items-center justify-center">
           <p class="text-red-500 text-xl font-semibold py-10">
                No such person found 😕
            </p>
          </div>
        `;
        return
    }
    if (selectGener.value !== "All Gener") {
        clearFilter.style.display = "inline-block"
    } else {
        clearFilter.style.display = "none"
    }

    showCard(filtered)
})

clearFilter.addEventListener("click", () => {
    searchTeacher.value = "";
    selectGener.value = "All Gener"
    selectExperience.value = "All Experience"
    selectProfession.value = "All Profession"
    selectRating.value = "All Rating"
    clearFilter.style.display = "none"
    showCard(renderTeachers)
});

selectProfession.addEventListener("change", (e) => {
    let selectValues = e.target.value;
    console.log(selectValues);
    let filtereds = selectValues === "All Profession" ? renderTeachers : renderTeachers.filter((el) => el.profession === selectValues)

    allCard.innerHTML = ""
    if (filtereds.length === 0) {
        allCard.innerHTML = `
          <div class="flex items-center justify-center">
           <p class="text-red-500 text-xl font-semibold py-10">
                No such person found 😕
            </p>
          </div>
        `;
        return
    }
    if (selectProfession.value !== "All Profession") {
        clearFilter.style.display = "inline-block"
    }
    showCard(filtereds)
})

selectExperience.addEventListener("change", (e) => {
    let experienceValue = e.target.value;
    let experienceFiltered = experienceValue === "All Experience" ? renderTeachers
        : renderTeachers.filter((el) => el.Experience === experienceValue)
    allCard.innerHTML = ""
    if (experienceFiltered.length === 0) {
        allCard.innerHTML = `
          <div class="flex items-center justify-center">
           <p class="text-red-500 text-xl font-semibold py-10">
                No such person found 😕
            </p>
          </div>
        `
        return
    }
    if (selectExperience.value !== "All Experience") {
        clearFilter.style.display = "inline-block"
    } else {
        clearFilter.style.display = "none"
    }
    showCard(experienceFiltered)

})

selectRating.addEventListener("change", (e) => {
    let ratingValue = e.target.value;
    let ratingFiltered = ratingValue === "All Rating" ? renderTeachers
        : renderTeachers.filter((el) => el.rating === ratingValue);
    allCard.innerHTML = ""
    if (ratingFiltered.length === 0) {
        allCard.innerHTML = `   
           <div class="flex items-center justify-center">
           <p class="text-red-500 text-xl font-semibold py-10">
                No such person found 😕
            </p>
          </div>
        `
        return
    }
    if (selectRating.value !== "All Rating") {
        clearFilter.style.display = "inline-block"
    } else {
        clearFilter.style.display = "none"
    }
    showCard(ratingFiltered)
})

searchTeacher.addEventListener("input", (e) => {
    let searchValue = e.target.value.toLowerCase();
    let searchFiltered = renderTeachers.filter((el) =>
        el.firstName.toLowerCase().includes(searchValue) ||
        el.lastName.toLowerCase().includes(searchValue) ||
        el.Experience.toLowerCase().includes(searchValue) ||
        el.profession.toLowerCase().includes(searchValue) ||
        el.rating.toLowerCase().includes(searchValue)
    );
    if (searchTeacher.value !== "") {
        clearFilter.style.display = "inline-block"
    } else {
        clearFilter.style.display = "none"
    }
    showCard(searchFiltered)
})

asideToggleTeachers.addEventListener("click", () => {
    asideContentTeacher.classList.add("hidden", "duration-400")
    asideContentsTeacher.classList.add("hidden", "duration-400")
    asideContentsTeacher2.classList.add("hidden", "duration-400")
    asideContentsTeacher3.classList.add("hidden", "duration-400")
    asideContentsTeacher4.classList.add("hidden", "duration-400")
    asideTeacher.style.width = "70px"
    headerTeacher.style.paddingLeft = "90px";
    mainTeacher.style.paddingLeft = "90px"
    mainTeacher.style.transition = "0.4s"
    headerTeacher.style.transition = "0.4s "
    asideToggleTeachers.classList.add("hidden", "duration-400")
    asideToggleTeachers2.classList.remove("hidden", "duration-400")
})
asideToggleTeachers2.addEventListener("click", () => {
    asideContentTeacher.classList.remove("hidden", "duration-400")
    asideContentsTeacher.classList.remove("hidden", "duration-400")
    asideContentsTeacher2.classList.remove("hidden", "duration-400")
    asideContentsTeacher3.classList.remove("hidden", "duration-400")
    asideTeacher.classList.add("duration-400")
    asideContentsTeacher4.classList.remove("hidden", "duration-400")
    asideTeacher.style.width = "260px"
    headerTeacher.style.paddingLeft = "290px";
    mainTeacher.style.paddingLeft = "290px"
    asideToggleTeachers.classList.remove("hidden", "duration-400")
    asideToggleTeachers2.classList.add("hidden", "duration-400")
})







