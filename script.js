function changeMode() {
    document.body.classList.toggle("dark");
}
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}

function showTime() {

    let now = new Date();

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString();
}

setInterval(showTime, 1000);