// Partie du text typing sur moi 
const target = document.getElementById("target");
let table = ["developpeur_Fullstack", "programmeur", "data_analyst", "web designer"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);
  letter.textContent = table[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2000);
};
const loop = () => {
  setTimeout(() => {
    if (wordIndex >= table.length) {
      wordIndex = 0;
      letterIndex = 0;
    }
    if (letterIndex < table[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 100);
};
loop();

// Barre de progression compétences
document.querySelectorAll('.progress-bar').forEach(bar => {
  const percent = bar.getAttribute('data-percent');
  const progress = bar.querySelector('.progress');
  setTimeout(() => {
    progress.style.width = percent + '%';
  }, 400);
});