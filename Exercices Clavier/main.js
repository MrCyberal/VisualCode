let lesson = [["Partir en vacance","des voitures","il est tard"],//,"un parapluie","prendre et donner","une histoire courte","je ne suis pas malade","l'information est fausse"],
              ["179/83","123*34.90","7294+2309"]] 


const textaChecker = document.querySelector("#textCheck");
const textaTaper = document.querySelector(".textIn");
const BoutonVerif = document.querySelector("#boutonVerif");
const cadreExercice = document.querySelector(".cadreExercice");
const exerciceFini = document.querySelector(".exerciceFini");
const boutonMenu = document.querySelector(".retourMenu");
let cpt=0;
let cptarray=0;
let valStore= localStorage.getItem('btn');
let text="";



//
function choixExo(valStore) {

    switch(valStore){

        case "lesson1" :

            return cptarray = 0;
        break;
    
        case "lesson2" :

            return cptarray = 1;
        break;
    
        default:
            null;

    }
}
cptarray = choixExo(valStore);

textaChecker.value = "";



textaTaper.innerHTML = lesson[cptarray][cpt];




BoutonVerif.addEventListener('click', compareText);
boutonMenu.addEventListener('click', () => {

            document.location.assign("/index.html");

        }); 

function compareText() {
    
    if (lesson[cptarray][cpt] == text) {
        
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

    if (cpt < lesson[cptarray].length) {
        textaTaper.innerHTML = lesson[cptarray][cpt];
        textaChecker.focus();
        textaChecker.value=null;

    } else {
        
        console.log("c'est fini");
        cadreExercice.style.display = "none";
        exerciceFini.style.display = "inline";

        
        
        
        
            
     
    }
    
}


    




