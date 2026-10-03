// ===================================================
// EDIT ONLY THIS PART (your details)
// Put all photos inside the "portfolioImages" folder.
// If a photo is missing, a colour box shows instead.
// (About text and Home text are written in index.html)
// ===================================================

const facts = [
  { label: "College", value: "Arjun College of Technology" },
  { label: "Degree", value: "B.Tech, Artificial Intelligence and Data Science" },
  { label: "Location", value: "Coimbatore, India" }
];

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js"],
  Backend: ["Python", "FastAPI", "MySQL"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"]
};

const projects = [
  {
    title: "YouTube Clone",
    text: "A YouTube-style home page with a video grid, sidebar and search bar.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "portfolioImages/youtube-clone.jpg",
    link: "https://github.com/panigouraw/YouTube-clone"
  },
  {
    title: "Facebook Clone",
    text: "A Facebook-style layout with a news feed, posts and a responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "portfolioImages/facebookClone.jpg",
    link: "https://github.com/panigouraw/Facebook-Clone"
  },
  {
    title: "Coffee Day Website",
    text: "A clean café website with menu, offers and contact sections.",
    tags: ["HTML", "CSS"],
    image: "portfolioImages/coffedayShop.jpg",
    link: "https://github.com/panigouraw/Cafe--Website"
  },
  {
    title: "Interior Design Album",
    text: "A photo album website to showcase interior design work in a neat gallery.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "portfolioImages/intetior.jpg",
    link: "#"
  },
  {
    title: "Task Management App",
    text: "An app to add, update and track daily tasks until they are done.",
    tags: ["React.js", "JavaScript"],
    image: "portfolioImages/Time ManagementClone.jpg",
    link: "https://github.com/panigouraw/Task-Management-Apllication"
  },
  {
    title: "E-commerce Website",
    text: "An online shopping site with product listing and cart.",
    tags: ["React.js", "Python", "FastAPI"],
    image: "portfolioImages/shopingClone.jpg",
    link: "https://github.com/panigouraw/E-commerence"
  }
];

const experience = [
  {
    role: "Web Development Internship",
    company: "PRIME VECTOR | A DIVISION OF NIDVEX TECHNOLOGY PRIVATE LIMITED",
    date: "Aug 2026 - Nov 2026",
    points: [
      "Learned full stack web development covering frontend, backend and database",
      "Built responsive web pages using HTML, CSS, JavaScript and React.js",
      "Created backend APIs with Python and FastAPI and tested them in Postman",
      "Stored and managed data using MySQL",
      "Used Git and GitHub to manage code and publish projects"
    ]
  },
  {
    role: "Web Development Intern",
    company: "THIRANEX | Skill Development & Future Tech",
    date: "Jul 2026 - Aug 2026",
    points: [
      "Completed a project-based internship working on real web development tasks remotely",
      "Built a web project using HTML, CSS, JavaScript and React.js",
      "Designed responsive pages that work on mobile and desktop",
      "Connected the app to backend APIs built with Python and FastAPI",
      "Pushed the project to GitHub and submitted it for review"
    ]
  }
];

const workshops = [
  {
    title: "UX Design with AI",
    place: "National Institute of Technology, Tiruchirappalli",
    date: "Aug 2026",
    image: "portfolioImages/nit.jpg"
  },
  {
    title: "Global Startup",
    place: "Codissia Trade Fair Complex, Coimbatore",
    date: "Oct 2025",
    image: "portfolioImages/globalstartup.jpg"
  }
];

const certificates = [
  {
    title: "UX Design with AI",
    issuer: "World Technocon",
    year: "2026",
    image: "portfolioImages/nitcertificate.jpg"
  },
  {
    title: "Global Startup",
    issuer: "Issued by",
    year: "2025",
    image: "portfolioImages/startup3.jpg"
  },
  {
    title: "Thiranex",
    issuer: "Online project-based internship",
    year: "2026",
    image: "portfolioImages/thiranex.png"
  }
];

// ===================================================
// CODE PART (you don't need to change this)
// ===================================================

// Makes a photo box. If the image file is missing, the image is removed
// and the colour box with the title stays.
function makePhoto(src, title) {
  return '<div class="ph">' + title +
    '<img src="' + src + '" alt="' + title + '" onclick="openImage(this)" onerror="this.remove()">' +
    '</div>';
}

// ---------- About: facts ----------
let factsHTML = "";
for (let i = 0; i < facts.length; i++) {
  factsHTML += '<div class="fact"><small>' + facts[i].label + '</small>' + facts[i].value + '</div>';
}
document.getElementById("facts").innerHTML = factsHTML;

