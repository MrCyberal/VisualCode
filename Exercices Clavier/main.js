let lesson1 = ["Partir en vacance","des voitures","il est tard"] //,"un parapluie","prendre et donner","une histoire courte","je ne suis pas malade","l'information est fausse"]
let lesson2 = ["179/83","123*34.90","7294+2309"];
let text="";
let lesson ="lesson";
const textaChecker = document.querySelector("#textCheck");
const textaTaper = document.querySelector(".textIn");
const BoutonVerif = document.querySelector("#boutonVerif");
const cadreExercice = document.querySelector(".cadreExercice");
const exerciceFini = document.querySelector(".exerciceFini");
const boutonMenu = document.querySelector(".retourMenu");
let cpt=0;

let valStore= localStorage.getItem('btn');

alert("btn" + " - " + lesson.concat(valStore));


lesson = lesson.concat(valStore);


textaChecker.value = "";

//cadreExercice.style.display = "inline";

textaTaper.innerHTML = lesson[cpt];


//alert(textaTaper)

BoutonVerif.addEventListener('click', compareText);
boutonMenu.addEventListener('click', () => {

            document.location.assign("http://127.0.0.1:5500/Exercices%20Clavier/index.html");

        }); 

function compareText() {
    
    if (btn == text) {
        
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

    if (cpt < btn.length) {
        textaTaper.innerHTML = btn;
        textaChecker.value=null;

    } else {
        
        console.log("c'est fini");
        cadreExercice.style.display = "none";
        exerciceFini.style.display = "inline";

        
        
        
        
            
     
    }
    
}


    




