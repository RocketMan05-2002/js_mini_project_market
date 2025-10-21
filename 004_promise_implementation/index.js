const fetchData = () => {
    return new Promise((resolve, reject)=>{
        const success = false;
        setTimeout(()=>{
            if(success){
                resolve("Data fetch successfull!")
            }else{
                reject("Error : data fetch failed.")
            }
        },2000);
    })
}

fetchData().then((msg)=>console.log(msg))
.catch((err)=>console.log(err));

document.querySelector(".fetched").innerText = "Hi";