
const playBtn = document.querySelector("#playBtn")

playBtn.addEventListener("click", () => {
  const bgMusic = new Audio("audio/red-sun-in-the-sky.mp3").play()
})



// ----------------------------------------------
// ---------- GET EVERY ELEMENT NEEDED ----------

const zhongXina = document.querySelector("#zhong-xina")

const textDisplay = document.querySelector("#text-display")
const imgDisplay = document.querySelector("#img-display")
const priceDisplay = document.querySelector("#display-price")

let items = Array.from(document.querySelectorAll(".item"))

const vineBoom = new Audio("audio/vine-boom.mp3")



// -----------------------------------------------------
// ------- ON MOUSE ON ITEMS, DO THE MODIFICATIONS -----

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseover", () => {

    zhongXina.className = "speaks"

    textDisplay.textContent = items[i].querySelector(".item__description").textContent
    imgDisplay.src = items[i].querySelector(".item__img").src

    priceDisplay.textContent = items[i].querySelector(".item__price").textContent
    priceDisplay.classList.add("background-transparent")
  })
} 
       


// -----------------------------------------------------
// ------- MOUSE OUT AND CLICK FUNCTION-----------------

function interactions(event, string) {
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener(event, () => {
  
      zhongXina.className = ""
  
      textDisplay.textContent = string
      imgDisplay.src = ""
  
      priceDisplay.textContent = ""
      priceDisplay.classList.remove("background-transparent")

      if (event === "click") {
        vineBoom.play()
      }
    })
  } 
}

interactions("mouseout", "Click an item to buy it.")
interactions("click", "Thanks!")