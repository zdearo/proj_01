const lights = document.querySelectorAll("div.light")
var time = 0
var start = false

function Start() {
  let promise = Promise.resolve()
  lights.forEach((light) => {
    promise = promise.then(function(resolve){
      return new Promise(function(resolve){
        light.classList.remove("bg-gray");
        light.classList.add("bg-red");
        setTimeout(resolve, Math.random() * (3000 - 1000) + 1000)
      })
    })
  })
  return promise
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && start === false) {
    Start().then(function(){
      lights.forEach((light) => {
        light.classList.remove("bg-red");
        light.classList.add("bg-green");
      })
      start = true
      time = Date.now()
      interval = setInterval(() => {
        document.getElementById("display").innerHTML = Date.now() - time + " ms"
      }, 1);
    })
  }
  else if (event.code === "Space" && start === true) {
    clearInterval(interval)
    start = false
    lights.forEach((light) => {
      light.classList.remove("bg-green");
      light.classList.add("bg-gray");
    })
    time = Date.now() - time
    document.getElementById("display").innerHTML = time + " ms"
  }
});

const switchModal = () => {
  const modal = document.querySelector(".modal")
  modal.style.display = modal.style.display === "none" ? "block" : "none"
}

window.onclick = function(event) {
  const modal = document.querySelector(".modal")
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
