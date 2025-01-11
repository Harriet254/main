

// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});
