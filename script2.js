const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 //ctx.globalCompositeOperation = 'destination-over';
let hue = 0;

window.addEventListener('resize', function()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = 
{
    x: undefined,
    y: undefined,
}

function animate()
{
   ctx.clearRect(0, 0, canvas.width, canvas. height);
   createParticle();
   handleParticles();

requestAnimationFrame(animate);
  
}
animate();