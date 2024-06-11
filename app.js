const numberOfStars = 50;
const starsContainer = document.querySelector('#stars-container');

// Boucle de création des 50 étoiles

for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('img');
    star.src = 'assets/images/star.svg';
    star.alt = 'picture of a 5 branchs yellow star';
    star.className = 'star';
    starsContainer.appendChild(star);
}
