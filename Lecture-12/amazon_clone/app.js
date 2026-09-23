const imgs = document.querySelectorAll('.main-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0; //first  image

function changeSlide(){
    //hide all images
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; 
    }
    // but display the first image
    imgs[n].style.display = 'block';
}
changeSlide()

// next and prev buttons working
prev_btn.addEventListener('click' , (e)=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide()
})
next_btn.addEventListener('click' , (e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n = 0;
    }
    changeSlide()
})