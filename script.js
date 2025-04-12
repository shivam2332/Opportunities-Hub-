// Opportunities Data (50+ entries)
const opportunities = [
    { id: 1, company: "Palantir Technologies", type: "Internship", position: "Meritocracy Fellowship", location: "New York, NY", skills: "Problem-Solving, Coding", salary: "$5,400/month", description: "A 4-month program for high school grads with top test scores, no college required.", link: "https://www.businessinsider.com/palantir-launches-anti-college-internship-for-high-school-grads-2025-4" },
    { id: 2, company: "Simplify Jobs", type: "Internship", position: "Big Tech Internships", location: "Various", skills: "Software Engineering, PM", salary: "Varies", description: "Curated internships at top tech companies like Google, Meta, and more.", link: "https://simplify.jobs/l/Big-Tech-Internships" },
    { id: 3, company: "Pitt CSC & Simplify", type: "Internship", position: "Tech, CS, PM, and Quant Internships", location: "United States, Canada, Remote", skills: "CS, Quant, PM", salary: "Varies", description: "Collaborative list of tech internships for Summer 2025.", link: "https://github.com/SimplifyJobs/Summer2025-Internships" },
    { id: 4, company: "Indeed", type: "Internship", position: "Technology Internship 2025", location: "Various", skills: "Software Development, IT", salary: "Varies", description: "Explore tech internships listed on Indeed for 2025.", link: "https://www.indeed.com/q-technology-internship-2025-jobs.html" },
    { id: 5, company: "IBM", type: "Internship", position: "Internship Opportunities", location: "Various", skills: "AI, Cloud, Software", salary: "Competitive", description: "Work on cutting-edge projects in AI, quantum, and cloud.", link: "https://www.ibm.com/careers/internships" },
    { id: 6, company: "Amazon", type: "Full-Time Job", position: "Software Development Engineer (SDE) 2025", location: "Various", skills: "Java, Python, AWS", salary: "$120k-$180k", description: "Develop scalable systems with Amazon's engineering team.", link: "https://www.amazon.jobs/en/jobs/2828235/software-development-engineer-2025-us" },
    { id: 7, company: "Apple", type: "Full-Time Job", position: "Intern Opportunities (October 2025 to September 2026)", location: "Cupertino, CA", skills: "iOS, Swift", salary: "$130k-$200k", description: "Join Apple's intern-to-full-time track for innovative projects.", link: "https://jobs.apple.com/en-us/search?team=internships-STDNT-INTRN" },
    { id: 8, company: "Coder Quad & Simplify", type: "Full-Time Job", position: "Entry-Level Software, Tech, CS, PM, and Quant Jobs", location: "Remote", skills: "CS, PM, Quant", salary: "Varies", description: "New grad positions across tech industries.", link: "https://github.com/SimplifyJobs/New-Grad-Positions" },
    { id: 9, company: "Built In", type: "Full-Time Job", position: "Best Tech Jobs & Startup Jobs 2025", location: "Various", skills: "Tech, Startup Experience", salary: "Varies", description: "Top tech and startup roles for 2025.", link: "https://builtin.com/jobs" },
    { id: 10, company: "xAI", type: "Internship", position: "AI Research Intern", location: "Remote", skills: "Python, TensorFlow", salary: "Stipend", description: "Research AI models for next-gen applications.", link: "#" },
    { id: 11, company: "Google", type: "Internship", position: "Software Engineering Intern", location: "Mountain View, CA", skills: "JavaScript, Java", salary: "$7,000/month", description: "Work on Google’s core products.", link: "#" },
    { id: 12, company: "Meta", type: "Internship", position: "Data Science Intern", location: "Remote", skills: "Python, R", salary: "$6,500/month", description: "Analyze data for Meta’s platforms.", link: "#" },
    { id: 13, company: "Microsoft", type: "Internship", position: "Cloud Intern", location: "Seattle, WA", skills: "Azure, Cloud", salary: "$6,800/month", description: "Build cloud solutions with Microsoft.", link: "#" },
    { id: 14, company: "Tesla", type: "Internship", position: "Sustainability Intern", location: "Austin, TX", skills: "Data Analysis", salary: "$5,900/month", description: "Support Tesla’s green initiatives.", link: "#" },
    { id: 15, company: "NVIDIA", type: "Internship", position: "GPU Developer Intern", location: "Santa Clara, CA", skills: "C++, CUDA", salary: "$7,200/month", description: "Develop GPU technologies.", link: "#" },
    { id: 16, company: "OpenAI", type: "Internship", position: "ML Research Intern", location: "Remote", skills: "PyTorch, ML", salary: "Stipend", description: "Research advanced AI models.", link: "#" },
    { id: 17, company: "AWS", type: "Internship", position: "Cloud Engineering Intern", location: "Seattle, WA", skills: "AWS, Docker", salary: "$6,500/month", description: "Work on cloud infrastructure.", link: "#" },
    { id: 18, company: "Salesforce", type: "Internship", position: "CRM Developer Intern", location: "San Francisco, CA", skills: "Apex, Java", salary: "$6,300/month", description: "Build CRM solutions.", link: "#" },
    { id: 19, company: "Adobe", type: "Internship", position: "UI/UX Intern", location: "Remote", skills: "Figma, Design", salary: "$5,800/month", description: "Design innovative user interfaces.", link: "#" },
    { id: 20, company: "Intel", type: "Internship", position: "Hardware Engineering Intern", location: "Portland, OR", skills: "VHDL, Electronics", salary: "$6,700/month", description: "Develop next-gen hardware.", link: "#" },
    { id: 21, company: "Netflix", type: "Full-Time Job", position: "Senior Backend Engineer", location: "Los Gatos, CA", skills: "Node.js, Python", salary: "$150k-$220k", description: "Build scalable streaming systems.", link: "#" },
    { id: 22, company: "Spotify", type: "Full-Time Job", position: "Data Engineer", location: "Remote", skills: "SQL, Spark", salary: "$130k-$190k", description: "Optimize data pipelines.", link: "#" },
    { id: 23, company: "Uber", type: "Full-Time Job", position: "Mobile Developer", location: "San Francisco, CA", skills: "Swift, Kotlin", salary: "$140k-$200k", description: "Develop Uber’s mobile apps.", link: "#" },
    { id: 24, company: "LinkedIn", type: "Full-Time Job", position: "Frontend Engineer", location: "Sunnyvale, CA", skills: "React, JavaScript", salary: "$135k-$195k", description: "Enhance LinkedIn’s UI.", link: "#" },
    { id: 25, company: "Dropbox", type: "Full-Time Job", position: "Security Engineer", location: "Remote", skills: "Cybersecurity", salary: "$145k-$210k", description: "Protect cloud storage systems.", link: "#" },
    { id: 26, company: "GitHub", type: "Full-Time Job", position: "DevOps Engineer", location: "Remote", skills: "Kubernetes, Docker", salary: "$150k-$215k", description: "Manage CI/CD pipelines.", link: "#" },
    { id: 27, company: "Twilio", type: "Full-Time Job", position: "API Developer", location: "San Francisco, CA", skills: "Python, REST", salary: "$130k-$190k", description: "Build communication APIs.", link: "#" },
    { id: 28, company: "Zoom", type: "Full-Time Job", position: "SRE Engineer", location: "Remote", skills: "Linux, Cloud", salary: "$140k-$200k", description: "Ensure platform reliability.", link: "#" },
    { id: 29, company: "Shopify", type: "Full-Time Job", position: "E-commerce Engineer", location: "Remote", skills: "Ruby, JavaScript", salary: "$135k-$195k", description: "Develop e-commerce solutions.", link: "#" },
    { id: 30, company: "Airbnb", type: "Full-Time Job", position: "Product Manager", location: "San Francisco, CA", skills: "PM, Agile", salary: "$150k-$220k", description: "Lead product innovation.", link: "#" },
    { id: 31, company: "Stripe", type: "Full-Time Job", position: "Payments Engineer", location: "Remote", skills: "Go, Python", salary: "$145k-$210k", description: "Build payment systems.", link: "#" },
    { id: 32, company: "Square", type: "Full-Time Job", position: "Mobile Engineer", location: "San Francisco, CA", skills: "Swift, Android", salary: "$140k-$200k", description: "Enhance payment apps.", link: "#" },
    { id: 33, company: "Coinbase", type: "Full-Time Job", position: "Blockchain Engineer", location: "Remote", skills: "Solidity, Rust", salary: "$160k-$230k", description: "Develop crypto solutions.", link: "#" },
    { id: 34, company: "Slack", type: "Full-Time Job", position: "Frontend Developer", location: "San Francisco, CA", skills: "React, TypeScript", salary: "$135k-$195k", description: "Improve collaboration tools.", link: "#" },
    { id: 35, company: "Twitch", type: "Full-Time Job", position: "Game Developer", location: "Remote", skills: "Unity, C#", salary: "$140k-$200k", description: "Build gaming experiences.", link: "#" },
    { id: 36, company: "Pinterest", type: "Full-Time Job", position: "Data Scientist", location: "Palo Alto, CA", skills: "Python, ML", salary: "$150k-$220k", description: "Analyze user data trends.", link: "#" },
    { id: 37, company: "Lyft", type: "Full-Time Job", position: "Backend Engineer", location: "San Francisco, CA", skills: "Node.js, SQL", salary: "$135k-$195k", description: "Support ride-sharing systems.", link: "#" },
    { id: 38, company: "DoorDash", type: "Full-Time Job", position: "Mobile Developer", location: "Remote", skills: "React Native", salary: "$140k-$200k", description: "Enhance delivery apps.", link: "#" },
    { id: 39, company: "Coursera", type: "Full-Time Job", position: "EdTech Engineer", location: "Remote", skills: "JavaScript, Python", salary: "$130k-$190k", description: "Build educational platforms.", link: "#" },
    { id: 40, company: "Databricks", type: "Full-Time Job", position: "Big Data Engineer", location: "San Francisco, CA", skills: "Spark, Scala", salary: "$160k-$230k", description: "Manage big data pipelines.", link: "#" },
    { id: 41, company: "Unity", type: "Full-Time Job", position: "Game Engine Developer", location: "Remote", skills: "C++, Unity", salary: "$150k-$220k", description: "Develop game engines.", link: "#" },
    { id: 42, company: "Snowflake", type: "Full-Time Job", position: "Cloud Engineer", location: "Remote", skills: "Snowflake, SQL", salary: "$145k-$210k", description: "Optimize cloud data platforms.", link: "#" },
    { id: 43, company: "Asana", type: "Full-Time Job", position: "Product Engineer", location: "San Francisco, CA", skills: "React, Node.js", salary: "$135k-$195k", description: "Enhance project management tools.", link: "#" },
    { id: 44, company: "Atlassian", type: "Full-Time Job", position: "DevOps Engineer", location: "Remote", skills: "Jenkins, Docker", salary: "$140k-$200k", description: "Automate software delivery.", link: "#" },
    { id: 45, company: "GitLab", type: "Full-Time Job", position: "Frontend Engineer", location: "Remote", skills: "Vue.js, JavaScript", salary: "$135k-$195k", description: "Improve GitLab’s UI.", link: "#" },
    { id: 46, company: "HashiCorp", type: "Full-Time Job", position: "Infrastructure Engineer", location: "Remote", skills: "Terraform, Go", salary: "$150k-$220k", description: "Manage infrastructure as code.", link: "#" },
    { id: 47, company: "Red Hat", type: "Full-Time Job", position: "Open Source Engineer", location: "Remote", skills: "Linux, Python", salary: "$140k-$200k", description: "Contribute to open-source projects.", link: "#" },
    { id: 48, company: "VMware", type: "Full-Time Job", position: "Virtualization Engineer", location: "Palo Alto, CA", skills: "VMware, Cloud", salary: "$145k-$210k", description: "Develop virtualization tech.", link: "#" },
    { id: 49, company: "Cisco", type: "Full-Time Job", position: "Network Engineer", location: "San Jose, CA", skills: "Networking, CCNA", salary: "$135k-$195k", description: "Build network solutions.", link: "#" },
    { id: 50, company: "Oracle", type: "Full-Time Job", position: "Database Engineer", location: "Remote", skills: "SQL, PL/SQL", salary: "$140k-$200k", description: "Optimize database systems.", link: "#" }
];

