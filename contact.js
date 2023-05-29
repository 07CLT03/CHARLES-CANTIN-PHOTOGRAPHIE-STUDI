



// ANIMATION GSAP - SLIDING & FADING 

gsap.registerPlugin(ScrollTrigger); 

gsap.from(".panel-title",{
  opacity:0,  
  duration:4, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".landing-panel"
})

gsap.from(".left-side-form",{
  opacity:0,  
  duration:4, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".left-side-form"
})

gsap.from(".right-side-form",{
  opacity:0,  
  duration:4, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".left-side-form"
})

gsap.from(".information-panel",{
  opacity:0,  
  duration:4, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".information-panel"
})

gsap.from(".google-maps",{
  opacity:0,  
  duration:5, 
  delay: 2.5,
  scale:0.4,
  scrollTrigger: ".google-maps"
})


// ANIMATION FOOTER   - SLIDE DOWN TO UP 

gsap.registerPlugin(ScrollTrigger); 

gsap.from(".footer-card-left",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  scrollTrigger: ".ButtonUp"
})

gsap.from(".footer-card-center",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  delay:1,
  scrollTrigger: ".ButtonUp"
})

gsap.from(".footer-card-right",{
  y:100,
  opacity:0,  
  duration:2, 
  scale:0.5,
  delay:2.6,
  scrollTrigger: ".ButtonUp"
})