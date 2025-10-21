
document.getElementById("parent").addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn")){
        alert(`You clicked ${e.target.innerText}`)
    }
})