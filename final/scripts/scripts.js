function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("navmove").classList.toggle("move");
}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;