const hackathons = [
    { id: 1, name: "Global AI Hackathon 2025", date: "Mar 15-16", mode: "Online", prize: "$50k", link: "#" },
    { id: 2, name: "Web3 Dev Challenge", date: "Apr 5-6", mode: "Hybrid", prize: "$30k", link: "#" }
];

const openSource = [
    { id: 1, project: "xAI Grok", description: "Contribute to AI model development.", link: "#" },
    { id: 2, project: "Kubernetes Observability", description: "Enhance cloud monitoring.", link: "#" }
];

// Filter and Display Function
function filterAndDisplay(category, data) {
    const search = document.getElementById("search").value.toLowerCase();
    const typeFilter = document.getElementById("type-filter").value;
    const locationFilter = document.getElementById("location-filter").value;
    const skillsFilter = document.getElementById("skills-filter").value;

    const filteredData = data.filter(item =>
        (item.position.toLowerCase().includes(search) || item.company.toLowerCase().includes(search) || item.location.toLowerCase().includes(search)) &&
        (!typeFilter || item.type === typeFilter) &&
        (!locationFilter || item.location === locationFilter) &&
        (!skillsFilter || item.skills.toLowerCase().includes(skillsFilter.toLowerCase()))
    );

    const container = document.getElementById(`${category}-list`);
    container.innerHTML = "";
    filteredData.forEach(item => {
        const card = document.createElement("div");
        card.className = "card bg-gray-800 p-4 rounded-lg shadow-md fade-in";
        card.innerHTML = `
            <h3 class="text-lg font-bold">${item.position}</h3>
            <p><b>Company:</b> ${item.company}</p>
            <p><b>Type:</b> ${item.type}</p>
            <p><b>Location:</b> ${item.location}</p>
            <p><b>Skills:</b> ${item.skills}</p>
            <p><b>Salary:</b> ${item.salary || "N/A"}</p>
            <p>${item.description}</p>
            <div class="flex gap-2 mt-2">
                <button class="bg-orange-500 text-white p-2 rounded hover:bg-orange-600" onclick="saveItem(${item.id}, '${item.position}')">Save</button>
                <a href="${item.link}" target="_blank" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Apply</a>
                <button class="bg-green-500 text-white p-2 rounded hover:bg-green-600" onclick="shareItem('${item.position}')">Share</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Tab Switching
function switchTab(tab) {
    document.querySelectorAll(".tab-content").forEach(section => section.classList.add("hidden"));
    document.querySelectorAll(".tab-button").forEach(button => button.classList.remove("active"));
    document.getElementById(tab).classList.remove("hidden");
    document.querySelector(`[onclick="switchTab('${tab}')"]`).classList.add("active");
    if (tab === "opportunities") filterAndDisplay("opportunities", opportunities);
    else if (tab === "hackathons") filterAndDisplay("hackathons", hackathons);
    else if (tab === "opensource") filterAndDisplay("opensource", openSource);
}

// Save Functionality
function saveItem(id, position) {
    let saved = JSON.parse(localStorage.getItem("savedItems") || "[]");
    if (!saved.some(item => item.id === id)) {
        saved.push({ id, position });
        localStorage.setItem("savedItems", JSON.stringify(saved));
        document.getElementById("saved-count").textContent = saved.length;
        alert(`Saved: ${position}`);
    }
}

// Share Functionality (Mock)
function shareItem(position) {
    alert(`Share ${position} on X or other platforms! (Mock function)`);
}

// Theme Toggle with Animation
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
    const isDark = document.body.classList.contains("dark");
    document.getElementById("theme-toggle").textContent = isDark ? "Light Mode" : "Dark Mode";
    document.getElementById("theme-toggle").classList.add("animate-pulse");
    setTimeout(() => document.getElementById("theme-toggle").classList.remove("animate-pulse"), 500);
});

// Initialize
window.onload = () => {
    filterAndDisplay("opportunities", opportunities);
    document.getElementById("search").addEventListener("input", () => filterAndDisplay("opportunities", opportunities));
    document.getElementById("type-filter").addEventListener("change", () => filterAndDisplay("opportunities", opportunities));
    document.getElementById("location-filter").addEventListener("change", () => filterAndDisplay("opportunities", opportunities));
    document.getElementById("skills-filter").addEventListener("change", () => filterAndDisplay("opportunities", opportunities));
};
