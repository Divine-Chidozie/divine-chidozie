const downloadButton = document.getElementById("download-btn");
const navHeader = document.getElementById("nav-header");
const navLogo = document.querySelector(".logo");
const navListItems = document.querySelectorAll(".nav-list-items");
const menu = document.getElementById("menu");
const menuSpan = document.querySelectorAll(".menu-span");
const mobileMenu = document.getElementById("mobileMenu");
const toggleButton = document.querySelector("#toggle-btn");
const workTogetherButton = document.getElementById("work-together-btn");

// ***** Theme Color
const themeBtn = document.getElementById("theme-btn");
const showThemeColor = document.getElementById("show-theme-color");

themeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showThemeColor.classList.toggle("show-theme-container");
});

const openNewOpportunities = document.getElementById("open-new-opportunities");
const openNewOpportunitiesBorder = document.getElementById(
  "open-new-opportunities",
);
const aboutMeHeading = document.getElementById("about-me-heading");
const portfolioHeading = document.getElementById("portfolio-heading");
const allProjectBtn = document.getElementById("all-project-btn");
const timeLineHeading = document.getElementById("time-line-heading");
const educationYear = document.getElementById("educationYear");
const experienceDate = document.getElementById("experienceDate");
const experienceDateTwo = document.getElementById("experienceDateTwo");
const getTouch = document.getElementById("get-in-touch-heading");
const quickLinks = document.getElementById("quick-link");
const stayUpdated = document.getElementById("stay-updated");

const goldColorPalateType = [
  openNewOpportunities,
  aboutMeHeading,
  portfolioHeading,
  allProjectBtn,
  timeLineHeading,
  educationYear,
  experienceDate,
  experienceDateTwo,
  getTouch,
  quickLinks,
  stayUpdated,
];

const themeColors = document.querySelectorAll(".theme-color");

const themeMap = {
  golden: "gold",
  cyan: "cyan",
  purple: "purple",
  green: "green",
  rose: "deeppink",
};

themeColors.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    e.preventDefault();
    // Reset all menu item colors
    themeColors.forEach((item) => (item.style.color = ""));

    // Highlight selected menu item
    theme.style.color = themeMap[theme.id];

    // Apply theme to the page
    goldColorPalateType.forEach((item) => {
      item.style.color = themeMap[theme.id];
    });

    openNewOpportunitiesBorder.style.borderColor = themeMap[theme.id];
  });
});
// const goldenColor = document.getElementById("golden");
// goldenColor.addEventListener("click", () => {
//   goldenColor.style.color = "gold";
//   // navLogo.style.fill = "gold";
//   goldColorPalateType.forEach((colortype) => {
//     colortype.style.color = "gold";
//     openNewOpportunitiesBorder.style.borderColor = "gold";
//   });
// });

// const cyanColor = document.getElementById("cyan");
// cyanColor.addEventListener("click", () => {
//   goldenColor.removeEventListener("click", () => {
//     goldenColor.style.color = "gold";
//     // navLogo.style.fill = "gold";
//     goldColorPalateType.forEach((colortype) => {
//       colortype.style.color = "gold";
//       openNewOpportunitiesBorder.style.borderColor = "gold";
//     });
//   });
//   cyanColor.style.color = "cyan";
// });

// ===== Skill Heading for skill page =====
const skillHeading = document.getElementById("skill-heading");

const navHeaderBackground = `black`;
const backgroundTransition = "0.3s ease-in";
const generalColor = "green";

function navHeaderScroll() {
  if (window.scrollY > 50) {
    navHeader.style.backgroundColor = navHeaderBackground;
    navHeader.style.transition = backgroundTransition;
    navLogo.style.color = generalColor;
    menuSpan.style.backgroundColor = "";
    navHeader.style.backdropFilter = "blur(5px)";
    navListItems.forEach((item) => {
      item.style.color = "oklch(0.58 0 0)";
    });
    menuSpan.forEach((span) => {
      span.style.backgroundColor = generalColor;
    });
  } else {
    navHeader.style.backgroundColor = "";
    navLogo.style.color = "#0000EE";

    // toggleButton.style.fill = "green";
    toggleButton.style.fill = "#8200db";

    navListItems.forEach((item) => {
      item.style.color = "";
    });
    menuSpan.forEach((span) => {
      span.style.backgroundColor = "";
    });
  }
}
window.addEventListener("scroll", navHeaderScroll);

// ===== Menu button toggle class =====

// ===== Dark Mode =====

// Apply saved theme on page load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.toggle("dark-background");
  skillHeading.style.color = "white";
}

