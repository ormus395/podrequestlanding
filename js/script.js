let form = document.querySelector(".hero__form");

function validateEmail() {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      form.email.value
    )
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  if (!validateEmail()) {
    let error = document.createElement("p");
    error.innerText = "Oops! Please check your email";
    error.classList.add("error");

    form.appendChild(error);
  }
});
