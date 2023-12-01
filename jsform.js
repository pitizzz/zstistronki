f = document.getElementById("form");
w = document.getElementById("wypluwacz"); 

const ok = "cyan";
const error  = "#8B0000";
const color = "#fff";

b = "<br>";
rexNr =  /^[0-9]+$/;
rexText =  /^[a-zA-Z]+$/;
rexData =  /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
rexKod = /[0-9]{2}-[0-9]{3}/;
rexPesel = /^[0-9]{11}/;

w.innerHTML += b;

f.send.disabled = true;
f.imie.addEventListener("change", function (e) {  w.innerHTML += this.name + ": "+validate(this,3,"T")+b; });
f.nazwisko.addEventListener("change", function (e) {  w.innerHTML += this.name + ": "+validate(this,3)+b; });
f.data.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,0,"D")+b; });
f.adres.addEventListener("change",function (e) {  w.innerHTML += this.name + ":"+validate(this,3)+b; });
f.miasto.addEventListener("change", function (e) {  w.innerHTML += this.name + ": "+validate(this,2)+b; });
f.kod.addEventListener("change", function (e) {  w.innerHTML += this.name + ": "+validate(this,6)+b; });
f.pesel.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,11,"N")+b; });
f.plec.addEventListener("change", function (e) {  w.innerHTML += this.name +": "+validate(this,1,"P")+b; });
function validate(v,n,type="T") {

    if(v.value.length >= n ) { 
        if(type == "T" && rexText.test(v.value)) {
            v.style.color=color; 
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value;
        } else {
            v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        }
        if(type == "N" && rexNr.test(v.value)) {
            v.style.color=color;
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value*1;
        } else {
            v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        }
        if(type == "N" && rexPesel.test(v.value)) {
            v.style.color=color;
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value*1;
        } else {
          v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        }
        if(type == "T" && rexKod.test(v.value)) {
            v.style.color=color; 
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value;
        } else {
            v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        }
        if(type == "D" && rexData.test(v.value)) {
            v.style.color=color; 
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            return v.value;
        } else {
            v.style.color=color; 
                  v.style.backgroundColor=error;
            f.send.disabled = true;
        }    
        if(type == "P" && rexNr.test(v.value)) {
            v.style.color=color; 
            v.style.backgroundColor=ok;
            f.send.disabled = false;
            if(v.value == 0)
            {
                return "mezczyzna";
            }else if(v.value == 1)
            {
                return "kobieta";
            }
            
        } else {
            v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
        } 
    }else
    {
        v.style.color=color; 
            v.style.backgroundColor=error;
            f.send.disabled = true;
    }      
}
