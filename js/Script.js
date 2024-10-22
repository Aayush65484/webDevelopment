document.addEventListener("DOMContentLoaded", () => {

    // Navigation: Highlight current active page in the nav
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        if (item.href === window.location.href) {
            item.classList.add('active');
        }
    });

    // Search box (Header) functionality for filtering content
    const searchBox = document.querySelector('.search-box input');
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${searchBox.value}`);
            // You can implement search functionality here
        }
    });

    // Button interactions (learn more, read blog, etc.)
    const learnMoreBtn = document.querySelector('.buttons button:nth-child(1)');
    const readBlogBtn = document.querySelector('.buttons .black-btn');

    learnMoreBtn.addEventListener('click', () => {
        window.location.href = "articles.html";
    });

    readBlogBtn.addEventListener('click', () => {
        window.location.href = "articles.html#blog";
    });

    // Article Section: Dynamic functionality
    const articleLinks = document.querySelectorAll('.article-box h3');
    articleLinks.forEach((article) => {
        article.addEventListener('click', () => {
            alert(`Navigating to: ${article.innerText}`);
            // Implement navigation to specific article pages
        });
    });

    // Recent Articles Section
    const readMoreBtn = document.querySelector('.recent-articles button');
    readMoreBtn.addEventListener('click', () => {
        window.location.href = "articles.html";
    });

    // Search form submission (Help Page)
    const searchForm = document.querySelector('.search-form form');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const profession = document.querySelector('#profession').value;
        const location = document.querySelector('#location').value;
        const experience = document.querySelector('#experience').value;
        const availability = document.querySelector('#availability').value;

        alert(`Searching for ${profession} in ${location} with ${experience} years of experience, available at ${availability}`);
        // Implement search logic based on form input
    });

    // Quiz Buttons (Quiz Page)
    const quizButtons = document.querySelectorAll('.quiz-card button');
    quizButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(`Starting quiz: ${button.previousElementSibling.innerText}`);
            // Navigate to the quiz or load quiz content
        });
    });

    // Newsletter form submission (Articles Page)
    const newsletterForm = document.querySelector('.newsletter form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('#email').value;
        const name = document.querySelector('#name').value;

        if (email && name) {
            alert(`Thank you for subscribing, ${name}!`);
            // Implement actual subscription logic
        } else {
            alert('Please fill out both name and email.');
        }
    });

});
