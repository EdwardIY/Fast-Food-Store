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

// Ham Menu
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


import * as inventory from './inventory.js';

// Inventory
const categories = inventory.Categories.value;
const main = document.querySelector('main');

for (let category of categories) {
    const title = document.createElement('h2');
    title.classList = 'category';
    title.innerText = category;

    const container = document.createElement('section');
    container.className = 'foodContainer';

    for (let item in inventory[category]) {
       // console.log(inventory[category][item].option_1.map((option)=> console.log(option)))
        container.innerHTML += `
        <div id=${category + '_' + inventory[category][item].id} class="foodItem">
        <img class="" src=${inventory[category][item].img} alt="">
        <div class="foodText">
            <p class="">${inventory[category][item].name}</p>
            <p class="priceText">${inventory[category][item].prices[0]}</p>
            <span class="calText">/${inventory[category][item].cal[0]}cal</span>
            ${inventory[category][item].option_1 ?
            `<select id='select' class='firstSelect'>${inventory[category][item].option_1.map((option)=> `<option value=${encodeURIComponent(option)}>${option}</option>`)} </select>`:''
             }
            ${inventory[category][item].option_2 ?
            `<select id='select' class='secondSelect'>${inventory[category][item].option_2.map((option)=> `<option value=${option}>${option}</option>`)} </select>`:''
             }
            <button class="addBtn">ADD</button>
        </div>
    </div>
        `
    }
    main.appendChild(title);
    main.appendChild(container);
}

main.addEventListener('click', (e) => {
    if (e.target.id == 'select')
        update(e.target.parentElement, e.target.parentElement.parentElement.id.split('_'))
})
function update(element,id) {
    let info = inventory[id[0]][id[1]];

    let option = info.option_1.indexOf(decodeURIComponent(element.children[3].value));


    console.log(element.children[3].value)
    console.log(option)
    console.log(element.children)
    element.children[2].textContent = '/' + info.cal[option] + 'cal'
    element.children[1].textContent = info.prices[option]
}
































