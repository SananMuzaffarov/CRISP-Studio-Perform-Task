// New In and Best Seller -> Add to Fav Part.
const addToFav = document.querySelectorAll(".img-box i");
addToFav.forEach(e=>{
    console.log(e);
    e.addEventListener("click", ()=>{

        if( e.classList.contains("far")){
            e.classList.replace("far", "fas");
            e.style.color = "rgb(255,0,0)";
        }
        else{
            e.classList.replace("fas","far");
            e.style.color ="#000";
        } 
    })
})

// Newsletter Functionalities
var modal = document.getElementById("myModal");
var button = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

function pressHere(){
    modal.style.display = "block";
}
function clickHere(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if (event.target == modal) {
      modal.style.display = "none";
    }
}