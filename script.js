const navBar = document.getElementById('navBar');
const content = document.getElementById('content');
const footer = document.getElementById('footer');

content.height = window.innerHeight;
content.width = window.innerWidth;
window.addEventListener('resize', function(){
  
content.height = window.innerHeight;
content.width = window.innerWidth;
})

const model = {
    
    pressedBtn : '',
    hasGeneratedArray: false

}

function viewSelector(){
    let html = '';
    html = showNavBar();
}

function showNavBar(value){
    let html = ``;
    html = /*html*/`
    <nav>
      <a href="#Home" onclick="showHomeView();"> <h1>J.E.N.T</h1> </a>
      <ul class="navigation">
        <li><a href="#about" onclick="showAboutView();" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" onclick="showProsjectView();"class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
     
</nav>
    `;
    navBar.innerHTML = html;
}
function showHomeView(){
  html = `
  <h1 class="homeTextStyle">HomeHeader</h1>
<hr>
  <p class="homeTextStyle">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed
  dolorem fugit sapiente porro veniam pariatur dolore nostrum delectus
  inventore tempore minus nemo, iste ullam illo laboriosam maiores
  repudiandae quos! </p>
  <p class="homeTextStyle">  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
  nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
  autem deleniti cupiditate molestias quis unde quae totam porro dicta
  iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus</p>
  `;
  content.innerHTML = html;
}

function showHomeWelcomeText()
{
  html = `
  <div id="welcomeAnimation"> 
    <h3>Welcome</h3>
  <div id="welcomeAnimationIcon">
  <h3>!</h3></div></div>
  
  
  `;
  content.innerHTML = html;
}

function showAboutView(){

    html = /*html*/`
    <section class="hero" id="about">
    <img
        src="OIP.jpg"
        alt=""
        loading=""
        class=""
    />
      <div class="">
        <h2 class="bio-title">About Me</h2>
        <p class="bio-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sed
          dolorem fugit sapiente porro veniam pariatur dolore nostrum delectus
          inventore tempore minus nemo, iste ullam illo laboriosam maiores
          repudiandae quos!
        </p>
      </div>
</section>

<section class="more-about">
<h2>More About Me</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
  nesciunt excepturi quos obcaecati incidunt voluptatem ipsam sunt ipsum,
  autem deleniti cupiditate molestias quis unde quae totam porro dicta
  iure animi inventore, veniam hic! Omnis nulla, delectus a voluptatibus
</p>
<p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
  nostrum dolor minus, libero delectus praesentium perferendis
</p>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
  consequuntur labore? Ea totam voluptas amet!
</p>
</section>
    `;
    
    content.innerHTML = html;
}

function showProsjectView(){
    html = /*html*/`
    
  <div class="projectBoxes">
    <div class="innerProjectBox">
      <img class="jsIcon" src="https://img.icons8.com/color/45/000000/javascript--v1.png">
      <img class="cssIcon" src="https://img.icons8.com/ios/35/000000/css.png"/>
      <img class="imgProsjects" onclick="window.location.href='https://justclumsy.github.io/Bubbles-PortF-/index.html';" src="effect1Img.png" width="200" height="175"/>
    <hr>
    <p>Code: <a href="https://jsfiddle.net/L5oysvek/2/">jsfiddle</a><p>
    </div>
  </div>

  <div class="projectBoxes">
    <div class="innerProjectBox">
      <img class="jsIcon" src="https://img.icons8.com/color/45/000000/javascript--v1.png">
      <img class="cssIcon" src="https://img.icons8.com/ios/35/000000/css.png"/>
      <img class="imgProsjects" onclick="window.location.href='https://justclumsy.github.io/Freeze-PortF/indexFreeze.html';" src="freezeImg.png" width="200" height="175"/>
      <hr>
      <p>Code: <a href="https://jsfiddle.net/L5oysvek/3/">jsfiddle</a><p>
    </div>
  </div>
 
  <div class="projectBoxes">
    <div class="innerProjectBox">
      <img class="jsIcon" src="https://img.icons8.com/color/45/000000/javascript--v1.png">
      <img class="cssIcon" src="https://img.icons8.com/ios/35/000000/css.png"/>
      <img class="imgProsjects" onclick="window.location.href='https://justclumsy.github.io/Something-PortF/index.html';" src="someThingImg.png" width="200" height="175"/>
    <hr>
   <p>Code: <a href="https://jsfiddle.net/nrLg3hkp/">jsfiddle</a><p>
    </div>
  </div>

  <div class="projectBoxes">
    <div class="innerProjectBox">
    <img class="jsIcon" src="https://img.icons8.com/color/45/000000/javascript--v1.png">
    <img class="cssIcon" src="https://img.icons8.com/ios/35/000000/css.png"/>
      <img class="imgProsjects" onclick="window.location.href='https://justclumsy.github.io/CanvasWallpaper/index.html';" src="wallPaperHex.png" width="200" height="175"/>
      <hr>
      <p>Code: <a href="">jsfiddle</a><p>
    </div>
  </div>
 
    `;
    content.innerHTML = html;
}

function showFooter(){
  html = /*html*/`

<p id="jentFooter"><b>J.E.N.T</b></p>
<p class="footerInfo">Info: </p>


  `;
  footer.innerHTML = html;
}
showFooter();


  setTimeout(function(){
    showProsjectView();
  }, 7500);

