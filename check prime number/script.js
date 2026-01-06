function checkNumber() {
    let number = document.getElementById("num").value;
    let result = document.getElementById("result");

    if (number === "") {
        result.innerText = "Please enter a number";
        result.classList.add("show");
        return;
    }

    number = Number(number);

    if (number <= 1) {
        result.innerText = number + " is not a prime number";
        result.classList.add("show");
        return;
    }

    let prime = true;

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false;
            break;
        }
    }

    switch (prime) {
        case true:
            result.innerText = number + " is a prime number";
            break;
        case false:
            result.innerText = number + " is not a prime number";
            break;
    }

    result.classList.add("show");
}
