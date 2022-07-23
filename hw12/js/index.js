fetch('https://trevadim.github.io/vue/data/data.json')
    .then((response) => response.json())
    .then((data) => getFullInfo(data.planets))
    .then((planets) => pressed(planets))
    .catch((error) => console.error(error));


function getFullInfo(info) {
    return info;
}

let el = document.createElement('nav');
document.body.appendChild(el);
el.innerHTML = `<button>Показать контент</button>`


let pressed = function (planets) {
    document.querySelector('button').onclick = function(e){
        let hidden = document.querySelector("nav")
        // nav.remove()
        hidden.style.zIndex = '-1'
        hidden.style.display = 'none'
        createContent(planets);
    }
}


const createContent = (planets) => {
    for (let item in planets) {
        let el = document.createElement('div');
        document.body.appendChild(el);
        el.innerHTML = `<h2>${planets[item].title}</h2>
                        <div class="wrapper">
                            <p>${planets[item].info}</p>
                            <img src="${planets[item].url}" alt="${planets[item].title}">                                   
                        </div>`
    }
}