var userName = document.getElementById("userName")
var email = document.getElementById("email")
var phone = document.getElementById("phone")
var small1 = document.getElementById("msg1")
var small2 = document.getElementById("msg2")
var small3 = document.getElementById("msg3")

// Event listener to submit form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleInput();
  });


userName.addEventListener("input", function (e) {
    if (e.target.value.length <= 3) {
        userName.style.border = "2px solid red"
        userName.style.borderRadius = "5px"

        small1.innerHTML = "Name Required"
        small1.style.color = "red"
        small1.style.display = "block"
    } else {
        small1.style.display = "none"
        userName.style.border = "2px solid green"
        small1.style.borderRadius = "5px"
    }
})

email.addEventListener("input", function (e) {
    if (e.target.value.includes(".com") == true && e.target.value.includes("@") == true) {
        small2.style.display = "none"
        email.style.border = "2px solid green"
        userName.style.borderRadius = "5px"
        console.log("wrong")
    } else {
        email.style.border = "2px solid red"
        userName.style.borderRadius = "5px"

        small2.innerHTML = "Email Required"
        small2.style.color = "red"
        small2.style.display = "block"
        console.log("right")
    }
})

phone.addEventListener("input", function (e) {
    if (e.target.value.length <= 10) {
        phone.style.border = "2px solid red"
        phone.style.borderRadius = "5px"

        small3.innerHTML = "Phone Must Be 11 Digits"
        small3.style.color = "red"
        small3.style.display = "block"
    } else {
        small3.style.display = "none"
        phone.style.border = "2px solid green"
        phone.style.borderRadius = "5px"
    }

})
submit.addEventListener("click", function (e) {
    if (userName.value == "") {
        e.preventDefault()
        userName.style.border = "2px solid red"
        userName.style.borderRadius = "5px"

        small1.innerHTML = "userName Required"
        small1.style.color = "red"
        small1.style.display = "block"
        console.log("right")
    }
    if (email.value == "") {
        e.preventDefault()
        email.style.border = "2px solid red"
        userName.style.borderRadius = "5px"

        small2.innerHTML = "Email Required"
        small2.style.color = "red"
        small2.style.display = "block"
        console.log("right")
    }
    if (password.value == "") {

        password.style.border = "2px solid red"
        password.style.borderRadius = "5px"

        small3.innerHTML = "Password Required"
        small3.style.color = "red"
        small3.style.display = "block"

    }
})