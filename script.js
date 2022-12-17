let slide=document.querySelectorAll('.slide');
let flag=0;
let size=slide.length;
slide.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
})

function getpre(){
    if(flag<=0) flag=size;
   flag--;
   slideImage();
}
function getnext(){
    if(flag==size-1) flag=-1;
   flag++;
   slideImage();
}
function slideImage() {
    slide.forEach((slide)=>{
        slide.style.transform=`translateX(-${flag*100}%)`;
    })
}