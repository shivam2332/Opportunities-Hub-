// Sample data for internships, jobs, hackathons, and open-source projects
const internships = [
    { title: "Software Engineering Intern", company: "Auctane", location: "Austin, TX", type: "Summer 2025" },
    { title: "Data Science Intern", company: "Coinbase", location: "New York, NY", type: "Summer 2025" }
];

const jobs = [
    { title: "Backend Developer", company: "Google", location: "Remote", type: "Full-time" },
    { title: "Product Manager", company: "Amazon", location: "Seattle, WA", type: "Full-time" }
];

const hackathons = [
    { name: "FOSS Hack 2025", date: "Feb 22-23", mode: "Hybrid", prize: "₹10L" },
    { name: "5G Hackathon", date: "Ongoing", mode: "Online", prize: "₹5L Each" }
];

const openSource = [
    { project: "OpenTelemetry", description: "A framework for monitoring cloud applications." },
    { project: "LangChain", description: "Building AI-powered apps with LLMs." }
];

// Function to display data in cards
function displayData(category, data) {
    const container = document.getElementById(`${category}-list`);
    container.innerHTML = "";
    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        
        let content = `<h3>${item.title || item.name || item.project}</h3>`;
        if (item.company) content += `<p><b>Company:</b> ${item.company}</p>`;
        if (item.location) content += `<p><b>Location:</b> ${item.location}</p>`;
        if (item.type) content += `<p><b>Type:</b> ${item.type}</p>`;
        if (item.date) content += `<p><b>Date:</b> ${item.date}</p>`;
        if (item.mode) content += `<p><b>Mode:</b> ${item.mode}</p>`;
        if (item.prize) content += `<p><b>Prize:</b> ${item.prize}</p>`;
        if (item.description) content += `<p>${item.description}</p>`;

        content += `<button class="save-button" onclick="saveItem('${item.title || item.name || item.project}')">Save</button>`;
        card.innerHTML = content;
        
        container.appendChild(card);
    });
}

// Tab switch function
function switchTab(tab) {
    document.querySelectorAll(".tab-content").forEach(section => section.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
    document.querySelectorAll(".tab-button").forEach(button => button.classList.remove("active"));
    document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add("active");
}

// Save functionality
function saveItem(itemName) {
    alert(`Saved: ${itemName}`);
}

// Initialize data
window.onload = () => {
    displayData("internship", internships);
    displayData("job", jobs);
    displayData("hackathon", hackathons);
    displayData("opensource", openSource);
};
