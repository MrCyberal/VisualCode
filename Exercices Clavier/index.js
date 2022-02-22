const bouton1 = document.querySelector("#exo1");
const boutons = document.getElementsByTagName("button");

let buttonsCount = boutons.length;

for (var i = 0; i < buttonsCount; i += 1) {
boutons[i].onclick = function(e) {
alert(this.id);

}}
