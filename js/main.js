let n = 0;
const change = document.querySelector('#change');
const buttons = document.querySelectorAll('.btn');



buttons.forEach((b) => {
    b.addEventListener('click', (e) => {
        //console.log(e.currentTarget);
        //console.log(e.currentTarget.classList);

        const des = e.currentTarget.classList;

        if (des.contains('btn-danger')) {
            n--;
        } else if (des.contains('btn-success')) {
            n++;
        } else {
            n = 0;
        }
        change.textContent = n;

        if (n > 0) {
            change.style.color = 'green';
        } else if (n < 0) {
            change.style.color = 'red';
        } else {
            change.style.color = 'white';
        }
    })
})


