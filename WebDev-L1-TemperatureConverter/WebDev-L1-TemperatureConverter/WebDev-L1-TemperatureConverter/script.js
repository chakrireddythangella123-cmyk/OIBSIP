function convertTemperature() {

    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;

    let error = document.getElementById("error");

    let celsius = document.getElementById("celsius");
    let fahrenheit = document.getElementById("fahrenheit");
    let kelvin = document.getElementById("kelvin");

    error.innerHTML = "";

    // Check if input is empty
    if (temperature === "") {
        error.innerHTML = "Please enter a temperature value.";
        return;
    }

    temperature = parseFloat(temperature);

    // Check for invalid number
    if (isNaN(temperature)) {
        error.innerHTML = "Please enter a valid numeric value.";
        return;
    }

    let c, f, k;

    // Celsius
    if (unit === "celsius") {

        if (temperature < -273.15) {
            error.innerHTML = "Temperature cannot be below absolute zero (-273.15°C).";
            return;
        }

        c = temperature;
        f = (c * 9 / 5) + 32;
        k = c + 273.15;
    }

    // Fahrenheit
    else if (unit === "fahrenheit") {

        if (temperature < -459.67) {
            error.innerHTML = "Temperature cannot be below absolute zero (-459.67°F).";
            return;
        }

        f = temperature;
        c = (f - 32) * 5 / 9;
        k = c + 273.15;
    }

    // Kelvin
    else if (unit === "kelvin") {

        if (temperature < 0) {
            error.innerHTML = "Temperature cannot be below absolute zero (0 K).";
            return;
        }

        k = temperature;
        c = k - 273.15;
        f = (c * 9 / 5) + 32;
    }

    // Display Results
    celsius.innerHTML = "Celsius : " + c.toFixed(2) + " °C";
    fahrenheit.innerHTML = "Fahrenheit : " + f.toFixed(2) + " °F";
    kelvin.innerHTML = "Kelvin : " + k.toFixed(2) + " K";
}
