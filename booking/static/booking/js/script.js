const container = document.querySelector('.seat-selection');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;

    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// New carousel functionality
document.querySelectorAll('.carousel-container').forEach(container => {
    const track = container.querySelector('.carousel-track');
    const leftButton = container.querySelector('.carousel-button.left');
    const rightButton = container.querySelector('.carousel-button.right');

    const slideWidth = container.querySelector('.movie-card').offsetWidth;

    let index = 0;

    rightButton.addEventListener('click', () => {
        if (index < track.children.length - 1) {
            index++;
            track.style.transform = translateX(-${index * slideWidth}px);
        }
    });

    leftButton.addEventListener('click', () => {
        if (index > 0) {
            index--;
            track.style.transform = translateX(-${index * slideWidth}px);

});

// Function to initialize carousels
function initializeCarousel(containerSelector, trackSelector, leftButtonSelector, rightButtonSelector) {
    const container = document.querySelector(containerSelector);
    const track = container.querySelector(trackSelector);
    const leftButton = container.querySelector(leftButtonSelector);
    const rightButton = container.querySelector(rightButtonSelector);
    const cards = Array.from(track.children);
    const cardWidth = cards[0].getBoundingClientRect().width;

    let currentSlide = 0;

    function updateCarousel() {
        const amountToMove = currentSlide * cardWidth;
        track.style.transform = translateX(-${amountToMove}px);
    }

    rightButton.addEventListener('click', () => {
        if (currentSlide < cards.length - 1) {
            currentSlide++;
            updateCarousel();
        }
    });

    leftButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });
}

// Initialize both carousels
initializeCarousel(
    '#now-showing .carousel-container',
    '.carousel-track',
    '.carousel-button.left',
    '.carousel-button.right'
);
initializeCarousel(
    '#coming-soon .carousel-container',
    '.carousel-track',
    '.carousel-button.left',
    '.carousel-button.right'
);

// Get modal element
const loginModal = document.getElementById('loginModal');
// Get form element
const loginForm = document.getElementById('loginForm');
// Get user info display element
const userInfo = document.getElementById('userInfo');

// Open modal
function openLoginModal() {
    loginModal.style.display = 'block';
}

// Close modal
function closeLoginModal() {
    loginModal.style.display = 'none';
}

// Form submit event
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    userInfo.innerHTML = <p>Name: ${name}</p><p>Email: ${email}</p>;
    closeLoginModal();
});

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == loginModal) {
        closeLoginModal();
    }
}

function closeRegisterModal() {
    document.getElementById('registerForm').style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        closeLoginModal();
    }
    if (event.target == document.getElementById('registerForm')) {
        closeRegisterModal();
    }
}