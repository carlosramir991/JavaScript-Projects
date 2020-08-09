function Coffee_Dict () {
    var coffee = {
        grind: "fine",
        kind: "Dark",
        shots: "5",
        cream: "none",
        sugar: "none",

    };
    delete coffee.kind; 
    document.getElementById("dictionary").innerHTML= coffee.kind;
}