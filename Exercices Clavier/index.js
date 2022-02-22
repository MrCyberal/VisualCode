const bouton1 = document.querySelector("#exo1");
const boutons = document.getElementsByTagName("button");

let boutonsCpt = boutons.length;


for (var i = 0; i < boutonsCpt; i += 1) {

    boutons[i].onclick = function(e) {

        let idbouton = e.target.id
        document.location.assign("Exercice1.html")
    

//alert(this.id);

}}
