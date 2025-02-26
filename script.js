// Function to calculate BMI
function calculateBMI() {
    // Get user input values
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    
    // Check if inputs are valid
    if (weight > 0 && height > 0) {
        // Calculate BMI
        let bmi = weight / (height * height);
        let category = "";

        // Determine BMI category
        if (bmi < 18.5) category = "Underweight";
        else if (bmi < 24.9) category = "Normal weight";
        else if (bmi < 29.9) category = "Overweight";
        else category = "Obese";

        // Display result
        document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)} - ${category}`;
    } else {
        // Show error message if inputs are invalid
        document.getElementById('result').innerText = "Please enter valid weight and height values.";
    }
}
