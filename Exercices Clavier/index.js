
const boutons = document.querySelectorAll(".lesson button.bouton");

let boutonsCpt = boutons.length;


for (var i = 0; i < boutonsCpt; i += 1) {

    boutons[i].onclick = function(e) {

        let idbouton = e.target.id
        document.location.assign("Exercice1.html")
    

//alert(this.id);

}}