// ---------- Skills ----------
let skillsHTML = "";
for (let group in skills) {
  skillsHTML += '<div class="card"><div class="pad"><h3>' + group + '</h3><div class="chips" style="margin-top:14px">';
  for (let i = 0; i < skills[group].length; i++) {
    skillsHTML += '<span class="chip">' + skills[group][i] + '</span>';
  }
  skillsHTML += '</div></div></div>';
}
document.getElementById("skillBox").innerHTML = skillsHTML;

// ---------- Projects ----------
let projectsHTML = "";
for (let i = 0; i < projects.length; i++) {
  let p = projects[i];
  projectsHTML += '<div class="card">' + makePhoto(p.image, p.title) +
    '<div class="pad"><h3>' + p.title + '</h3><p>' + p.text + '</p>' +
    '<div class="chips" style="margin:14px 0">';
  for (let j = 0; j < p.tags.length; j++) {
    projectsHTML += '<span class="chip">' + p.tags[j] + '</span>';
  }
  projectsHTML += '</div><a href="' + p.link + '">View project</a></div></div>';
}
document.getElementById("projectBox").innerHTML = projectsHTML;

// ---------- Internship / Experience ----------
let expHTML = "";
for (let i = 0; i < experience.length; i++) {
  let e = experience[i];
  expHTML += '<div class="item"><div class="meta">' + e.date + '</div>' +
    '<h3>' + e.role + ', ' + e.company + '</h3><ul>';
  for (let j = 0; j < e.points.length; j++) {
    expHTML += '<li>' + e.points[j] + '</li>';
  }
  expHTML += '</ul></div>';
}
document.getElementById("expBox").innerHTML = expHTML;

// ---------- Workshops ----------
let workHTML = "";
for (let i = 0; i < workshops.length; i++) {
  let w = workshops[i];
  workHTML += '<div class="card">' + makePhoto(w.image, w.title) +
    '<div class="pad"><div class="meta">' + w.date + '</div><h3>' + w.title + '</h3><p>' + w.place + '</p></div></div>';
}
document.getElementById("workBox").innerHTML = workHTML;

// ---------- Certificates ----------
let certHTML = "";
for (let i = 0; i < certificates.length; i++) {
  let c = certificates[i];
  certHTML += '<div class="card">' + makePhoto(c.image, c.title) +
    '<div class="pad"><div class="meta">' + c.year + '</div><h3>' + c.title + '</h3><p>' + c.issuer + '</p></div></div>';
}
document.getElementById("certBox").innerHTML = certHTML;

// ---------- Big image viewer (click on a photo) ----------
const viewer = document.getElementById("lb");

function openImage(img) {
  viewer.querySelector("img").src = img.src;
  viewer.querySelector("p").textContent = img.alt;
  viewer.classList.add("open");
}

function closeImage() {
  viewer.classList.remove("open");
}

viewer.onclick = closeImage;                 // click anywhere to close
document.onkeydown = function (event) {      // Esc key to close
  if (event.key === "Escape") {
    closeImage();
  }
};

// ---------- Scroll: progress bar + menu highlight ----------
const sectionIds = ["home", "about", "skills", "projects", "experience", "workshops", "certs", "resume", "contact"];
const menuLinks = document.querySelectorAll("#menu a");

function updateOnScroll() {
  // progress bar
  let scrolled = document.documentElement.scrollTop;
  let total = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.getElementById("bar").style.width = (scrolled / total) * 100 + "%";

  // find which section is on screen
  let current = "home";
  for (let i = 0; i < sectionIds.length; i++) {
    let section = document.getElementById(sectionIds[i]);
    if (section.getBoundingClientRect().top <= 150) {
      current = sectionIds[i];
    }
  }

  // highlight that menu link
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].classList.remove("on");
    if (menuLinks[i].getAttribute("href") === "#" + current) {
      menuLinks[i].classList.add("on");
    }
  }
}

window.onscroll = updateOnScroll;
updateOnScroll(); // run once when the page opens

// ---------- Light / Dark mode ----------
const themeBtn = document.getElementById("themeBtn");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);   // browser remembers your choice
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

// first time: use the phone/laptop setting, next time: use saved choice
let savedTheme = localStorage.getItem("theme");
if (savedTheme === null) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    savedTheme = "dark";
  } else {
    savedTheme = "light";
  }
}
setTheme(savedTheme);

themeBtn.onclick = function () {
  let current = document.documentElement.getAttribute("data-theme");
  if (current === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
};