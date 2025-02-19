function startRoulette(index) {
    let wheel = document.getElementById("rouletteWheel");
    if (!wheel) return;
    let rotations = 5; // Liczba pełnych obrotów
    let angle = (360 / 5) * index + 360 * rotations;
    wheel.style.transition = "transform 2s ease-out";
    wheel.style.transform = `rotate(${angle}deg)`;
}
