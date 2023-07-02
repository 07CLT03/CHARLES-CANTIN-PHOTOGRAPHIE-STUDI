
// reveal images when mouse over 
setTimeout(function(){
  $(".photographe").mouseover(function () { 
    gsap.to(".groupe-img img", {
      x: 100,
      margin: '0 10px 0',
      duration: 1.8,
      opacity: 1,
      rotate: 0, 
      stagger: .15
    }); 
  });
  $(".photographe").mouseout(function () { 
    gsap.to(".groupe-img img", {
      x: 1100,
      margin: '0 -140px 0',
      duration: 2,
      opacity: 0,
      rotate: 20, 
      stagger: .15
    }); 
  });   
});


// ANIMATION LANDING PAGE - REVEAL ON SCROLL

gsap.from(".info-box",{
  opacity:0,  
  duration:4, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".info-box"
})






// ANIMATION GALLERY - REVEAL PHOTOS CATEGORY ON SCROLL

gsap.from(".gallerie-section",{
  opacity:0,  
  duration:4, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".gallerie-section"
})

// ANIMATION SVG CAEMRAMAN - REVEAL ON SCROLL

gsap.from(".svg-photographe",{
  opacity:0,  
  duration:6, 
  delay: 1,
  scale:0.5,
  scrollTrigger: ".svg-photographe"
})




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

gsap.from(".ButtonUp",{
  y:100,
  opacity:0,  
  duration:3, 
  scale:0.5,
  delay:2,
  scrollTrigger: ".animation-trigger-slide-in"
})