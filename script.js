var t1 = gsap.timeline({
    repeat:-1,
});
t1.to(".imgcontainer",{
    width: "100%",
    ease: Expo.easeInOut,
    duration:2,
    stagger:2,
},'a')
.to(".text .d",{
    ease: Expo.easeInOut,
    duration:2,
    stagger:2,
    top:"0",
    
},'a')
.to(".text .d",{
    ease: Expo.easeInOut,
    duration:2,
    stagger:2,
    delay:2,
    top:"-100%",
    
},'a')

gsap.from(".icon",{
    top:"60%",
    ease: Expo.easeInOut,
    duration:4,
    opacity:0,
    rotate:360,
    repeat:-1,
    scale:0,
})

gsap.from(".l1",{
    rotate:360,
    scale:10,
    duration:2,
    ease: Expo.inOut,
    // repeat:-1,
    stagger:2,
    opacity:0,
    
    
})