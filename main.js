
// HAM MENU
document.querySelector('.open').onclick=function(){
    document.querySelector('.open').style.visibility="hidden"
 document.querySelector('.open').style.opacity="0"
 document.querySelector('.close').style.visibility="visible"
 document.querySelector('.close').style.opacity="1"
 document.querySelector('nav').style.top="0px"
 
}


document.querySelector('.close').onclick=function (){
  document.querySelector('.close').style.visibility="hidden"
 document.querySelector('.close').style.opacity=""
 document.querySelector('.open').style.visibility="visible"
 document.querySelector('.open').style.opacity="1"

 document.querySelector('nav').style.top="-900px" 
}



window.sr = ScrollReveal();


// Home page scrollA
sr.reveal(".nativeBurger",
{
 origin:"left",
 distance:"100px",
 duration:1000,
 delay:500

});
sr.reveal(".main-t",
{
 origin:"bottom",
 distance:"100px",
 // duration:1000,
 duration:2000,
 viewFactor:.4,

});
sr.reveal(".memReward",
{
duration:2000,
opacity:0

});
sr.reveal(".e-content",
{
 origin:"left",
 distance:"100px",
 // duration:1000,
 duration:2000,
 viewFactor:.3


});
sr.reveal(".e-img",
{
 origin:"top",
 distance:"100px",
 // duration:1000,
 duration:2000,
 viewFactor:.3


});
sr.reveal('.skill-1',
{
 // duration:500,
//  delay:100,
 origin:"bottom",
 distance:"50px",
 viewFactor:.2

});

sr.reveal('.skill-2',
{
 // duration:500,
 delay:100,
  origin:"bottom",
 distance:"50px",
//  viewFactor:.3
viewFactor:.2


});
sr.reveal('.skill-3',
{
 // duration:500,
 delay:200,
  origin:"bottom",
 distance:"50px",
//  viewFactor:.3
viewFactor:.2


});
sr.reveal('.skill-4',
{
 // duration:500,
 delay:300,
  origin:"bottom",
 distance:"50px",
//  viewFactor:.3
viewFactor:.2


});
sr.reveal('.skill-5',
{
 // duration:500,
 delay:400,
  origin:"bottom",
 distance:"50px",
//  viewFactor:.3
viewFactor:.2


});





//Menu scrollA

sr.reveal(".leftMenuIn",
{
 origin:"left",
 distance:"100px",
 duration:2000,
 viewFactor:.3

})
sr.reveal(".rightMenuIn",
{
 origin:"right",
 distance:"100px",
 // duration:1000,
 duration:2000,
 viewFactor:.3,
 delay:500
})






























