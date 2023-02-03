let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let lightBar = document.querySelector('.light-bar');

let custm_style = {
    color: "#02A646"
}

menu.onclick = () => {
    navbar.classList.toggle('active');
}

document.onclick =(e) =>{
    if (!menu.contains(e.target)){
        navbar.classList.remove('active');
    }
}



//dark  mode

let darkmode = document.querySelector('#darkmode');

darkmode.onclick =() => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
        if(document.body.classList.contains('active')){
            Object.assign(lightBar.style,custm_style);
        }
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

