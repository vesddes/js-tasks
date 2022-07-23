let el = document.createElement('hhh');
el.innerHTML = `<div>
                    <h2></h2>
                    <div>
                    <button class="start">Start</button> <button class="stop">Stop</button>
                    </div>
                </div>`

const elem = document.querySelector('h2');
elem.parentNode.replaceChild(el, elem)

function clock(){
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.querySelector('h2').innerHTML = hours + ':' + minutes + ':' + seconds;
}

let set = setInterval(clock, 1000);
clock();



let btn = document.querySelector('.start')
btn.addEventListener('click',
    function () {
        if (set) return;
        set = setInterval(clock, 1000);
    })

let btn2 = document.querySelector('.stop')
btn2.addEventListener('click',
    function () {
        clearInterval(set);
        set = null;
    })






let h2 = document.querySelector('h2');
h2.style.fontSize = '48px';

let div = document.querySelector('div')
div.style.width = '100%'
div.style.display = 'flex'
div.style.alignItems = 'center'
div.style.flexDirection = 'column'


btn.style.borderRadius = '10px';
btn.style.border = 'none';
btn.style.backgroundColor = 'green'
btn.style.color = 'white';
btn.style.fontSize = '15px'
btn.style.letterSpacing = '1px'
btn.style.width = '100px';
btn.style.height = '40px'
btn.style.cursor = 'pointer'

btn2.style.borderRadius = '10px';
btn2.style.border = 'none';
btn2.style.backgroundColor = '#B00000'
btn2.style.color = 'white';
btn2.style.fontSize = '15px'
btn2.style.letterSpacing = '1px'
btn2.style.width = '100px';
btn2.style.height = '40px'
btn2.style.cursor = 'pointer'
btn2.style.marginLeft = '30px'
