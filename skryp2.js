f = document.getElementById("form");
w = document.getElementById("wypluwacz");
b = "<br>";

f.name.addEventListener("change", function(e) { walid(this); });
 f.surname.addEventListener("change", function(e) { walid(this); });

 function walid(v) {
     if(v.value.length >3){
    w.innerHTML += v.name + ": ";
    w.innerHTML += v.value +b;
    v.style.color="#fff";
    v.style.backgroundColor= "blue";
 } else {
     v.style.color="#fff";
     v.style.backgroundColor= "red";
 }
 }
