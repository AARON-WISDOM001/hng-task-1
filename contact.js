const form = document.querySelector("form");
const fullName = document.getElementById("name");

const email = document.getElementById("email");
const message = document.getElementById("message");
const subject = document.getElementById("subject");
const dialog = document.getElementById("myDialog");

const subjectError = document.getElementById("test-contact-error-subject");
const emailError = document.getElementById("test-contact-error-email");
const fullNameError = document.getElementById("test-contact-error-name");
const messageError = document.getElementById("test-contact-error-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // email regex
  const emailValue = email.value.trim();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(emailValue) || emailValue == "") {
    emailError.textContent =
      "Please enter a valid email address(e.g., name@example.com) and dont leave it blank.";
    isValid = false;
  }

  const fullnameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
  if (!fullnameRegex.test(fullName.value.trim())) {
    fullNameError.textContent = "Full Name is required.";
    isValid = false;
  }

  const messageregex = /^.{10,}$/;

  if (!messageregex.test(message.value.trim())) {
    messageError.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  if (subject.value.trim() === "") {
    subjectError.textContent = "Subject is required.";
    isValid = false;
  }

  if (isValid) {
    dialog.showModal();
    setTimeout(() => {
      dialog.close();
    }, 3000);

    form.reset();
  }
});

form.addEventListener("focusin", () => {
  fullNameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  subjectError.textContent = "";
});


const togglerBtn = document.querySelector(".navbar__toggler");

togglerBtn.addEventListener("click", function () {
  const header = document.querySelector(".header_container");
  const navBar = document.querySelector(".nav__bar");

  header.classList.toggle("active");
  if (header.classList.contains("active")) {
    navBar.classList.add("change");
  } else {
    navBar.classList.remove("change");
  }
});

