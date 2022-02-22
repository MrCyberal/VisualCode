const quote = document.getElementById("quote");
const pic = document.getElementById("pics");

const getPics = () => {

    fetch("https://picsum.photos/1600/1000")
        .then((res) => {
         pic.innerHTML = `<img src=${res.url}>`
        })
}


const getQuote = () => {

    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            quote.innerHTML = data.content;
            auteur.innerHTML = data.author;
        });
        getPics();
}
quote.addEventListener('click', () => getQuote())
getQuote()
