function the_first () {
    var str = "I like to eat blueberry pie";

    var result = str.fontcolor("blue");

    document.getElementById("Blue_Text").innerHTML = result;
}

function concatenate () {
    var str = " I like cherry pie"

    str += ", I also like coconut pie."

    var result = str.fontcolor("Red");

    document.getElementById("Red_Text").innerHTML = result;
}