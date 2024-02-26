const imgs = document.querySelectorAll('.header-slider ul img');
const prev = document.querySelector('.prev-button');
const next = document.querySelector('.next-button');
let n=0;
function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display='none';
        }
        imgs[n].style.display='block'; 
}
changeSlide();
prev.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide();
});
next.addEventListener('click',(evt)=>{
    if(n < imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide();
});
