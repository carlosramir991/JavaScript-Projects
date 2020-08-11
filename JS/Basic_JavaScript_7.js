var c = 24;
function add() {
    var a = c + 12;
    document.write(a);
}
function subtract() {
    var z = b + c;
    document.write(z);
    console.log(z);
}

function meal_time() {
    var bell;
    if(new Date().getTime()==17){
      bell = "It's Dinner time!"  
    }
    else {
        bell = "It's not Dinner time!"
    }
    document.getElementById("time_to_eat").innerHTML=bell;
}

function time_function() {
    var time = new Date().getHours();
    var reply;
    if(time<12==time>0){
        reply = "It's morning time!";
    }
    else if (time>12==time<18){
        reply="It's the afternoon.";
    }
    else {
        reply="It's evening time.";
    }
    document.getElementById("time_of_day").innerHTML=reply;
}

    




