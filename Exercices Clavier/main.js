let lesson = [["partir en vacance","des voitures","il est tard","un parapluie","prendre et donner","une histoire courte","je ne suis pas malade","l'information est fausse"],
              ["179/83","123*34.90","7294+2309","Un œuf"],
              ["Manon","La victoire","Fred Dino","Xenomorphe","Louis Pasteur","Je Mets Une Majuscule"],
              ["Le point d'exclamation: !","Le point d'interrogation: ?","La barre oblique: /","Le point: .","La virgule: ,","Le point virgule: ;","l'apostrophe: '",'Le guillement"',
               "Le trait-union: -"],
              ["Le 'e' accent aigu: é","le 'e' accent grave: è","Le 'e' accent circonflexe: ê","le tréma sur le 'e': ë","LE 'œ' s'obtient grâce à Alt + 0156","Un œuf"]
              ["La lumière","L'obscurité","Des réactions inouïes","Une leçon","Un reçu","La fête","Une bête","Le théâtre","Un château","Affûter son esprit"],
              ["Un amas d'étoile","La fête à l'école","Noël et anaïs","Le garçon médisant","l'épée émousée","L'après-midi à Paris","Il écrit à la famille","Je suis là-bas !"],
              ["Le diése ou hashtag: #","l'arobase ou at: @","Les parenthèses: ()","Les crochets: []","Les accolades: {}","La barre oblique inverse ou backslash: \\","Le tilde: ~",
               "La verticale: |"],
              ["Le http:// n'a plus besoin d'être tapé dans un navigateur internet","L'adresse mail de Jean-Pierre est jp.duhon1962@mail.fr",]
            ];


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

            document.location.assign("./index.html");

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


    




