const clear = document.getElementById('clear');
const ce = document.getElementById('cancel-entry');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const num = document.querySelectorAll('.button');
const equal = document.getElementById('equal');
const view = document.getElementById('viewfinder');

clickSymbolButton(clear);
clickSymbolButton(ce);
clickSymbolButton(divide);
clickSymbolButton(multiply);
clickNumberButton(num);
clickSymbolButton(equal);
pressKey();


function clickNumberButton(button) {
    button.forEach(value => {
        value.addEventListener('click', () => {
            view.innerHTML += value.textContent;
        })
    })
}

function clickSymbolButton(button) {
    button.addEventListener('click', () => {
        if (button.textContent === 'C') {
            view.innerHTML = '';
        }

        if (button.textContent === 'CE') {
            const viewArray = view.textContent.split('');
            viewArray.pop()
            view.innerHTML = viewArray.join('');
        }

        if (button.textContent === '÷') {
            view.innerHTML += '/';
        }

        if (button.textContent === 'X') {
            view.innerHTML += '*';
        }

        if (button.textContent === '=') {
            view.innerHTML = eval(view.innerHTML);
        }
    })
}

function pressKey() {
    document.addEventListener('keydown', e => {
        if (!isNaN(parseInt(e.key, 10))) {
            view.innerHTML += e.key;
        } else {
            console.log(e.key)
            if (e.key.toUpperCase() === 'C') {
                view.innerHTML = '';
            }

            if (new Array('/', '*', '+', '-').includes(e.key)) {
                view.innerHTML += e.key;
            }

            if (e.key.toUpperCase() === 'X') {
                view.innerHTML += '*';
            }

            if (e.key === '=' || e.key === 'Enter') {
                view.innerHTML = eval(view.innerHTML);
            }
        }
    })

}