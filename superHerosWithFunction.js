var brands = ["Acer", "Apple", "Sony", "Samsung"];
var heroes = ["Black Panther", "Cyborg", "Black Canary", "Donna Troy", "Huntress", "Blue Beetle", "Captain Atom"];
var booksOnMyShelf = ["Calculus Early Transcendentals", "Ravens", "The Self Illusion", "Harry Potter"];
var thingsInFrontOfMe = ["Laptop", "Beanbag", "Cats", "Slippers"];
var howIFeel = ["Sleep Deprived", "Wired on Coffee", "Excited"];

function superHeros(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log("----------------------------------------");
}

superHeros(brands);
superHeros(heroes);
superHeros(booksOnMyShelf);
superHeros(thingsInFrontOfMe);
superHeros(howIFeel);