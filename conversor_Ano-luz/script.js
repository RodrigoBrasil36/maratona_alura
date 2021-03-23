function conversor(){
    let valoranos=document.getElementById("quantidade").value;
    let valorkm=document.getElementById("kms");
    
    valorkm.value=valoranos*9.460731e+12 +" Km";

}