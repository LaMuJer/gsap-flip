import './style.css'
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);


let dogs = gsap.utils.toArray("figure")
let bigDog = dogs[0]

dogs.forEach((i) => {
  i.addEventListener('click', e => changeGrid(i))
})


let changeGrid = (i) => {
  // if (i === bigDog) return;

  bigDog.dataset.grid = i.dataset.grid
  i.dataset.grid = "img-0"
  bigDog = i 
}


let state = Flip.getState(dogs)
console.log(state)
Flip.from(state, {
  absolute: true,
  duration: 2,
  ease: "power1",
})

gsap.from("img", {
  y: 100,
  x: 100,
  stagger: 0.15,
  ease: 'power1'
})