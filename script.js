function clickMe() {
  let red = Math.floor(Math.random()* 255)
  let blue = Math.floor(Math.random()* 255)
  let green = Math.floor(Math.random()* 255)
  console.log(red, blue, green)
  document.body.style.backgroundColor=`rgb(${red},${blue},${green})`
}

var myFunction 

function changeColor() {
  myFunction = setInterval(clickMe,100)

}