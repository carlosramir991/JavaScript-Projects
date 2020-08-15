function call_loop() {
        var x = 0;
        var side = document.getElementById("loop").value; 
        var end = 0;
        while (x < 4) {
             end += + side;
             x = x + 1;
            document.getElementById("final").innerHTML=" The perimiter of your square is " + end + "!";
        }
    
}


var instruments = ["Guitar", "Saxophone", "Clarinet", "Flute"];
var x = "";
var y;
function list_instruments() {
    for (y=0;y<instruments.length; y++) {
        x += instruments[y] + "<br>"; 
    }
        document.getElementById("list").innerHTML= x;
        
}


function dogs() {
    var dog = [];
    dog[1] = "playing";
    dog[2] = "eating";
    dog[3] = "pooping";
document.getElementById("doggies").innerHTML= "The first dog is " + dog[1] + ", the second one is " + dog[2] + ", the third dog is " + dog[3] + ".";
}

function constant_function() {
    const drugs = {Meth: "Schedule 1", Alcohol:"legal", Cocaine:"Schedule 1", MDMA:"Schedule 4"};
    drugs.Alcohol = "Must be 21";
    drugs.Marijuana = "Schedule 1";
    document.getElementById("constant").innerHTML="Meth is a "+drugs.Meth+" drug.  Alcohol is a "+drugs.Alcohol+" drug.";
}

function let_function(){
var c = "Carlos"; 
document.write(c);
 {
    let c =  "Carolina";  
    document.write(c);
}
document.write(c); 
}

let terminal = {
    type:"Leukaemia", 
    stage: "4", 
    expected: "4 months", 
    end: function() {
            return "You have "+this.type+", this treatment is at stage "+this.stage+" you approximately have " +this.expected+" to live.";
    }
};
document.getElementById("death_bed").innerHTML= terminal.end();


function years() {
    for (a=0;a<20;a++){
        if (a== 15) {continue;}
        document.write(" You are now "+a+" years old! ");
    }

}



