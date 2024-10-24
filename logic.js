
// const  baseURL= "0HyGqVIz6kzTiTpdw6UGRrruNqODcAjC";

    let options = document.querySelectorAll(".same");
    let btn = document.querySelector(".getExchange");
    let formCurr = document.querySelector("#from-select") ;
    let toCurr = document.querySelector("#to-select");
    let child = document.querySelector(".child");



    import { 
    country 
    } from "./codes.js";
    const countryList = country;

    for(let x of options){
    for(let i in countryList){
    let newOption=document.createElement("option");
        newOption.innerText=i;
        newOption.value=i;
        if( x.name==="from" && i==="USD"){
            newOption.selected="selected";
        }
        else if( x.name==="to" && i==="INR"){
            newOption.selected="selected";
        }
    x.append(newOption);
    };

    x.addEventListener("change" , (ele) => {
    updateFlag(ele.target);
    })
    };

const updateFlag = (element) => {
    let i = element.value;
    let countryCode = countryList[i];
    let newimg = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img=element.parentElement.querySelector("img");
    img.src=newimg;
    };

    btn.addEventListener("click" , async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector("#input-data")
    
    let amt= amount.value;
    if (amt === "" || amt < 1 ) {
        amt= 1 ;
        amount.value ="1";
    } 

    var myHeaders = new Headers();
myHeaders.append("apikey", "0HyGqVIz6kzTiTpdw6UGRrruNqODcAjC");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
    };

fetch("https://api.apilayer.com/exchangerates_data/convert?to="+toCurr.value+"&from="+formCurr.value+"&amount="+amt+"", requestOptions)
    .then(response => response.json())
    .then(result => {
        let response = result.result;
        child.innerText=`1${formCurr.value} = ${response} ${toCurr.value}`;
    })
    .catch(error => console.log('error', error))

    });

