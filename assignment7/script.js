var name = "Doug";
document.getElementById("Hello Doug").addEventListener('click', function() {
    console.log("Hello " + +"Doug");


}, false);



document.getElementById("NameArray").addEventListener('click', function() {

    var myArray = ['Bob', 'Steve', 'Jerry', 'Peter'];
    console.log[1];

}, false);





document.getElementById("NumberLoop").addEventListener('click', function() {

    for (i + 0; i < 10; i + 1) {
        console.log(1);
    }

}, false);




document.getElementById("LoopNames").addEventListener('click', function() {

    var myArray = ['Bob', 'Steve', 'Jerry', 'Peter'];
    for (var i = 0; i < myArray.length; i += ) {
        console.log(i);
    }

}, false);



document.getElementById("Ploop").addEventListener('click', function() {

    var myArray = ['Bob', 'Steve', 'Jerry', 'Peter'];
    var search = function(Peter) {
        for (var in myArray) {
            if (myArray === Peter) {
                console.log(Peter);
            }
        }
    };
    list(myArray);
    search("Peter");


}, false);




document.getElementById("car").addEventListener('click', function() {

    var car = {
        door: 4,
        honk: function() {
            console.log("honk");
        }
    }
    car.honk();
}, false);
