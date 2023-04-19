  const Burgers = {
    'burger-01': {
        name: 'Apache Burger',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$4.50', '$10.50'],
        cal: ['400', '1200'],
        id: '01',
        img: "./images/classic_burger.jpg"
        
    },
    'burger-02': {
        name: 'Cheesbuurger Deluxe',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$4.50', '$8.50'],
        cal: ['500', '1300'],
        id: '02',
        img: "./images/cheeseburger.jpg"
    },
    'burger-03': {
        name: 'Bacon Double Cheesburger',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$4.50', '$12.20'],
        cal: ['600', '1400'],
        id: '03',
        img: './images/b_burger.jpg'
        
    },
    'burger-04': {
        name: 'Pulled Pork BBQ',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$3.50', '$9.50'],
        cal: ['400', '1000'],
        id: '04',
        img: './images/pulled_pork.jpg'
    },
    'burger-05': {
        name: 'Philly Cheesesteak',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$5.50', '$12.50'],
        cal: ['600', '1500'],
        id: '05',
        img: './images/philly.jpg'
    },

}

  const Pizza = {
    'pizza-01': {
        name: 'Cheese Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$5.50','$7.25','$10.12'],
        cal: ['200', '400','600','800'],
        id: '01',
        img: './images/cheese_pizza.jpg'
    },
    'pizza-02': {
        name: 'Pepperoni Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$5.50','$7.25','$10.12'],
        cal: ['200', '400','600','800'],
        id: '02',
        img: './images/pizza.jpg'
    },
    'pizza-03': {
        name: 'Supreme Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$2.50','$5.25','$8.12'],
        cal: ['200', '400','450','600'],
        id: '03',
        img: './images/m_pizza.jpg'
    },
    'pizza-04': {
        name: 'Meat Lovers Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$6.50','$8.25','$12.12'],
        cal: ['200', '400','600','1200'],
        id: '04',
        img: './images/meat_Lovers_Pizza.jpg'
    },

}

export {
    Burgers,
    Pizza
}




// const list = burgers

// x.addEventListener('click', (e) => {
//     if (e.target.id == 'add')
//         add(e.target.parentElement);
//     else if (e.target.parentElement.id == 'select')
//         update(e.target.parentElement.parentElement,e.target.parentElement.parentElement.id)
        
// })

// for (item in list) {
//     item.name
//     item.option_1
//     item.price
//     item.cal
// }