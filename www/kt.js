function hesap(){
b=document.getElementById("boy").value;
kl=document.getElementById("kilo").value;
ki=kl/(b*b);
vi=Math.floor(ki);
var kutu= document.getElementById("kutuv");
if(vi<20){
kutu.innerHTML=vi+" - Zayıf";
}
else
if(vi<25){
kutu.innerHTML=vi+" - Normal";
}
else
if(vi<30){
kutu.innerHTML=vi+" - Hafif Şişman";
}
else
if(vi<35){
kutu.innerHTML=vi+" - Şişman";
}
else
if(vi<45){
kutu.innerHTML=vi+" - Sağlık açısından riskli!";
}
else
if(vi<50){
kutu.innerHTML=vi+" - Aşırı şişman!";
}
else
if(vi>50){
kutu.innerHTML=vi+" - Ölümcül şişman!";
}
}
function tem(){
$('#kutuv').html('');
}