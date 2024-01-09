var sliderIndex = 1;
function setSlider(){
    showSliders(sliderIndex);
}

// slider image index
function plusSlider(n){
    showSliders(sliderIndex += n);
}

function showSliders(n){
    var i;
    var slides = document.getElementsByClassName('slide');
    if(n > slides.length){
        sliderIndex = 1;
    }
    
    if(n < 1){
        sliderIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[sliderIndex-1].style.display = "block";
}


// manual slide
setSlider();