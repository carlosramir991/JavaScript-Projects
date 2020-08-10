function drinking_age() {
    var age, can_drink;
    age = document.getElementById("age").value ;
    can_drink = (age<21) ? "You are too young to drink.":"You can have a drink.";
    document.getElementById("drink").innerHTML= can_drink;

}

function profile(Hair,race,Age) {
    this.Hair_Color = Hair;
    this.Race = race;
    this.Age = Age;
}
    
    var Carlos = new profile("Brown","Hispanic",22);
    var Brett = new profile("Brown","Caucasian",23);
    var Kayden = new profile("Black","Caucasian",21);

    function profile_function() {
        document.getElementById("New_And_This").innerHTML =
        "Carlos has "+Carlos.Hair_Color +"Hair. Brett is "+Brett.Age+" years old. Kayden is "+Kayden.Race+".";
    }

    function nesting_function() {
        document.getElementById("nesting").innerHTML=counting_backwards();
        function counting_backwards(){
            var start_count = 0;
            function negative_count() {start_count+=-1;}
            negative_count()
            return start_count;
        }
        
    }

