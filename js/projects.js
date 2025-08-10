// 1. Your project data (replace with real info)
const projects = [
  {
    title: "Community Center Design",
    category: "architecture",
    img: "/images/projects/community_center.jpg",
    description:
      "A sustainable community center featuring green roofs and solar panels.",
    link: "#"
  },
  {
    title: "Highway Expansion",
    category: "infrastructure",
    img: "/images/projects/highway_expansion.jpg",
    description:
      "Upgraded a 20km stretch of highway to improve traffic flow.",
    link: "#"
  },
  {
    title: "Bridge Reinforcement",
    category: "engineering",
    img: "/images/projects/bridge_reinforcement.jpg",
    description:
      "Structural reinforcement of the Old River Bridge to meet safety standards.",
    link: "#"
  },
  // add as many as you like...
];

// 2. Render all projects into the container
const container = document.querySelector(".projects-container");
function renderProjects(list) {
  container.innerHTML = ""; // clear
  list.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.title}" />
      <div class="project-details">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a class="visit-btn" href="${p.link}">View Project</a>
      </div>
    `;
    container.appendChild(card);
  });
}

// 3. Filter functionality
const filterBtns = document.querySelectorAll(".project-filters button");
filterBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    // set active styling
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    // show filtered or all
    if (filter === "all") {
      renderProjects(projects);
    } else {
      renderProjects(projects.filter((p) => p.category === filter));
    }
  })
);

// 4. Initial render
renderProjects(projects);
