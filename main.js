let h1 = document.querySelector('.random')
let crea = document.querySelector('.crea')
let Space =document.querySelector('.Space')
function random(){
        let create = document.createElement("li");
     let a = h1.textContent = Math.floor(Math.random() * 1000);
     create.textContent = a;
     crea.append(create)
     return a , create; 
}
document.addEventListener('keydown', (event) => {
    if(event.code === 'Space' ){
        random()   
        Space.classList.add("toto");  
    }
    console.log(event);
})
document.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
   Space.classList.remove('toto')
  }
  console.log(event);
});
