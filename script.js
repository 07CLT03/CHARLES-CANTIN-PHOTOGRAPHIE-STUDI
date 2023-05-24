


// ANIMATION FOOTER   - SLIDE DOWN TO UP 

gsap.registerPlugin(ScrollTrigger); 

gsap.from(".footer-card-left",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  scrollTrigger: ".copyright"
})

gsap.from(".footer-card-center",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  delay:1,
  scrollTrigger: ".copyright"
})

gsap.from(".footer-card-right",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  delay:2,
  scrollTrigger: ".animation-trigger-slide-in"
})