let Options1 = document.querySelector(".Options1");
let Options2 = document.querySelector(".Options2");
let countries = document.querySelector(".countries");
let title = document.querySelector(".title");
let Restart = document.querySelector(".Restart");
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
let submit = document.querySelector(".Submit");
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


 let C7 = document.querySelector(".C7");
 let CTV = document.querySelector(".CTV");
 let Jeep = document.querySelector(".Jeep");
 let F150 = document.querySelector(".F150");
 let P911 = document.querySelector(".P911");
 let M5 = document.querySelector(".M5");
 let X6 = document.querySelector(".X6");
 let X = document.querySelector(".X");
 let GTR = document.querySelector(".GTR");
 let WRX = document.querySelector(".WRX");
 let Suby = document.querySelector(".Suby");
 let Honda = document.querySelector(".Honda");
 let F812 = document.querySelector(".F812");
 let Alfa = document.querySelector(".Alfa");
 let Urus = document.querySelector(".Urus");
 let Fiat = document.querySelector(".Fiat");

submit.addEventListener("click", function() {
    console.log(country);
    console.log(car);


    //America
    if (country === "America" && car === "coupe") {
        console.log("AC");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        C7.style.display = "block";
        dog.innerHTML = "Corvette C7 ZR1";
    }
    if (country === "America" && car === "Sedan") {
        console.log("AS");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        CTV.style.display = "block";
       dog.innerHTML = "CT5-V Blackwing";
    }
    if (country === "America" && car === "SUV") {
        console.log("ASUV");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        Jeep.style.display = "block";
       dog.innerHTML = "Jeep Grand Cherokee Trackhawk";
    }
    if (country === "America" && car === "Truck") { 
        console.log("AT");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        F150.style.display = "block";
       dog.innerHTML = "Ford F150 Raptor";
    }

    //German
    if (country === "German" && car === "coupe") {
        console.log("GC");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        P911.style.display = "block";
       dog.innerHTML = "Porsche 911 GT3 RS";
    }
    if (country === "German" && car === "Sedan") {
        console.log("GS");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        M5.style.display = "block";
       dog.innerHTML = "BMW M5 CS";
    }
    if (country === "German" && car === "SUV") {
        console.log("GSUV");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        X6.style.display = "block";
       dog.innerHTML = "BMW X6 M Competition";
    }
    if (country === "German" && car === "Truck") {
        console.log("GT");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        X.style.display = "block";
       dog.innerHTML = "X Class Mercedes";
    }

    //Japanese
    if (country === "Japan" && car === "coupe") {
        console.log("JC");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        GTR.style.display = "block";
       dog.innerHTML = "Nissan GT-R";
    }
    if (country === "Japan" && car === "Sedan") {
        console.log("JS");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        WRX.style.display = "block";
       dog.innerHTML = "Subaru WRX STI";
    }
    if (country === "Japan" && car === "SUV") {
        console.log("JSUV");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        Suby.style.display = "block";
       dog.innerHTML = "Subaru forester";
    }
    if (country === "Japan" && car === "Truck") {
        console.log("JT");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        Honda.style.display = "block";
       dog.innerHTML = "Honda Acty";
    }

    //Italy
    if (country === "Italy" && car === "coupe") {
        console.log("IC");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        F812.style.display = "block";
       dog.innerHTML = "Ferrari 812 GTS";
    }
    if (country === "Italy" && car === "Sedan") {
        console.log("IS");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        Alfa.style.display = "block";
       dog.innerHTML = "Alfa Romeo Giulia Quadrifoglio";
    }
    if (country === "Italy" && car === "SUV") {
        console.log("ISUV");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        Urus.style.display = "block";
       dog.innerHTML = "Lamborghini Urus";
    }
    if (country === "Italy" && car === "Truck") {
        console.log("IT");
        Options1.style.display = "none";
        Options2.style.display = "none";
        title.style.display = "none";
        countries.style.display = "none";
        submit.style.display = "none";
        Restart.style.display = "block";
        Fiat.style.display = "block";
       dog.innerHTML = "Fiat Strada";
    }
    });;
             
    Restart.addEventListener("click", function() {
        console.log("restart");
        Options1.style.display = "grid";
        Options2.style.display = "grid";
        title.style.display = "block";
        countries.style.display = "flex";
        submit.style.display = "block";
        C7.style.display = "none";
        CTV.style.display = "none";
        Jeep.style.display = "none";
        F150.style.display = "none";
        P911.style.display = "none";
        M5.style.display = "none";
        X6.style.display = "none";
        X.style.display = "none";
        GTR.style.display = "none";
        WRX.style.display = "none";
        Suby.style.display = "none";
        Honda.style.display = "none";
        F812.style.display = "none";
        Alfa.style.display = "none";
        Urus.style.display = "none";
        Fiat.style.display = "none";
        
        Restart.style.display = "none";
        dog.innerHTML = "";
    });;