
document.addEventListener("DOMContentLoaded", () => {
    console.log("EJDERGHJ PORTFOLIO загружен!");

    // НАВИГАЦИЯ
    const navigationLinks = document.querySelectorAll(".navigation a");

    navigationLinks.forEach(link => {
        link.addEventListener("click", () => {
            console.log("Переход к разделу:", link.textContent);
        });
    });

    // АНИМАЦИЯ ПОЯВЛЕНИЯ ЭЛЕМЕНТОВ
    const animatedElements = document.querySelectorAll(
        ".section-header, .about-content, .project-card, .skill-card, .service-card, .contact-content"
    );

    animatedElements.forEach(element => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ПОЛОСКА ПРОГРЕССА ПРОКРУТКИ

    const progressBar = document.createElement("div");
    progressBar.classList.add("scroll-progress");
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = scrollHeight > 0
            ? (window.scrollY / scrollHeight) * 100
            : 0;

        progressBar.style.width = `${progress}%`;
    }, { passive: true });

});

