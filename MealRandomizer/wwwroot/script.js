function startCarousel(selectedMeal) {
    console.log("startCarousel wywołane dla: ", selectedMeal);
    let carousel = document.getElementById("carousel");
    if (!carousel) {
        console.error("Nie znaleziono elementu #carousel");
        return;
    }

    let items = document.querySelectorAll(".carousel-item");
    let index = Array.from(items).findIndex(item => item.textContent.trim() === selectedMeal.trim());

    if (index !== -1) {
        console.log("Przesunięcie na indeks: ", index);
        carousel.style.transition = "transform 1.5s ease-in-out";
        carousel.style.transform = `translateX(-${index * 300}px)`;

        // Wymuszenie repaint (czasem Blazor nie odświeża od razu)
        setTimeout(() => {
            carousel.style.display = "none";
            carousel.offsetHeight; // Repaint
            carousel.style.display = "block";
        }, 10);
    } else {
        console.error("Nie znaleziono posiłku w karuzeli: ", selectedMeal);
    }
}
