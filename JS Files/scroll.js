document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scrollContainer");
    const dots = document.querySelectorAll(".dot");
    const items = document.querySelectorAll(".scroll-item");

    function updateActiveDot() {
        let index = Math.round(scrollContainer.scrollLeft / items[0].offsetWidth);
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    function scrollToItem(index) {
        scrollContainer.scrollTo({
            left: items[index].offsetLeft,
            behavior: "smooth"
        });
    }

    scrollContainer.addEventListener("scroll", updateActiveDot);

    // Buat event listener untuk klik dot
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => scrollToItem(index));
    });
});
