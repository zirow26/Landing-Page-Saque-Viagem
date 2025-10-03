let ofertas = document.querySelector(".ofertas");

const prevslide = document.getElementById("voltaslide");
const nextslide = document.getElementById("nextslide");
const slider = document.querySelector('.slider');

const{ width:sliderWidth } = window.getComputedStyle(slider)
function controlSlide({target: {id} }){
    switch(id){
        case 'nextslide':
            return slider.scrollLeft += parseInt(sliderWidth);

        case "voltaslide":
            return slider.scrollLeft -= parseInt(sliderWidth);
        
        default:
            break
    }

}

nextslide.addEventListener('click',controlSlide);
prevslide.addEventListener('click',controlSlide);

function avancarOfertas(){
    let ofertas = document.querySelector(".ofertas")
    ofertas.style.left= "-51%";

}
function voltarOfertas(){
    let ofertas = document.querySelector(".ofertas")
    ofertas.style.left= "0%";
}
