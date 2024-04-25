  document.addEventListener("DOMContentLoaded", function() {
    const aboutMeSection = document.getElementById("about_me");
    const signature = document.getElementById("signature");

    // Options for the intersection observer
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Trigger the animation when 50% of the about me section is visible
    };

    // Callback function for when the about me section intersects with the viewport
    const callback = function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                signature.classList.add("active"); // Add the active class to trigger the animation
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(callback, options);

    // Start observing the about me section
    observer.observe(aboutMeSection);
});
      var circle = document.getElementById("circle");
    var navbar = document.getElementById("navbar");

    circle.addEventListener("click", function() {
        navbar.classList.toggle("active");
        circle.classList.toggle("active");
    });