
window.addEventListener("click", play_music)


const zhong_xina = document.querySelector("#zhong-xina")

const name_display = document.querySelector("#name-display")
const text_display = document.querySelector("#text-display")
const img_display = document.querySelector("#img-display")
const price_display = document.querySelector("#price-display")

const items = Array.from(document.querySelectorAll(".item"))

const vine_boom = new Audio("audio/vine-boom.mp3")

const bg_music = new Audio("audio/red-sun-in-the-sky.mp3")
bg_music.loop = true




items.forEach((item) => {
  item.addEventListener("mouseover", () => {

    zhong_xina.className = "speaks"

    name_display.textContent = item.querySelector(".item__name").textContent

    text_display.textContent = item.querySelector(".item__description").textContent

    img_display.src = item.querySelector(".item__img").src

    price_display.textContent = item.querySelector(".item__price").textContent

    price_display.classList.add("background-transparent")
  })
})
       
click_mouseout("mouseout", "Click an item to buy it.")
click_mouseout("click", "Thanks!")




function click_mouseout(event, default_text) {
  items.forEach((item) => {
    item.addEventListener(event, () => {
  
      zhong_xina.className = ""

      name_display.textContent = ""
      
      text_display.textContent = default_text

      img_display.src = ""
      
      price_display.textContent = ""
      price_display.classList.remove("background-transparent")
    
      if (event === "click") {
        vine_boom.play()
      }
    })
  })
}




function play_music() {
  bg_music.play()

  this.removeEventListener("click", play_music)
}