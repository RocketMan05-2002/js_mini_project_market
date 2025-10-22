const btn = document.querySelector('#topBtn');

window.onscroll = () => {
    btn.style.display = window.scrollY > 200 ? "block" : "none";
};

btn.onclick = () => window.scrollTo({top:0, behavior: "smooth"});