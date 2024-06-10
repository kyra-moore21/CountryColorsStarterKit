class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "مرحباً بالعالم", ["blue", "yellow", "red"]);
let congo = new Country("Congo", "French, Lingala", "Buen mundo, Mbote Mokili", ["green", "yellow", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt!", ["black", "red", "gold"]);
let japan = new Country("Japan", "Japanese", "こんにちは世界！", ["red", "white"]);
let brazil = new Country("Brazil", "Portuguese", "Olá mundo!", ["green", "yellow", "blue", "white"]);
let australia = new Country("Australia", "English", "G'day world!", ["green", "gold"]);



let CountryListNode = document.querySelector('#CountryList');
let Color1 = document.querySelector('#Color1');
let Color2 = document.querySelector('#Color2');
let Color3 = document.querySelector('#Color3');
let CountryName = document.querySelector('#CountryName');
let OfficialLanguage = document.querySelector('#OfficialLanguage');
let HelloWorld = document.querySelector('#HelloWorld');

function displayColors(country) {
    Color1.style.backgroundColor = country.colors[0];
    Color2.style.backgroundColor = country.colors[1];
    Color3.style.backgroundColor = country.colors[2];
}

function SwitchCountry() {
    let input = CountryListNode.value;
    let country;

    if (input === "USA") {
        //set country to usa  
        country = usa;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
       

    }
    else if (input === "Mexico") {
        country = mexico;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
        
    }
    else if (input === "Algeria") {
        country = algeria;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
       
    } else if (input == "Congo") {
        country = congo;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
    } else if (input == "Germany") {
        country = germany;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
    } else if (input == "Japan") {
        country = japan;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
    } else if (input == "Brazil") {
        country = brazil;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
    } else if (input == "Australia") {
        country = australia;
        displayColors(country);
        CountryName.innerText = country.name;
        OfficialLanguage.innerText = country.lang;
        HelloWorld.innerText = country.greeting;
    }
    

}


