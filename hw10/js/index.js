let el = document.createElement('hhh');
el.innerHTML = `<h2>Событие</h2>
                <p class="first">X: , Y:</p>
                <div></div>
                <p class="second">Координаты внутри блока: X: , Y: </p>`

const elem = document.querySelector('h2');
elem.parentNode.replaceChild(el, elem)



document.querySelector('html').onmousemove = function(e){
    let coordX = e.pageX;
    let coordY = e.pageY;
    document.querySelector('.first').innerHTML = `X: ${coordX} , Y: ${coordY}`;
}

document.querySelector('div').onmousemove = function(e){
    let coordX = e.pageX;
    let coordY = e.pageY;
    document.querySelector('.second').innerHTML = `Координаты внутри блока: X: ${coordX - div.offsetLeft} , Y: ${coordY - div.offsetTop}`;
}

let h2 = document.querySelector('h2');
h2.style.fontSize = '48px';

let div = document.querySelector('div')
div.style.marginLeft = '100px'
div.style.width = '400px'
div.style.height = '400px'
div.style.backgroundColor = 'yellow'