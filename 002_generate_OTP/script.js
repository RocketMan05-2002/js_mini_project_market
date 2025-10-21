

function generateOTP(len){
    let otp = "";
    for(let i=0;i<len;i++){
        otp +=  Math.floor(Math.random() * 10);
    }
    return otp;
}



document.getElementById("otpBtn").addEventListener("click",()=>{
    const otp = generateOTP(6);
    document.getElementById("otp").innerText = otp;
})