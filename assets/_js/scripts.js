function changeMode(){
  
  changeClasses()
  changeText()
  changeImg()
  
}
function changeClasses(){
  button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
  h2.classList.toggle(darkModeClass)
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);

}
function changeText(){
  const lightMode = 'Press to Light Mode'
  const darkMode ='Welcome to Dark Mode'

  if(body.classList.contains(darkModeClass)){
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode
    h2.innerHTML = `Dark or light mode, make your choice`
    return;
  }
  button.innerHTML = `Press to Dark Mode`;
	h1.innerHTML = `Welcome`;
  h2.innerHTML = `Light or dark mode, make your choice`
  

  
}
function changeImg(){
  if(body.classList.contains(darkModeClass)){
    imag.innerHTML= `<img src="assets/_images/dark.jpg" alt="dark" >`
    return;
    
  } imag.innerHTML=`<img src="assets/_images/light.jpg" alt="light" >`
}
const darkModeClass = `dark-mode`
const button = document.getElementById("mode-selector")
const h1 = document.getElementById("title")
const h2 = document.getElementById("sub-title")
const body = document.getElementsByTagName("body")[0]
const imag = document.getElementById("image")
const footer= document.getElementsByTagName("footer")[0]

button.addEventListener(`click`, changeMode)