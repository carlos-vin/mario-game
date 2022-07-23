const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');

const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump');
    },500);
}

const loop = setInterval(()=>{
   const pipePosition = pipe.offsetLeft;
   const marioPosition = window.getComputedStyle(mario).bottom.replace('px','');
   const cloudsPosition = clouds.offsetLeft; 

   //quando perde o game

   if(pipePosition<=100 && pipePosition>5 && parseFloat(marioPosition)<=100){
       
       pipe.style.animation = 'none';
       pipe.style.left = `${pipePosition}px`;
       clouds.style.left = `${cloudsPosition}px`;
       mario.style.animation = 'none';
       mario.style.bottom = `${marioPosition}px`;
       mario.src = './images/game-over.png';
       mario.style.width='64px'
       clearInterval(loop);
       
   }

       
       
},10); 

document.addEventListener('keydown', jump);