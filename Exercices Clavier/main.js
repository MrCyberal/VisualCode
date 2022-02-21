let lesson1 = ["Partir en vacance","des voitures","il est tard"] //,"un parapluie","prendre et donner","une histoire courte","je ne suis pas malade","l'information est fausse"]

let text="";
const textaChecker = document.getElementById("textCheck");
const textaTaper = document.querySelector(".textIn");
const BoutonVerif = document.querySelector("#boutonVerif");
const cadreExercice = document.querySelector(".cadreExercice");
const exerciceFini = document.querySelector(".exerciceFini");
const boutonMenu = document.querySelector(".retourMenu");
let cpt=0;

    /*boutonMenu.addEventListener('click', () => {

        exerciceFini.classList.remove('show');
        cadreExercice.classList.remove('hidden');
        document.location.assign="http://127.0.0.1:5500/Exercices%20Clavier/index.html";

    })*/


textaTaper.innerHTML = lesson1[0];

BoutonVerif.addEventListener('click', compareText);


function compareText() {
    
    if (lesson1[cpt] == text) {
        
        cpt = cpt + 1;
        InjectionText(cpt);

    }else{

        InjectionText(cpt);
    }

}

textaChecker.addEventListener('input', (e) => {

    text = e.target.value;
    

})


function InjectionText(cpt) {

    if (cpt < lesson1.length) {
        textaTaper.innerHTML = lesson1[cpt];
        textaChecker.value=null;

    } else {
        
        console.log("c'est fini");
        
        window.location.replace="http://127.0.0.1:5500/Exercices%20Clavier/bravo.html";
        
            
     
    }
    
}


    




