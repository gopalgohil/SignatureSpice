
const btnContainers = document.querySelectorAll('.btn');
    btnContainers.forEach(container => {
      const btn = container.querySelector('.mainBtn');
      const mbtn = container.querySelector('.minus');
      const pbtn = container.querySelector('.plus');

      btn.addEventListener("click", () => {
        btn.innerText = 1;
        pbtn.style.display = 'inline-block';
        mbtn.style.display = 'inline-block';
      });

      mbtn.addEventListener("click", () => {
        let currentValue = parseInt(btn.innerText);
        if (currentValue > 0) {
          btn.innerText = currentValue - 1;
        }
        if (parseInt(btn.innerText) === 0) {
          pbtn.style.display = 'none';
          mbtn.style.display = 'none';
          btn.innerText = 'ADD';
        }
      });

      pbtn.addEventListener("click", () => {
        btn.innerText = +(btn.innerText) + 1;
        pbtn.style.display = 'inline-block';
        mbtn.style.display = 'inline-block';
      });
    });