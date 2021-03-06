let lesson = [["partir en vacance","des voitures","il est tard","un parapluie","prendre et donner","une histoire courte","je ne suis pas malade","l'information est fausse"],
              ["179/83","123*34.90","7294+2309","1023.3-985.20","10255*96.33-8","751+654*59","4376.91/23.2","1385+12.36-9","72006952+253916","9836120/895.64","1956.36*21.42","8564*2564","12.36*98.20","1249-63.23","95360+64823.95","852318*96475","2054.3256+6598.12487","6235/54","653295.25*13985.45"],
              ["Manon","La victoire","Fred Dino","Xenomorphe","Louis Pasteur","Je Mets Une Majuscule","David Foreman","Xian Li","Frank Herbert","Isaac Azimov","Pierre Richard","Estelle et Sidonie","Joël Proust","Adolph Sax","Michel Legrand"],
              ["Le point d'exclamation: !","Le point d'interrogation: ?","La barre oblique: /","Le point: .","La virgule: ,","Le point virgule: ;","L'apostrophe: '",'Le guillemet: "',
               "Le trait-union: -","Attention !!","Pourquoi ?","Quelle heure est-il ?"],
              ["Le 'e' accent aigu: é","Le 'e' accent grave: è","Le 'e' accent circonflexe: ê","Le tréma sur le 'e': ë","Le 'œ' s'obtient grâce à Alt + 0156","Un œuf"],
              ["La lumière","L'obscurité","Des réactions inouïes","Une leçon","Un reçu","La fête","Une bête","Le théâtre","Un château","Affûter son esprit","Le maçon rénove la façade","Xavier aime les glaçons","Un commerçant soupçonneux","La piqûre de la guêpe"],
              ["Un amas d'étoile","La fête à l'école","Noël et Anaïs","Le garçon médisant","L'épée émoussée","L'après-midi à Paris","Il écrit à la famille","Je suis là-bas !","Le voilà, déjà à l'abri"],
              ["Le diése ou hashtag: #","L'arobase ou at: @","Les parenthèses: ( )","Les crochets: [ ]","Les accolades: { }","La barre oblique inverse ou backslash: \\","Le tilde: ~",
               "La verticale: |"],
              ["Le 'http://' n'a plus besoin d'être tapé dans un navigateur internet","L'adresse mail de Jean-Pierre est jp.duhon1962@mail.op"],
              ["Les oximores ou oximorons","Un silence assourdissant","Briller dans l'ombre","Une absence remarquable","Un illustre inconnu","Une obscure clarté","La voix du silence"],
              ["Les pléonasmes","Monter en haut","Crier fort","Je l'ai vu de mes propres yeux","Petit détail","Prévoir à l'avance","Marcher à pied","Se réunir ensemble","Descendre en bas","Un bref résumé","Reporter à une date ultérieure","Incessament sous peu"],
            ];


const textaChecker = document.querySelector("#textCheck");
const textaTaper = document.querySelector(".textIn");
const BoutonVerif = document.querySelector("#boutonVerif");
const cadreExercice = document.querySelector(".cadreExercice");
const exerciceFini = document.querySelector(".exerciceFini");
const boutonMenu = document.querySelector(".retourMenu");
const textNbrMot = document.querySelector(".nbrMot");
const TextTimer = document.querySelector("#timer");

let cpt = 0;
let cptarray = 0;
let valStore = localStorage.getItem('btn');
let text="";
let min = 0;
let sec = 0;
let dur = 480;



//
function choixExo(valStore) {

    switch(valStore){

        case "lesson1" :
            CompteRebour();
            return cptarray = 0;
        break;
    
        case "lesson2" :
            CompteRebour();
            return cptarray = 1;
        break;
    
        case "lesson3" :
            CompteRebour();
            return cptarray = 2;
        break;

        case "lesson4" :
            CompteRebour();
            return cptarray = 3;
        break;

        case "lesson5" :
            CompteRebour();
            return cptarray = 4;
        break;

        case "lesson6" :
            CompteRebour();
            return cptarray = 5;
        break;

        case "lesson7" :
            CompteRebour();
            return cptarray = 6;
        break;

        case "lesson8" :
            CompteRebour();
            return cptarray = 7;
        
        case "lesson9" :
            CompteRebour();
            return cptarray = 8;
        
        case "lesson10" :
            CompteRebour();
            return cptarray = 9;
        
        case "lesson11" :
            CompteRebour();
            return cptarray = 10;
        
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
        textNbrMot.textContent = cpt;
        textaChecker.focus();
        textaChecker.value=null;

    } else {
        
        console.log("c'est fini");
        cadreExercice.style.display = "none";
        exerciceFini.style.display = "inline";
          
    }
    
}

function AjoutZero(num){

    return num < 10 ? "0" + num : num; 
 
}

function CompteRebour() {

    let secondEcouler = dur;

    let rebour = setInterval(function () {

        min = parseInt(secondEcouler / 60);
        sec = parseInt(secondEcouler % 60);

        TextTimer.textContent = `${AjoutZero(min)}:${AjoutZero(sec)}`;

        secondEcouler = secondEcouler - 1;
        if (secondEcouler < 0) { 
            clearInterval(rebour);
            alert("Le temp est écoulé !!");
            cpt=0;
            CompteRebour()
        };

    }, 1000);


}


    




