
const toggleDarkModeBtn = document.getElementById('toggle-darkmode-btn');
const sunPath = "M53 26.5C53 41.1355 41.1355 53 26.5 53C11.8645 53 0 41.1355 0 26.5C0 11.8645 11.8645 0 26.5 0C41.1355 0 53 11.8645 53 26.5Z";
const moonPath = "M19.5 26.5C19.5 41.1355 42.1355 53 27.5 53C12.8645 53 0.957825 41.1355 0.957825 26.5C0.957825 11.8645 14.7711 0 27.5 0C44.0422 0 19.5 11.8645 19.5 26.5Z";
const sunFill = '#FFA31A';
const moonFill = '#F3F3F1'
let lightMode = true;

toggleDarkModeBtn.addEventListener('click',(e)=>{
  if(lightMode){
    document.body.className = 'darkMode';
    lightMode=false

  }else{
    document.body.className = 'lightMode';
    lightMode=true
  }

  const tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 350
  });
  tl.add({
    targets: '.sun',
    d:[
      {
        value:lightMode?sunPath:moonPath
      }
    ],
    fill:[
      {
        value:lightMode?sunFill:moonFill
      }
    ]
  }); 
});

window.onload = () =>{
  document.body.className = 'lightMode'
}