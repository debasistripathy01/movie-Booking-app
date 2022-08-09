// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let amountArr = JSON.parse(localStorage.getItem("Amount"))||[];

document.getElementById("wallet").innerHTML = `${amountArr[amountArr.length-1]}`;



let KEY = "660da246";
let url = "https://www.omdbapi.com/?apikey=";
let nothing = "N/A";


async function main(){
    let search = document.getElementById("search").value;

    try{
        let res = await fetch(`${url}${KEY}&s=${search}`);
        let data = await res.json();

        let new_data = data.Search;
        console.log("data :", new_data);

        
        if(new_data !== undefined){
            displayMovies(new_data);
        };
    }
    catch(error){
        console.log(error);
    }
}

function displayMovies(new_data){
    let movies  = document.getElementById("movies");
    movies.innerHTML = null;
    new_data.forEach((elem, index)=>{

        let box = document.createElement("div")
        box.setAttribute("class", "movie_tab");

        let title = document.createElement("p");
        title.innerText = elem.Title;

        let year = document.createElement("p");
        year.innerText = elem.Year;

        let image = document.createElement("img");
        image.src = elem.Poster;

        let btn  = document.createElement("button");
        btn.innerText = "Book now";
        btn.setAttribute("class","book_now");
        btn.addEventListener("click", ()=>{
            BookNow(elem, index);
        });
        
        box.append(image, title, year, btn);
        movies.append(box);
    });
}
let moviesArr = JSON.parse(localStorage.getItem("movie"))||[];

function BookNow(elem, index){
    moviesArr.push(elem);
    localStorage.setItem("movie", JSON.stringify(moviesArr));
    window.location.href="./checkout.html";
}


let id;
let debounceSearchFunc=(main, delay)=>{
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        main();
    }, 2000)
    
}