function updatePlaceholder() {
    const inputField = document.getElementById("email");
    if (inputField) {
        if (window.innerWidth >= 768) {
            inputField.placeholder = "Correo electrónico o número de telefono";
        } else {
            inputField.placeholder = "Celular o correo electrónico";
        }
    }
}

window.addEventListener("load", updatePlaceholder);
window.addEventListener("resize", updatePlaceholder);
