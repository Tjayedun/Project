let American = document.querySelector(".American");
let German = document.querySelector(".German");
let Japan = document.querySelector(".Japan");
let Italy = document.querySelector(".Italy");
let coupe = document.querySelector(".Coupe");
let sedan = document.querySelector(".Sedan");
let SUV = document.querySelector(".SUV");
let truck = document.querySelector(".Truck");
let country = "";
let car = "";
let submit = document.querySelector(".submit");
let dog = document.querySelector(".dog");
console.log(dog);

American.addEventListener("click", function() {
    console.log(American);
    country = "America";
    console.log(country);
});;

German.addEventListener("click", function() {
    console.log(German);
    country = "German";
    console.log(country);
});;

Japan.addEventListener("click", function() {
    console.log(Japan);
    country = "Japan";
    console.log(country);
});;

Italy.addEventListener("click", function() {
    console.log(Italy);
    country = "Italy";
    console.log(country);
});;

coupe.addEventListener("click", function() {
    car = "coupe"
    console.log(country);
    console.log(car);

});;

sedan.addEventListener("click", function() {
    car = "Sedan"
     console.log(country);
     console.log(car);
    });;

SUV.addEventListener("click", function() {
     car = "SUV"
        console.log(country);
        console.log(car);
    });;

truck.addEventListener("click", function() {
     car = "Truck"
        console.log(country);
        console.log(car);
    });;

submit.addEventListener("click", function() {
    console.log(country);
    console.log(car);


    //America
    if (country === "America" && car === "coupe") {
        console.log("AC");
       dog.innerHTML = "C7 Corvette";
    }
    if (country === "America" && car === "Sedan") {
        console.log("AS");
       dog.innerHTML = "ctv Blackwing";
    }
    if (country === "America" && car === "SUV") {
        console.log("ASUV");
       dog.innerHTML = "Jeep trackhawk";
    }
    if (country === "America" && car === "Truck") { 
        console.log("AT");
       dog.innerHTML = "Ford F150";
    }

    //German
    if (country === "German" && car === "coupe") {
        console.log("GC");
       dog.innerHTML = "Porsche 911";
    }
    if (country === "German" && car === "Sedan") {
        console.log("GS");
       dog.innerHTML = "BMW M5 CS";
    }
    if (country === "German" && car === "SUV") {
        console.log("GSUV");
       dog.innerHTML = "BMW X4M comp";
    }
    if (country === "German" && car === "Truck") {
        console.log("GT");
       dog.innerHTML = "X Class Mercedes";
    }

    //Japanese
    if (country === "Japan" && car === "coupe") {
        console.log("JC");
       dog.innerHTML = "Acura NSX";
    }
    if (country === "Japan" && car === "Sedan") {
        console.log("JS");
       dog.innerHTML = "Evo X";
    }
    if (country === "Japan" && car === "SUV") {
        console.log("JSUV");
       dog.innerHTML = "Subaru forester";
    }
    if (country === "Japan" && car === "Truck") {
        console.log("JT");
       dog.innerHTML = "Kei Truck";
    }

    //Italy
    if (country === "Italy" && car === "coupe") {
        console.log("IC");
       dog.innerHTML = "Ferrari F40";
    }
    if (country === "Italy" && car === "Sedan") {
        console.log("IS");
       dog.innerHTML = "Ghibli Trofeo";
    }
    if (country === "Italy" && car === "SUV") {
        console.log("ISUV");
       dog.innerHTML = "Lamborghini Urus";
    }
    if (country === "Italy" && car === "Truck") {
        console.log("IT");
       dog.innerHTML = "Fiat Strada";
    }
    });;
             