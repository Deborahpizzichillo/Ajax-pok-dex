function search() {
    xhr = new XMLHttpRequest();
    let name = document.getElementById("naam");
    let url = "https://pokeapi.co/api/v2/pokemon/" + name.value + "/"; 
    xhr.open("GET", url, true); 
    let prevname ;

    function myFunction(x) {
        x.classList.toggle("change");
      }
      

    xhr.onload = function(){ 
        if (this.status == 200){
         
            document.getElementById("moves").innerHTML ="";
            document.getElementById("img").innerHTML ="";
            document.getElementById("name").innerHTML = "";

     
            let poke = JSON.parse(this.responseText);
            console.log(poke);

        
            document.getElementById("name").innerHTML = poke.name
            document.getElementById("id").innerHTML = poke.id;
            document.getElementById("img").innerHTML = "<img src='" + poke.sprites.front_default+ "'>";

      
            if (poke.moves.length <5) {
                for (let i = 0; i < poke.moves.length; i++) {
                    document.getElementById("moves").innerHTML += "<li>" + poke.moves[i].move.name +"</li>";
                }
            } 
    
            else {
                for (let i = 0; i < 4; i++) {
                    document.getElementById("moves").innerHTML += "<li>" + poke.moves[i].move.name +"</li>";
                }
            }
        }   
    }
    xhr.send(); 

    x = new XMLHttpRequest();
    let evol = "https://pokeapi.co/api/v2/pokemon-species/" + name.value+ "/";
    x.open("GET", evol, true);

    x.onload = function(){
        if (this.status == 200){
      
            document.getElementById("evol").innerHTML = "";

  
            let e = JSON.parse(this.responseText);
            console.log(e);

    
            prevname = e.evolves_from_species.name;
            document.getElementById("evol").innerHTML = e.evolves_from_species.name;
           something();
        }
    }
    x.send();
     
function something(){
    y = new XMLHttpRequest();
    y.open('GET', "https://pokeapi.co/api/v2/pokemon/"+ prevname+"/", true);
    y.onload = function(){
        if (this.status == 200){
            // Start empthy
            document.getElementById("evolimg").src = "";

            // JSON created (data website)
            let z = JSON.parse(this.responseText);
            console.log(z);

            // Evolution
            document.getElementById("evolimg").innerHTML ="<img src='" + z.sprites.front_default+ "'>";
        }
    }
    y.send();
}
   
}

















