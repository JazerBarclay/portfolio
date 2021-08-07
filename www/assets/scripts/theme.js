const darkTheme = 'dark';
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const selectedTheme = localStorage.getItem('selected-theme');
localStorage.setItem('selected-theme', getCurrentTheme());
console.log(`Current theme: ${selectedTheme}`);

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
}

const themeButton = document.querySelector('#theme-button');

themeButton.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.classList.toggle(darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
})
