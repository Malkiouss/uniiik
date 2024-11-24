function contactUs() {
    const phoneNumber = "212622389826";
    const message = "Hello, I would like to get in touch!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}
document.addEventListener("DOMContentLoaded", () => {
    function animateText() {
        const letters = document.querySelectorAll('.animated-text .letter');
        
        letters.forEach((letter, index) => {
            const originalLetter = letter.textContent;

            // Animate each letter by continuously changing it to a random letter
            const intervalId = setInterval(() => {
                const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random uppercase letter
                letter.textContent = randomLetter;
            }, 100); // Adjust speed (milliseconds)

            // After 5 seconds, stop randomization and set back to original letter
            setTimeout(() => {
                clearInterval(intervalId);
                letter.textContent = originalLetter;
            }, 5000 + (index * 200)); // Stagger the stopping for each letter
        });

        // Restart animation after a 7-minute (420000 milliseconds) pause
        setTimeout(() => {
            animateText();
        }, 420000); // 7 minutes in milliseconds
    }

    animateText();
});
function copyEmail() {
    const email = "deenbadr96@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const button = document.getElementById('emailButton');
        button.textContent = "Email address copied!";
        setTimeout(() => {
            button.textContent = email;
        }, 2000);
    });
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
