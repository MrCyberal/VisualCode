const img = document.getElementById("img");
const btn = document.querySelector("#btn");
//change l'attribut visible/invisible de l'image quand on clique sur le bouton
btn.addEventListener("click", () => {
    console.log("YES !!");
    img.classList.toggle("show")

})

//==========================================================================

const mouseEvent = document.querySelector(".mouseEvent");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const texte = document.querySelector(".texte");

mouseEvent.addEventListener("mousemove", (e) => {
  //  console.log(e);

    horizontal.innerHTML = e.x;
    vertical.innerHTML = e.y;
    mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

    if(e.x > 1250) {
        document.body.style.filter = "blur(3px)";
    }
    else {
        document.body.style.filter = "none";
    }


})


//======================================================================================


document.getElementById("input").addEventListener("input", (e) => {

    texte.innerHTML = e.target.value; // recupere la valeur de l'input

})

//===========================================================================================

const theme = document.querySelectorAll(".theme");

theme.forEach((item) => {

    item.addEventListener("click", (e) => {
        document.body.classList.remove("darkTheme", "salmonTheme", "yellowTheme");
        switch (e.target.id) {
            case "dark" :
                document.body.classList.add("darkTheme");
                break;
            case "salmon" :
                document.body.classList.add("salmonTheme");
                break;
            case "yellow" : 
                document.body.classList.add("yellowTheme");
            default :
                null;
        }
    })
})

//================================================================================================

