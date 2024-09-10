document.querySelectorAll('.faq-btn').forEach(button => {
    button.addEventListener('click', function() {
        const textElement = this.parentElement.nextElementSibling;
        const icon = this.querySelector('.plus-icon');
        if (textElement.style.display === "none" || textElement.style.display === "") {
            textElement.style.display = "block";
            icon.style.transform = "rotate(45deg)";  // Rotate the icon
            icon.style.transition = "transform 0.25s cubic-bezier(0.5, 0, 0.1, 1)";

        } else {
            textElement.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    });
});
