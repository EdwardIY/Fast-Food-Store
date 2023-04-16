// checkoutContainer
let checkoutContainer=document.querySelector('.checkoutContainer') 









//bring up checkoutContainer
function bringCart() {
checkoutContainer.style.right="0px"
 document.querySelector('.cart-Bg').style.display="block"
 document.querySelector('body').style.overflowY="hidden"
}


// Close checkoutContainer
function closeCart() {
checkoutContainer.style.right="-2000px"
 document.querySelector('.cart-Bg').style.display="none"
 document.querySelector('body').style.overflowY="initial"
}















//CartIcon Counter
let cartCount=document.querySelectorAll('.cartCounter')
cartCount.forEach((x)=>{
Number(x.textContent);
x.style.display="none"
})
// Number(cartCount.textContent);
// cartCount.style.display="none"

// add to cart buttons
let addBtn=document.querySelector('.addBtn')
let addBtn2=document.querySelector('.addBtn2')
let addBtn3=document.querySelector('.addBtn3')
let addBtn4=document.querySelector('.addBtn4')
let addBtn5=document.querySelector('.addBtn5')

let addBtn6=document.querySelector('.addBtn6')
let addBtn7=document.querySelector('.addBtn7')
let addBtn8=document.querySelector('.addBtn8')
let addBtn9=document.querySelector('.addBtn9')

let addBtn10=document.querySelector('.addBtn10')
let addBtn11=document.querySelector('.addBtn11')
let addBtn12=document.querySelector('.addBtn12')
let addBtn13=document.querySelector('.addBtn13')

let addBtn14=document.querySelector('.addBtn14')
let addBtn15=document.querySelector('.addBtn15')
let addBtn16=document.querySelector('.addBtn16')
let addBtn17=document.querySelector('.addBtn17')

let addBtn18=document.querySelector('.addBtn18')
let addBtn19=document.querySelector('.addBtn19')
let addBtn20=document.querySelector('.addBtn20')

let addBtn21=document.querySelector('.addBtn21')
let addBtn22=document.querySelector('.addBtn22')
let addBtn23=document.querySelector('.addBtn23')

let addBtn24=document.querySelector('.addBtn24')
let addBtn25=document.querySelector('.addBtn25')
let addBtn26=document.querySelector('.addBtn26')


















/////CARD-B1

// food card update on select
setInterval(cardUpdate1,300)
function cardUpdate1(){
    let dropDown=document.querySelector('.dropDown')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText')
    let calText=document.querySelector('.calText')

    if(dropDownValue=="Regular Combo")priceText.textContent="$6.50"
 else priceText.textContent="$6.59"         
    if(dropDownValue=="Regular Combo")calText.textContent="|600 cal"
 else calText.textContent="|400 cal"
}
// food card to cart
addBtn.addEventListener("click", function(){
    cartCount.forEach((x)=>{
     x.textContent++
    if(x.textContent>0){
        x.style.display="block"
    }

    })
    // cartCount.textContent++
    // if(cartCount.textContent>0){
    //     cartCount.style.display="block"
    // }

    let itemName=document.querySelector('.item1Name').textContent
    let itemPrice=document.querySelector('.item1Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item1Img').src
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SOC-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    if(sandOcomboValue=="Sandwhich"){
        finalHtml=finalHtml.replace("item#","item-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn('item-a')")   
    }
    else if(sandOcomboValue=="Regular Combo"){
        finalHtml=finalHtml.replace("item#","item-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn('item-b')")   
    }
    checkoutContainer.innerHTML+=finalHtml


   })

//remove food card from cart

   function removeBtn(type){
       cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    // cartCount.textContent--
    // if(cartCount.textContent<=0){
    //     cartCount.style.display="none"
    // }
    document.querySelector(`.${type}`).remove()


  

   }



//////CARD-B2

 //food card update on select
