
const boutons = document.querySelectorAll(".lesson button.bouton");

let boutonsCpt = boutons.length;


for (var i = 0; i < boutonsCpt; i += 1) {

    boutons[i].onclick = function(e) {

       
        localStorage.setItem('btn',this.id );
alert(this.id);
        document.location.assign("Exercice1.html")
    



}}