const skillLinkBtn = document.getElementById("skills-link-btn");

menu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

const exHeading = document.getElementById("ex-heading-1");
const exheading2 = document.getElementById("ex-heading-2");
const footerLinkedlinSocial = document.getElementById("footer-linkedin-social");
const footerGithubSocial = document.getElementById("footer-github-social");
// Toggle dark mode on button click

const proTip = document.getElementById("proTip");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-background");
  exHeading.style.color = "#111111";
  exheading2.style.color = "#111111";
  footerLinkedlinSocial.style.backgroundColor = "white";
  footerLinkedlinSocial.style.borderRadius = "0";

  footerGithubSocial.style.backgroundColor = "white";
  footerGithubSocial.style.borderRadius = "0";

  if (document.body.classList.contains("dark-background")) {
    toggleButton.style.fill = "white";
    document.getElementById("email-link").style.color = "white";
    myselfLink.style.color = "white";
    skillLinkBtn.style.color = "white";
    document.getElementById("hero-heading").style.color = "black";
  } else {
    toggleButton.style.fill = "";
    document.getElementById("email-link").style.color = "";
    myselfLink.style.color = "";
    document.getElementById("hero-heading").style.color = "";
    skillLinkBtn.style.color = "";
    exHeading.style.color = "";
    exheading2.style.color = "";
    footerLinkedlinSocial.style.backgroundColor = "";
    footerLinkedlinSocial.style.borderRadius = "3";

    footerGithubSocial.style.backgroundColor = "";
    footerGithubSocial.style.borderRadius = "3";
  }
});

// Save the preference
if (document.body.classList.contains("dark-background")) {
  localStorage.setItem("darkMode", "enabled");
} else {
  localStorage.setItem("darkMode", "disabled");
}

// ===== About paragragph switching =====
const myselfLink = document.getElementById("myself-link");
const educationLink = document.getElementById("education-link");
const skillsLink = document.getElementById("skills-link");

// const allLinks = [myselfLink, educationLink, skillsLink];

const aboutPara = document.getElementById("about-para");
const educationPara = document.getElementById("education-para");

function allLinks() {
  educationLink.onclick = function () {
    aboutPara.style.display = "none";
    educationPara.style.display = "block";
  };

  myselfLink.onclick = function () {
    educationPara.style.display = "none";
    aboutPara.style.display = "block";
  };
}
allLinks();

const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameErrorEl = document.getElementById("name-error");
const emailErrorEl = document.getElementById("email-error");
const messageErrorEl = document.getElementById("textarea-error");

const validateForm = ({ name, email, message }) => {
  const nameErrors = [];
  const emailErrors = [];
  const messageErrors = [];

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name.trim()) {
    nameErrors.push("Please enter your name");
  }

  if (!email.trim()) {
    emailErrors.push("Please enter your email");
  } else if (!emailPattern.test(email)) {
    emailErrors.push("Please enter a valid email address");
  }

  if (!message.trim()) {
    messageErrors.push("Please enter your message");
  } else if (message.trim().length < 10) {
    messageErrors.push("Message must be more than 10 characters long");
  }

  return {
    isValid:
      nameErrors.length === 0 &&
      emailErrors.length === 0 &&
      messageErrors.length === 0,
    nameErrors,
    emailErrors,
    messageErrors,
  };
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear old errors
  nameErrorEl.textContent = "";
  emailErrorEl.textContent = "";
  messageErrorEl.textContent = "";

  const result = validateForm({
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  });

  if (!result.isValid) {
    nameErrorEl.textContent = result.nameErrors.join(", ");
    emailErrorEl.textContent = result.emailErrors.join(",");
    messageErrorEl.textContent = result.messageErrors.join(", ");
    return;
  }

  const dataField = [nameInput.value, emailInput.value, messageInput.value];

  console.table(dataField);
  console.log("From submitted successfully");
});

// Clear inputs on typing....
function clearNameInput() {
  nameErrorEl.textContent = "";
}
function clearEmailInput() {
  emailErrorEl.textContent = "";
}
function clearMessageInput() {
  messageErrorEl.textContent = "";
}
nameInput.addEventListener("input", clearNameInput);
emailInput.addEventListener("input", clearEmailInput);
messageInput.addEventListener("input", clearMessageInput);

workTogetherButton.onclick = function (e) {
  e.preventDefault();
  form.scrollIntoView({ behavior: "smooth" });
};

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const text = "Frontend Developer";
let i = 0;
const roleEl = document.querySelector(".hero-role");

function type() {
  if (i < text.length) {
    document.querySelector(".hero-role").textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

roleEl.textContent = "";
type();
