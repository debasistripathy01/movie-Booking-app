// Store the wallet amount to your local storage with key "amount";


let amountArr = JSON.parse(localStorage.getItem("Amount"))||[];


document.getElementById("add_to_wallet").addEventListener("click", addToWalletFunc);
let sum = 0;
let arr =amountArr||[];
document.getElementById("wallet").innerHTML = `${amountArr[amountArr.length-1]}`
function addToWalletFunc(el){

    // let amnt = document.getElementById("wallet").value
    let addedAmount = document.getElementById("amount").value
    if(amountArr.length >=0){
        for(var i=0; i < amountArr.length; i++){
            sum = amountArr[amountArr.length-1] +(+addedAmount);
        }
    }
    else if(amountArr.length ===undefined ){
        for(var i=0; i < amountArr.length; i++){
            sum +=  +(+addedAmount);
        }
    }

    
    arr.push(sum);
    localStorage.setItem("Amount", JSON.stringify(arr));
    window.location.reload();
    
}

// console.log(obj);
console.log(amountArr);
// console.log(sum);

