let inputs = document.querySelectorAll(
  'input[type="text"],input[type="email"],textarea#UserMessage'
);
console.log(inputs);


const verifyNom = (valeur) => {
    let verificationNomSpan = document.getElementById("verifyName");
    // console.log(erreurSpan);
    valeur=valeur.trim();
    if (valeur.length > 0 && valeur.length <= 3) {
      verificationNomSpan.style.opacity="1";
        verificationNomSpan.innerText="Le nom est trop court";
        verificationNomSpan.style.color="red";
      } else {
        verificationNomSpan.innerText="Le nom est bon";
        verificationNomSpan.style.color="green";
        setTimeout(() => {
          verificationNomSpan.style.opacity="0";
        }, 3000);
      }
    };
const verifySubject = (valeur) => {
  valeur=valeur.trim();
    let verificationSubjectSpan = document.getElementById("verifySubject");
    if (valeur.length > 0 && valeur.length <= 3) {
        verificationSubjectSpan.style.opacity="1";
        verificationSubjectSpan.innerText="Le Sujet est trop court";
        verificationSubjectSpan.style.color="red";
    } else {
        verificationSubjectSpan.innerText="C'est bon 👌"
        verificationSubjectSpan.style.color="green";
        setTimeout(() => {
            verificationSubjectSpan.style.opacity="0";
        }, 3000);
    }
};
const verifyMessage = (valeur) => {
  valeur= valeur.trim();
    let verificationMessageSpan = document.getElementById("verifyMessage");
    if (valeur.length > 0 && valeur.length <= 2) {
        verificationMessageSpan.style.opacity="1";
        verificationMessageSpan.innerText="❌Le Message est trop court";
        verificationMessageSpan.style.color="red";
    } else {
        verificationMessageSpan.innerText="Le Message est bon 👍";
        verificationMessageSpan.style.color="green";
        setTimeout(() => {
            verificationMessageSpan.style.opacity="0";
        }, 3000);
    }
};
const verifyEmail = (valeur) => {
  valeur = valeur.trim();
    let verificationEmailSpan = document.getElementById("verifyEmail");
    if (!valeur.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        verificationEmailSpan.style.opacity="1";
        verificationEmailSpan.innerText="Email Incorrect";
        verificationEmailSpan.style.color="red";
    }else{
        verificationEmailSpan.innerText="Email Valide";
        verificationEmailSpan.style.color="green";
        setTimeout(() => {
            verificationEmailSpan.style.opacity="0";
        }, 3000);
  }
};

const sonClick = new Audio();
sonClick.src = "/audios/keyboard-typing-one-short-1-292590.mp3";

inputs.forEach((input) => {
    input.addEventListener('input', () => {
      sonClick.currentTime = 0;
      sonClick.volume = .1
      sonClick.play();
    }); 
});



inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    let valeur = e.target.value;
    switch (e.target.id) {
      case "UserName":
        verifyNom(e.target.value);
        break;
      case "Subject":
        verifySubject(e.target.value);
        break;
      case "UserMessage":
        verifyMessage(e.target.value);
        break;
      case "UserEmail":
        verifyEmail(e.target.value);
        break;
      default:
        null;
    }
  });
});

document.addEventListener('submit',(e)=>{
  alert("Message envoyee avec succes")
})
