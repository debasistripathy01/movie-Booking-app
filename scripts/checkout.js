// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let moviesArr = JSON.parse(localStorage.getItem("movie"))||[];

let amountArr = JSON.parse(localStorage.getItem("Amount"))||[];


document.getElementById("wallet").innerHTML = `${amountArr[amountArr.length-1]||amountArr[amountArr.length-2]}`;

displayMovies(moviesArr);


function displayMovies(new_data){
    let movies  = document.getElementById("movie");
    movies.innerHTML = null;
    new_data.forEach((elem, index)=>{

        let box = document.createElement("div")
        box.setAttribute("class", "movie_tabs");

        let title = document.createElement("p");
        title.innerText = elem.Title;

        let year = document.createElement("p");
        year.innerText = elem.Year;

        let image = document.createElement("img");
        image.src = elem.Poster;

        // let btn  = document.createElement("button");
        // btn.innerText = "Book now";
        // btn.setAttribute("class","book_now");
        // btn.addEventListener("click", ()=>{
        //     BookNow(elem, index);
        // });
        
        box.append(image, title, year);
        movies.append(box);
    });
}


document.getElementById("confirm").addEventListener("click", confirmTicket);

let ticketValue = 0
let updatedValue =0;
function confirmTicket(el){
    

    if(amountArr[amountArr.length-1] >= 100 && amountArr[amountArr.length-1]!== null){
        let numOfTickets = document.getElementById("number_of_seats").value;

        ticketValue += (+ numOfTickets)*100;
        updatedValue = amountArr[amountArr.length-1]-ticketValue;
        if(amountArr[amountArr.length-1] < ticketValue ){
            alert("Insufficient Balance !")
        } 
        amountArr.push(updatedValue);
        
        alert("Booking Successful!");
        window.location.reload();
    }
    else if(amountArr[amountArr.length-1] < 100){
        alert("Insufficient Balance !");
    }
    else{
        alert("Insufficient Balance !");
    }
    localStorage.setItem("Amount", JSON.stringify(amountArr));
}
console.log(amountArr);
console.log(moviesArr);
console.log(updatedValue);