
function checkNumber() {
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerText = "Please enter a number";
        result.classList.add("show");
        return;
    }

    switch (number % 2) {
        case 0:
            result.innerText = number + " is Even";
            break;

        case 1:
        case -1:
            result.innerText = number + " is Odd";
            break;

        default:
            result.innerText = "Invalid input";
    }

    result.classList.add("show");
}