setInterval(cardUpdate2,300)
function cardUpdate2(){
    let dropDown=document.querySelector('.dropDown2')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText2')
    let calText=document.querySelector('.calText2')

    if(dropDownValue=="Regular Combo")priceText.textContent="$6.50"
 else priceText.textContent="$6.59"         
    if(dropDownValue=="Regular Combo")calText.textContent="|600 cal"
 else calText.textContent="|400 cal"
}
// food card to cart
addBtn2.onclick=()=>{
    cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item2Name').textContent
    let itemPrice=document.querySelector('.item2Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo2')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item2Img').src
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SOC-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Sandwhich"){
        finalHtml=finalHtml.replace("item#","item2-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn2('item2-a')")   
    }
    else if(sandOcomboValue=="Regular Combo"){
        finalHtml=finalHtml.replace("item#","item2-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn2('item2-b')")   
    }
    checkoutContainer.innerHTML+=finalHtml
    

   }

//remove food card from cart
function removeBtn2(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()


}



//////CARD-B3

//food card update on select
setInterval(cardUpdate3,300)
function cardUpdate3(){
    let dropDown=document.querySelector('.dropDown3')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText3')
    let calText=document.querySelector('.calText3')

    if(dropDownValue=="Regular Combo")priceText.textContent="$6.50"
 else priceText.textContent="$6.59"         
    if(dropDownValue=="Regular Combo")calText.textContent="|600 cal"
 else calText.textContent="|400 cal"
}
// food card to cart
addBtn3.onclick=()=>{
    cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item3Name').textContent
    let itemPrice=document.querySelector('.item3Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo3')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item3Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SOC-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Sandwhich"){
        finalHtml=finalHtml.replace("item#","item3-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn3('item3-a')")   
    }
    else if(sandOcomboValue=="Regular Combo"){
        finalHtml=finalHtml.replace("item#","item3-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn3('item3-b')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn3(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()

  
}



//////CARD-B4

//food card update on select
setInterval(cardUpdate4,300)
function cardUpdate4(){
    let dropDown=document.querySelector('.dropDown4')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText4')
    let calText=document.querySelector('.calText4')

    if(dropDownValue=="Regular Combo")priceText.textContent="$6.50"
 else priceText.textContent="$6.59"         
    if(dropDownValue=="Regular Combo")calText.textContent="|600 cal"
 else calText.textContent="|400 cal"
}
// food card to cart
addBtn4.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item4Name').textContent
    let itemPrice=document.querySelector('.item4Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo4')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item4Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SOC-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Sandwhich"){
        finalHtml=finalHtml.replace("item#","item4-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn4('item4-a')")   
    }
    else if(sandOcomboValue=="Regular Combo"){
        finalHtml=finalHtml.replace("item#","item4-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn4('item4-b')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn4(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()

}



//////CARD-B5

//food card update on select
setInterval(cardUpdate5,300)
function cardUpdate5(){
    let dropDown=document.querySelector('.dropDown5')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText5')
    let calText=document.querySelector('.calText5')

    if(dropDownValue=="Regular Combo")priceText.textContent="$6.50"
 else priceText.textContent="$6.59"         
    if(dropDownValue=="Regular Combo")calText.textContent="|600 cal"
 else calText.textContent="|400 cal"
}
// food card to cart
addBtn5.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item5Name').textContent
    let itemPrice=document.querySelector('.item5Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo5')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item5Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SOC-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Sandwhich"){
        finalHtml=finalHtml.replace("item#","item5-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn5('item5-a')")   
    }
    else if(sandOcomboValue=="Regular Combo"){
        finalHtml=finalHtml.replace("item#","item5-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn5('item5-b')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn5(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()


}



//////CARD-P1

//food card update on select
setInterval(cardUpdate6,300)
function cardUpdate6(){
    let dropDown=document.querySelector('.dropDown6')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText6')
    let calText=document.querySelector('.calText6')

    if(dropDownValue=="Large"){
        priceText.textContent="$6.50";
        calText.textContent="|1,200 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$5.50";
        calText.textContent="|900 cal"
    }
    else if(dropDownValue=="Slice"){
        priceText.textContent="$1.50";
        calText.textContent="|300 cal"
    }

}
// food card to cart
addBtn6.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item6Name').textContent
    let itemPrice=document.querySelector('.item6Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo6')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item6Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item6-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn6('item6-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item6-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn6('item6-b')")   
    }
    else if(sandOcomboValue=="Slice"){
        finalHtml=finalHtml.replace("item#","item6-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn6('item6-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn6(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()

   
}


//////CARD-P2

//food card update on select
setInterval(cardUpdate7,300)
function cardUpdate7(){
    let dropDown=document.querySelector('.dropDown7')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText7')
    let calText=document.querySelector('.calText7')

    if(dropDownValue=="Large"){
        priceText.textContent="$6.50";
        calText.textContent="|1,200 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$5.50";
        calText.textContent="|900 cal"
    }
    else if(dropDownValue=="Slice"){
        priceText.textContent="$1.50";
        calText.textContent="|300 cal"
    }

}
// food card to cart
addBtn7.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item7Name').textContent
    let itemPrice=document.querySelector('.item7Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo7')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item7Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item7-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn7('item7-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item7-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn7('item7-b')")   
    }
    else if(sandOcomboValue=="Slice"){
        finalHtml=finalHtml.replace("item#","item7-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn7('item7-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn7(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()

}



//////CARD-P3

//food card update on select
setInterval(cardUpdate8,300)
function cardUpdate8(){
    let dropDown=document.querySelector('.dropDown8')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText8')
    let calText=document.querySelector('.calText8')

    if(dropDownValue=="Large"){
        priceText.textContent="$6.50";
        calText.textContent="|1,200 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$5.50";
        calText.textContent="|900 cal"
    }
    else if(dropDownValue=="Slice"){
        priceText.textContent="$1.50";
        calText.textContent="|300 cal"
    }

}
// food card to cart
addBtn8.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item8Name').textContent
    let itemPrice=document.querySelector('.item8Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo8')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item8Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item8-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn8('item8-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item8-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn8('item8-b')")   
    }
    else if(sandOcomboValue=="Slice"){
        finalHtml=finalHtml.replace("item#","item8-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn8('item8-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn8(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()

}



//////CARD-P4

//food card update on select
setInterval(cardUpdate9,300)
function cardUpdate9(){
    let dropDown=document.querySelector('.dropDown9')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText9')
    let calText=document.querySelector('.calText9')

    if(dropDownValue=="Large"){
        priceText.textContent="$6.50";
        calText.textContent="|1,200 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$5.50";
        calText.textContent="|900 cal"
    }
    else if(dropDownValue=="Slice"){
        priceText.textContent="$1.50";
        calText.textContent="|300 cal"
    }

}
// food card to cart
addBtn9.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item9Name').textContent
    let itemPrice=document.querySelector('.item9Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo9')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item9Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item9-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn9('item9-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item9-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn9('item9-b')")   
    }
    else if(sandOcomboValue=="Slice"){
        finalHtml=finalHtml.replace("item#","item9-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn9('item9-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn9(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()

}



//////CARD-S1

//food card update on select (NONE)

// food card to cart
addBtn10.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item10Name').textContent
    let itemPrice=document.querySelector('.item10Price').textContent
    let Img=document.querySelector('.item10Img').src
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item10-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn10('item10-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn10(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item10-a').remove()
      
}



//////CARD-S2

//food card update on select (NONE)

// }
// food card to cart
addBtn11.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item11Name').textContent
    let itemPrice=document.querySelector('.item11Price').textContent
    let Img=document.querySelector('.item11Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item11-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn11('item11-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn11(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item11-a').remove()
      
}



//////CARD-S3

//food card update on select (NONE)

// }
// food card to cart
addBtn12.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item12Name').textContent
    let itemPrice=document.querySelector('.item12Price').textContent
    let Img=document.querySelector('.item12Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item12-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn12('item12-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn12(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item12-a').remove()
      
}


//////CARD-S4

//food card update on select (NONE)

// 
// food card to cart
addBtn13.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item13Name').textContent
    let itemPrice=document.querySelector('.item13Price').textContent
    let Img=document.querySelector('.item13Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item13-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn13('item13-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn13(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item13-a').remove()
      
}



//////CARD-W1

//food card update on select (NONE)

// 
// food card to cart
addBtn14.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item14Name').textContent
    let itemPrice=document.querySelector('.item14Price').textContent
    let Img=document.querySelector('.item14Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item14-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn14('item14-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn14(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item14-a').remove()
}

      
//////CARD-W2

//food card update on select (NONE)

// 
// food card to cart
addBtn15.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item15Name').textContent
    let itemPrice=document.querySelector('.item15Price').textContent
    let Img=document.querySelector('.item15Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item15-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn15('item15-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn15(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item15-a').remove()   
}
//////CARD-W3

//food card update on select (NONE)

// 
// food card to cart
addBtn16.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item16Name').textContent
    let itemPrice=document.querySelector('.item16Price').textContent
    let Img=document.querySelector('.item16Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item16-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn16('item16-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn16(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item16-a').remove()   
}



//////CARD-W4

//food card update on select (NONE)

// 
// food card to cart
addBtn17.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item17Name').textContent
    let itemPrice=document.querySelector('.item17Price').textContent
    let Img=document.querySelector('.item17Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item17-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn17('item17-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn17(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item17-a').remove()   
}


//////CARD-S1

//food card update on select
setInterval(cardUpdate18,300)
function cardUpdate18(){
    let dropDown=document.querySelector('.dropDown18')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText18')
    let calText=document.querySelector('.calText18')

    if(dropDownValue=="Large"){
        priceText.textContent="$3.50";
        calText.textContent="|300 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$2.50";
        calText.textContent="|250 cal"
    }
    else if(dropDownValue=="Small"){
        priceText.textContent="$1.50";
        calText.textContent="|200 cal"
    }

}
// food card to cart
addBtn18.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item18Name').textContent
    let itemPrice=document.querySelector('.item18Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo18')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item18Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item18-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn18('item18-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item18-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn18('item18-b')")   
    }
    else if(sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item18-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn18('item18-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn18(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()

}



//////CARD-S1

//food card update on select
setInterval(cardUpdate19,300)
function cardUpdate19(){
    let dropDown=document.querySelector('.dropDown19')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText19')
    let calText=document.querySelector('.calText19')

    if(dropDownValue=="Large"){
        priceText.textContent="$3.50";
        calText.textContent="|300 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$2.50";
        calText.textContent="|250 cal"
    }
    else if(dropDownValue=="Small"){
        priceText.textContent="$1.50";
        calText.textContent="|200 cal"
    }

}
// food card to cart
addBtn19.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item19Name').textContent
    let itemPrice=document.querySelector('.item19Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo19')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item19Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item19-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn19('item19-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item19-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn19('item19-b')")   
    }
    else if(sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item19-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn19('item19-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn19(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
    document.querySelector(`.${type}`).remove()


}



//////CARD-S3

//food card update on select
setInterval(cardUpdate20,300)
function cardUpdate20(){
    let dropDown=document.querySelector('.dropDown20')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText20')
    let calText=document.querySelector('.calText20')

    if(dropDownValue=="Large"){
        priceText.textContent="$3.50";
        calText.textContent="|300 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$2.50";
        calText.textContent="|250 cal"
    }
    else if(dropDownValue=="Small"){
        priceText.textContent="$1.50";
        calText.textContent="|200 cal"
    }

}
// food card to cart
addBtn20.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item20Name').textContent
    let itemPrice=document.querySelector('.item20Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo20')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item20Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item20-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn20('item20-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item20-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn20('item20-b')")   
    }
    else if(sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item20-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn20('item20-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn20(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })

    document.querySelector(`.${type}`).remove()

}


//////CARD-Drinks1

//food card update on select
setInterval(cardUpdate21,300)
function cardUpdate21(){
    let dropDown=document.querySelector('.dropDown21')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText21')
    let calText=document.querySelector('.calText21')

    if(dropDownValue=="Large"){
        priceText.textContent="$1.75";
        calText.textContent="|200 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$1.50";
        calText.textContent="|175 cal"
    }
    else if(dropDownValue=="Small"){
        priceText.textContent="$1.25";
        calText.textContent="|150 cal"
    }

}
// food card to cart
addBtn21.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item21Name').textContent
    let itemPrice=document.querySelector('.item21Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo21')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let type=document.querySelector('.firstSelectType1')
    let typeValue=type.options[type.selectedIndex].text
    let Img=document.querySelector('.item21Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("<!--COLA-->",typeValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)


    if(typeValue=="Dr.Pepper" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item21-a1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-a1')")
    }
    else if(typeValue=="Dr.Pepper" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item21-a2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-a2')")
    }
    else if(typeValue=="Dr.Pepper" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item21-a3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-a3')")
    }

    if(typeValue=="Cola" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item21-b1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-b1')")
    }
    else if(typeValue=="Cola" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item21-b2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-b2')")
    }
    else if(typeValue=="Cola" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item21-b3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-b3')")
    }

    if(typeValue=="Mountain Dew" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item21-c1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-c1')")
    }
    else if(typeValue=="Mountain Dew" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item21-c2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-c2')")
    }
    else if(typeValue=="Mountain Dew" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item21-c3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-c3')")
    }

    if(typeValue=="Sprite" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item21-d1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-d1')")
    }
    else if(typeValue=="Sprite" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item21-d2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-d2')")
    }
    else if(typeValue=="Sprite" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item21-d3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn21('item21-d3')")
    }

    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn21(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
     document.querySelector(`.${type}`).remove()
}



//////CARD-Drinks2

//food card update on select
setInterval(cardUpdate22,300)
function cardUpdate22(){
    let dropDown=document.querySelector('.dropDown22')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText22')
    let calText=document.querySelector('.calText22')

    if(dropDownValue=="Large"){
        priceText.textContent="$2.50";
        calText.textContent="|300 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$1.50";
        calText.textContent="|250 cal"
    }
    else if(dropDownValue=="Small"){
        priceText.textContent="$1.00";
        calText.textContent="|220 cal"
    }

}
// food card to cart
addBtn22.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item22Name').textContent
    let itemPrice=document.querySelector('.item22Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo22')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let Img=document.querySelector('.item22Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    
    if(sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item22-a")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn22('item22-a')")   
    }
    else if(sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item22-b")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn22('item22-b')")   
    }
    else if(sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item22-c")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn22('item22-c')")   
    }
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn22(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })

    document.querySelector(`.${type}`).remove()

}


//////CARD-Drinks3

//food card update on select
setInterval(cardUpdate23,300)
function cardUpdate23(){
    let dropDown=document.querySelector('.dropDown23')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText23')
    let calText=document.querySelector('.calText23')

    if(dropDownValue=="Large"){
        priceText.textContent="$1.75";
        calText.textContent="|200 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$1.50";
        calText.textContent="|175 cal"
    }
    else if(dropDownValue=="Small"){
        priceText.textContent="$1.25";
        calText.textContent="|150 cal"
    }

}
// food card to cart
addBtn23.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item23Name').textContent
    let itemPrice=document.querySelector('.item23Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo23')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let type=document.querySelector('.firstSelectType2')
    let typeValue=type.options[type.selectedIndex].text
    let Img=document.querySelector('.item23Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("<!--JUICETYPE-->",typeValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)


    if(typeValue=="Orange" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item23-a1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn23('item23-a1')")
    }
    else if(typeValue=="Orange" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item23-a2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn23('item23-a2')")
    }
    else if(typeValue=="Orange" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item23-a3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn23('item23-a3')")
    }

    if(typeValue=="Apple" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item23-b1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn23('item23-b1')")
    }
    else if(typeValue=="Apple" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item23-b2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn23('item23-b2')")
    }
    else if(typeValue=="Apple" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item23-b3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn23('item23-b3')")
    }

    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn23(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
     document.querySelector(`.${type}`).remove()
}



//////CARD-Deseerst-1

//food card update on select
setInterval(cardUpdate24,300)
function cardUpdate24(){
    let dropDown=document.querySelector('.dropDown24')
    let dropDownValue=dropDown.options[dropDown.selectedIndex].text
    let priceText=document.querySelector('.priceText24')
    let calText=document.querySelector('.calText24')

    if(dropDownValue=="Large"){
        priceText.textContent="$1.75";
        calText.textContent="|200 cal";
    }
    else if(dropDownValue=="Medium"){
        priceText.textContent="$1.50";
        calText.textContent="|175 cal"
    }
    else if(dropDownValue=="Small"){
        priceText.textContent="$1.25";
        calText.textContent="|150 cal"
    }

}
// food card to cart
addBtn24.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item24Name').textContent
    let itemPrice=document.querySelector('.item24Price').textContent
    let sandOcombo=document.querySelector('.sandOcombo24')
    let sandOcomboValue=sandOcombo.options[sandOcombo.selectedIndex].text
    let type=document.querySelector('.firstSelectType3')
    let typeValue=type.options[type.selectedIndex].text
    let Img=document.querySelector('.item24Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("<!--SIZE-->",sandOcomboValue)
    finalHtml=finalHtml.replace("<!--SS-->",typeValue)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)

    if(typeValue=="Vanilla" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item24-a1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-a1')")
    }
    else if(typeValue=="Vanilla" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item24-a2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-a2')")
    }
    else if(typeValue=="Vanilla" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item24-a3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-a3')")
    }

    if(typeValue=="Strawberry" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item24-b1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-b1')")
    }
    else if(typeValue=="Strawberry" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item24-b2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-b2')")
    }
    else if(typeValue=="Strawberry" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item24-b3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-b3')")
    }

    if(typeValue=="Choclate" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item24-c1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-c1')")
    }
    else if(typeValue=="Choclate" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item24-c2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-c2')")
    }
    else if(typeValue=="Choclate" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item24-c3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-c3')")
    }

    if(typeValue=="Sprite" && sandOcomboValue=="Large"){
        finalHtml=finalHtml.replace("item#","item24-d1")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-d1')")
    }
    else if(typeValue=="Sprite" && sandOcomboValue=="Medium"){
        finalHtml=finalHtml.replace("item#","item24-d2")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-d2')")
    }
    else if(typeValue=="Sprite" && sandOcomboValue=="Small"){
        finalHtml=finalHtml.replace("item#","item24-d3")
        finalHtml=finalHtml.replace("removeBtnFunction","removeBtn24('item24-d3')")
    }

    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn24(type){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
     document.querySelector(`.${type}`).remove()
}



//////CARD-Dessert-2

//food card update on select (NONE)

// }
// food card to cart
addBtn25.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item25Name').textContent
    let itemPrice=document.querySelector('.item25Price').textContent
    let Img=document.querySelector('.item25Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item25-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn25('item25-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn25(){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item25-a').remove()
      
}



//////CARD-Dessert-2

//food card update on select (NONE)

// }
// food card to cart
addBtn26.onclick=()=>{
   cartCount.forEach((x)=>{
        x.textContent++
       if(x.textContent>0){
           x.style.display="block"
       }
       })
    
    let itemName=document.querySelector('.item26Name').textContent
    let itemPrice=document.querySelector('.item26Price').textContent
    let Img=document.querySelector('.item26Img').src
  
  
    let finalHtml=htmlTemplate.replace("Name",itemName);
    finalHtml=finalHtml.replace("IMG",Img)
    finalHtml=finalHtml.replace("CHECKOUTPRICE",itemPrice)
    finalHtml=finalHtml.replace("item#","item26-a")
    finalHtml=finalHtml.replace("removeBtnFunction","removeBtn26('item26-a')")   
    checkoutContainer.innerHTML+=finalHtml
   }

//remove food card from cart
function removeBtn26(){
      cartCount.forEach((x)=>{
        x.textContent--
        if(x.textContent<=0){
            x.style.display="none"
        }
       })
  
    document.querySelector('.item26-a').remove()
      
}


   




 
   
    










// let htmlTemplate=`
// <div class="checkoutItem item#">   <!-- Variable  -->
// <div class="topCheckout">
//  <img src="IMG" alt="">            <!-- Variable  -->
//  <div class="nameQuantity-Container">
//      <span class="checkoutFood abn des">Name</span>       <!-- Variable  -->
//      <div class="checkoutColatype des"><!--COLA--></div>   <!-- Variable  -->
//      <div class="sOc des"><!--SOC--></div>                    <!-- Variable  -->
//      <div class="checkoutSStype des"><!--SS--></div>                <!-- Variable  -->
//      <div class="checkoutJuicetype des"><!--JUICETYPE--></div>        <!-- Variable  -->
//      <div class="checkoutSize des"><!--SIZE--></div>                   <!-- Variable  -->
//      <div class="quantityContainer">
//      <label>Quantity:</label>
//      <input class="qtyCount" type="number" max="15" min="1" value="1">
//      </div>
//      </div>
//  <span class="checkoutPrice">CHECKOUTPRICE</span>                      <!-- Variable  -->
// </div>
// <span class="remove removeBtn#" onclick="removeBtnFunction" >Remove</span>      <!-- Variable  -->
// </div>`

















let htmlTemplate=`
<div class="checkoutItem item#">   <!-- Variable  -->
<div class="topCheckout">
 <img src="IMG" alt="">            <!-- Variable  -->
 <div class="nameQuantity-Container">
     <span class="checkoutFood abn des">Name</span>       <!-- Variable  -->
     <div class="checkoutColatype des"><!--COLA--></div>   <!-- Variable  -->
     <div class="sOc des"><!--SOC--></div>                    <!-- Variable  -->
     <div class="checkoutSStype des"><!--SS--></div>                <!-- Variable  -->
     <div class="checkoutJuicetype des"><!--JUICETYPE--></div>        <!-- Variable  -->
     <div class="checkoutSize des"><!--SIZE--></div>                   <!-- Variable  -->

     
     
     
     
     <div class="quantityContainer">

     <label>Quantity:</label>
     <span class="quantityCounter">1</span>
     <span class="inc-dec" >

     <i onclick="inc()" class="fa-solid fa-caret-up"></i>
    <i onclick="dec()" class="fa-solid fa-caret-down"></i>

    </span>
      
    </div> 
     
     
     
     
     
     
     
     
      </div>
 <span class="checkoutPrice" id="checkoutPrice">CHECKOUTPRICE</span>                      <!-- Variable  -->
</div>
<span class="remove removeBtn#" onclick="removeBtnFunction" >Remove</span>      <!-- Variable  -->
</div>`

//Prices dynamic and variable dynamic
//All cards are going to have the inc and dec but they are all goin gto be passing differnt arguments
function inc() {
    // let quantityCount=document.querySelector(".quantityCounter")
    let quantityCount=document.querySelector(".quantityCounter")
    let count=Number(quantityCount.textContent)
    count++
    quantityCount.textContent=count

    
    let price=document.querySelector('#checkoutPrice')
    let priceTotal= Number(price.textContent.slice(1))
    priceTotal+=5.5

    if(priceTotal%1==0){
        price.textContent=`$${priceTotal}.00`
    }
    else{
        if( priceTotal>=10 &&`${priceTotal}`.length==4){
            price.textContent=`$${priceTotal}0`
        } 
        else if(priceTotal<10 &&`${priceTotal}`.length==3){
            price.textContent=`$${priceTotal}0`
        }
        else{
            price.textContent=`$${priceTotal}`
        }
    }
}
    

function dec() {
    // let quantityCount=document.querySelector(".quantityCounter")
    let quantityCount=document.querySelector(".quantityCounter")
    let count=Number(quantityCount.textContent)
    if(count>0){
        count--
        quantityCount.textContent=count
    
        
        let price=document.querySelector('#checkoutPrice')
        let priceTotal= Number(price.textContent.slice(1))
        priceTotal-=5.5
    
        if(priceTotal%1==0){
            price.textContent=`$${priceTotal}.00`
        }
        else{
            if( priceTotal>=10 &&`${priceTotal}`.length==4){
                price.textContent=`$${priceTotal}0`
            } 
            else if(priceTotal<10 &&`${priceTotal}`.length==3){
                price.textContent=`$${priceTotal}0`
            }
            else{
                price.textContent=`$${priceTotal}`
            }
        }
    }
 
}














// CHECKOUT QUANTITY




// function qtyDec()
// {
//  while( document.getElementsByClassName('qty').value>1)
//  {
//      document.getElementsByClassName('qty').value--
//  }


// }





// else if(priceTotal%0.1==0){
    //     price.textContent=`$${priceTotal}0`
    // }else if(priceTotal%0.01==0){
    //     price.textContent=`$${priceTotal}`
    // }



    // let priceTotal=price.textContent.split("");
    // priceTotal.shift();
    // priceTotal=priceTotal.join("")
    // priceTotal=Number(priceTotal)
    // priceTotal+=5.50

        // if(priceTotal%1==0){
        //     price.textContent=`$${priceTotal}.00`
        // }else{
        //     if(`${priceTotal}`.length==4){
        //         price.textContent=`$${priceTotal}0`
        //     }else{
        //         price.textContent=`$${priceTotal}`
        //     }
        // }
        
        
        // else{
        //     price.textContent=`$${priceTotal}0`
        // }