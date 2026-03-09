const loginBtn = document.getElementById("loginBtn")
const container = document.getElementById("issuesContainer")
const loading = document.getElementById("loading")
const issueCount = document.getElementById("issueCount")

const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues"

let allIssues = []

/* Login Page */
loginBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if(username === "admin" && password === "admin123"){

        document.getElementById("loginPage").classList.add("hidden")
        document.getElementById("dashboardPage").classList.remove("hidden")

        loadIssues()

    }else{
        alert("Please check your User Name and Password")
    }
})



/* Load Issues */
const loadIssues = async () => {

    loading.classList.remove("hidden")

    const res = await fetch(url)
    const data = await res.json()

    allIssues = data.data
    displayIssues(allIssues)
    loading.classList.add("hidden")

}



/* Display Cards */
const displayIssues = (issues) => {
    container.innerHTML = "";
    issueCount.textContent = issues.length
    issues.forEach(issue => {

    const card = document.createElement("div")
    const borderColor = issue.status === "open" ? "border-green-500" : "border-purple-500"

    const icon = issue.status === "open"
    ? `<div class="text-green-500 text-xl">
            <img class="w-[24px] h-[24px]" src="./assets/Open-Status.png" alt="Open Status"/>
        </div>`
    : `<div class="text-purple-500 text-xl">
            <img class="w-[24px] h-[24px]" src="./assets/Closed-Status .png" alt="Open Status"/>
        </div>`


    card.className = `bg-base-100 shadow-md rounded-xl border-t-4 ${borderColor} cursor-pointer`

    card.innerHTML = `
    <div class="p-5">
        <div class="flex justify-between mb-2"> ${icon} 
            <span class="badge badge-error badge-outline">${issue.priority}</span>
        </div>

        <h2 class="font-bold text-lg mb-1"> ${issue.title} </h2>
        <p class="text-sm text-gray-500 mb-3">
            ${issue.description.slice(0,80)}...
        </p>

        <div class="flex gap-2 mb-4">
            <span class="badge badge-error badge-outline">BUG</span>
            <span class="badge badge-warning badge-outline">HELP WANTED</span>
        </div>

        <hr class="mb-3 border-b border-[#E4E4E7]">

        <div class="text-sm text-gray-500">
            <p>#${issue.id} by ${issue.author}</p>
            <p>${issue.createdAt}</p>
        </div>
    </div>
    `;

    card.addEventListener("click", () => openModal(issue.id))
    container.appendChild(card)
});
}



/* Modals */
const openModal = async (id) => {

    loading.classList.remove("hidden")

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    const data = await res.json()

    const issue = data.data

    loading.classList.add("hidden")

    document.getElementById("modalTitle").innerText = issue.title
    document.getElementById("modalDescription").innerText = issue.description
    document.getElementById("modalAuthor").innerText = issue.author
    document.getElementById("modalPriority").innerText = issue.priority

    document.getElementById("modalStatus").innerHTML =
    issue.status === "open"
    ? `<span class="badge badge-success">Opened</span>`
    : `<span class="badge badge-secondary">Closed</span>`

    document.getElementById("modalLabels").innerHTML = `
    <span class="badge badge-error badge-outline">BUG</span>
    <span class="badge badge-warning badge-outline">HELP WANTED</span>
    `;
    issueModal.showModal()
}



/* Tab */
const tabs = document.querySelectorAll(".tabBtn") 
tabs.forEach(tab => {
    tab.addEventListener("click", async () => {
    tabs.forEach(t => t.classList.remove("tab-active"))
    tab.classList.add("tab-active")
    loading.classList.remove("hidden")

    const status = tab.dataset.status
    const res = await fetch(url)
    const data = await res.json()

    allIssues = data.data

    if(status === "all"){
        displayIssues(allIssues)
    }else{
        const filtered = allIssues.filter(issue => issue.status === status)
        displayIssues(filtered)
    }

    loading.classList.add("hidden")
});
})



// Search Bar Section
document.getElementById("searchBtn").addEventListener("click", () => {
    const text = document.getElementById("searchInput").value.trim()

    if(text === ""){
        alert("Please enter something to search")
        return
    }

    loading.classList.remove("hidden")

    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${text}`)
        .then(res => res.json())
        .then(data => {

            if(!data.data || data.data.length === 0){
                container.innerHTML = `
                <div class="col-span-4 text-center py-10 text-gray-500 font-semibold">
                    No issues found for "${text}"
                </div>
                `;
                issueCount.textContent = 0

            } else {
                displayIssues(data.data)
            }

        })
        .catch(error => {
            console.log(error)
            container.innerHTML = `
            <div class="col-span-4 text-center py-10 text-red-500 font-semibold">
                Something went wrong. Please try again.
            </div>
            `;

        })

        .finally(() => {
            loading.classList.add("hidden")
        })
})