function concat_meth() {
    var a = "The ";
    var b = "Time ";
    var c = "today ";
    var d = "is ";
    var time = new Date().getHours();
    var e = " hours."
    var f = a.concat(b,c,d,time,e);
    document.getElementById("concat").innerHTML=f;
}

function slice() {
    var sent = "Hello stranger.";
    var bam = sent.slice(6,15);
    document.write(bam);
}

function to_string() {
    var a = 22;
    document.getElementById("my_age").innerHTML= a.toString();
}

function precise() {
    var b = 3.14149265
    document.getElementById("pi").innerHTML=b.toPrecision(4);
}