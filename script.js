



// ANIMATION ABOUT ME  



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
      opacity: 1,
      rotate: 20, 
      stagger: .15
    }); 
  });   
});








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