// ======================================
// Sub-Practicum 10: DOM Manipulation
// ======================================

// 1. Change message using querySelector()
function changeMessage() {
    document.querySelector("#dom-message").textContent =
        "Welcome to ToyNest! Learning through play is fun!";
}

// 2. Change element background color
function changeColor() {
    document.querySelector("#dom-message").style.backgroundColor =
        "#ffedcc";
}

// 3. Dynamically create and add DOM elements
function addToy() {
    let newToy = document.createElement("p");

    newToy.textContent = "New Toy Added!";
    newToy.className = "toy-item";

    document.querySelector("#toy-container").appendChild(newToy);
}

// 4. Interactive form element
function displayToy() {
    let toy = document.querySelector("#toy-name").value;

    if (toy.trim() === "") {
        document.querySelector("#toy-result").textContent =
            "Please enter a toy name!";
    } else {
        document.querySelector("#toy-result").textContent =
            "Your favourite toy is: " + toy;
    }
}

// 5. setTimeout()
let timeoutID;

function startTimeout() {
    clearTimeout(timeoutID);

    document.querySelector("#timer-message").textContent =
        "Your message will appear in 3 seconds...";

    timeoutID = setTimeout(function () {
        document.querySelector("#timer-message").textContent =
            "Time is up! Keep Playing!";
        timeoutID = null;
    }, 3000);
}

// 6. clearTimeout()
function cancelTimeout() {
    clearTimeout(timeoutID);
    timeoutID = null;

    document.querySelector("#timer-message").textContent =
        "Timeout cancelled!";
}

// 7. setInterval()
let intervalID = null;
let count = 0;

function startInterval() {
    if (intervalID !== null) {
        return;
    }

    intervalID = setInterval(function () {
        count++;

        document.querySelector("#counter").textContent =
            "Counter: " + count;
    }, 1000);
}

// 8. clearInterval()
function stopInterval() {
    clearInterval(intervalID);
    intervalID = null;
}


// ======================================
// Sub-Practicum 11: Form Validation
// ======================================

// Process and validate form details
function validateForm() {

    // Get values from input elements
    let name = document.querySelector("#member-name").value.trim();
    let age = document.querySelector("#member-age").value.trim();
    let phone = document.querySelector("#member-phone").value.trim();
    let email = document.querySelector("#member-email").value.trim();

    let result = document.querySelector("#validation-result");

    // Check if any box is empty
    if (name === "" || age === "" || phone === "" || email === "") {

        result.textContent = "Please fill in all the fields!";
        result.style.color = "#e7837d";

    }

    // Check if age contains only numbers
    else if (!/^[0-9]+$/.test(age)) {

        result.textContent = "Age must contain numbers only!";
        result.style.color = "#e7837d";

    }

    // Check if age is within the valid range
    else if (Number(age) < 1 || Number(age) > 100) {

        result.textContent = "Please enter a valid age between 1 and 100!";
        result.style.color = "#e7837d";

    }

    // Check if phone number contains only numbers
    else if (!/^[0-9]+$/.test(phone)) {

        result.textContent = "Phone number must contain numbers only!";
        result.style.color = "#e7837d";

    }

    // Check if phone number has exactly 10 digits
    else if (phone.length !== 10) {

        result.textContent = "Phone number must contain exactly 10 digits!";
        result.style.color = "#e7837d";

    }

    // Check email format
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        result.textContent = "Please enter a valid email address!";
        result.style.color = "#e7837d";

    }

    // If all validations are successful
    else {

        result.textContent =
            "Registration Successful! Welcome to ToyNest, " + name + "!";

        result.style.color = "green";

        // Display submitted details
        result.innerHTML =
            "Registration Successful!<br>" +
            "Welcome to ToyNest, " + name + "!<br>" +
            "Age: " + age + "<br>" +
            "Phone: " + phone + "<br>" +
            "Email: " + email;
    }
}