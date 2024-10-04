let btn = document.querySelector('.mainBtn');
let mbtn = document.querySelector('.minus');
let pbtn = document.querySelector('.plus');

btn.addEventListener("click", () => {
    btn.innerText = 1;
    pbtn.style.display = 'inline-block';
    mbtn.style.display = 'inline-block';
});

mbtn.addEventListener("click", () => {
    let currentValue = parseInt(btn.innerText, 10);
    if (currentValue > 0) {  // Prevents going below 1
        btn.innerText = currentValue - 1;
    }
});

pbtn.addEventListener("click", () => {
    btn.innerText = parseInt(btn.innerText, 10) + 1;
});