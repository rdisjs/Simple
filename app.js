const sections = document.querySelectorAll('.section');
const options = {
  threshold: 0.3, // Trigger animation when 30% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in'); // Add animation class
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section); // Observe each section
});