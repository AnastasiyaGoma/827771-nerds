var write = document.querySelector(".write-us");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var surname = popup.querySelector("[type=text]");
var form = popup.querySelector(".write-form");
var email = popup.querySelector("[type=email]");
var letterText = popup.querySelector(".text-letter");

var isStorageSupport = true;

var storedSurname = "";
var storedEmail = "";
var storedLetter = "";

try {
  storedSurname = localStorage.getItem("surname");
  storedEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storedSurname || storedEmail) {
    surname.value = storedSurname;
    email.value = storedEmail;
    letterText.focus();
  } else {
    surname.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit",function(evt) {
  surname.classList.remove("field-error");
  email.classList.remove("field-error");
  letterText.classList.remove("field-error");

  if (!surname.value || !email.value || !letterText.value) {
    evt.preventDefault();

    if (!surname.value) {
      surname.classList.add("field-error");
    }

    if (!email.value) {
      email.classList.add("field-error");
    }

    if (!letterText.value) {
      letterText.classList.add("field-error");
    }
  } else {
    if (isStorageSupport) {
      localStorage.setItem("surname", surname.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
  evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
  }
  }
});