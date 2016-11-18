
function myFunction() {
    var country = document.getElementById("country").value;  
    var all= document.getElementById("all");
     var xhttp = new XMLHttpRequest();
     if (all.checked ){
       xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("result").innerHTML = this.responseText;
        }
      };
        xhttp.open("GET", "https://info2180-lab7-camillebeckford.c9users.io/world.php?country=", true);
        xhttp.send();
     }
     else{
         if(country.length!=0)
         {
          xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              document.getElementById("result").innerHTML = this.responseText;
            }
          };
            xhttp.open("GET", "https://info2180-lab7-camillebeckford.c9users.io/world.php?country="+country, true);
            xhttp.send();
         }
         else{
              document.getElementById("result").innerHTML = "empty field";
         }
         
     }
}