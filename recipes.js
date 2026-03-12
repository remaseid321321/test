function addIngredient() {
    const container = document.getElementById("ingredients-container");

    const div = document.createElement("div");
    div.className = "ingredient-row";

    div.innerHTML = `
        <input type="text" placeholder="Ingredient Name" required>
        <input type="text" placeholder="Quantity" required>
    `;

    container.appendChild(div);
}

let stepCount = 1; 
function addStep() {
    stepCount++;
    const container = document.getElementById("instructions-container");

    const div = document.createElement("div");
    div.className = "step-row";

    div.innerHTML = `
        <label>Step ${stepCount}:</label>
        <input type="text" class="form-input" placeholder="Enter instruction" required>
    `;

    container.appendChild(div);
}