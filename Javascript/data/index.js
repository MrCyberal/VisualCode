const array = ["Paris", "Lyon", "Montreal", "Bordeau"];
const array1 = ["Paris", 33, ["Montreal", "Bordeau"], true];

for (i=0; i< array1.length; i++) {

 console.log(typeof array1[i]);
}

const number = [21, 45, 22, 44, 7];
console.log(number.sort());

//=============================================================================================


const input = document.getElementById("input");
const video = document.getElementById("video");
let link = "";


input.addEventListener("input", (e) => {
    console.log(e.target.value);
    changelink(e.target.value);
    
    if (link) {

        video.innerHTML = `<iframe width="1903" height="797" src= ${link} 
        title="YouTube video player" frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    }
})

const changelink = (linkToChange) => {

    let embed = linkToChange.replace("watch?v=", "embed/")
    embed = linkToChange.replace("&list=", "?list=");
    link = embed.split("&")[0];
    console.log(link);
}

// ======================================================================================================================================




