let form = document.querySelector(".hero__form");
let isError = false;

function validEmail() {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      form.email.value
    )
  ) {
    return true;
  }
  return false;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validEmail()) {
    let success = document.querySelector(".success");
    if (success) {
      success.remove();
    }

    let error = document.createElement("p");
    error.innerText = "Oops! Please check your email";
    error.classList.add("error");

    if (!isError) {
      isError = true;
      form.appendChild(error);
    }
  } else {
    let error = document.querySelector(".error");
    let success = document.createElement("p");
    success.classList.add("success");
    success.innerText = "Thanks, we'll get back to you shortly";

    if (error) {
      error.remove();
    }

    form.append(success);
  }
});
