const fetchUsers = new Promise((resolve)=>{
    setTimeout(() => {
        resolve("USER DATA");
    }, 1000);
})

const fetchPostsData = new Promise((resolve,reject)=>{
    const success = false;
    setTimeout(()=>{
        if(success){
            resolve("api fetched successfully.");
        }else{
            reject("api fetching failed.");
        }
    },2000);
})

Promise.all([fetchUsers, fetchPostsData]).then((msg)=>console.log(msg))
.catch((err)=>console.log(err));