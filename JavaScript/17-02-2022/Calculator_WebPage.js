function display(val){
    document.getElementById("result").value += val;
}

function solve(){
   x = document.getElementById("result").value;
   y = eval(x);
   document.getElementById("result").value = y;
}

function allClear(){
    document.getElementById("result").value = "";
}

function back(){
    var s1 = document.getElementById("result").value;
    document.getElementById("result").value = (s1.substrings(0,s1.length-1));
}
