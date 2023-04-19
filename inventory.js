  const Burgers = {
    'burger-01': {
        name: 'Apache Burger',
        option_1: ['Sandwhich Tree', 'Regular Combo'],
        prices: ['$4.50', '$10.50'],
        cal: ['400', '1200'],
        id: 'burger-01',
        img: "./images/classic_burger.jpg"
        
    },
    'burger-02': {
        name: 'Cheesbuurger Deluxe',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$4.50', '$8.50'],
        cal: ['500', '1300'],
        id: 'burger-02',
        img: "./images/cheeseburger.jpg"
    },
    'burger-03': {
        name: 'Bacon Double Cheesburger',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$4.50', '$12.20'],
        cal: ['600', '1400'],
        id: 'burger-03',
        img: './images/b_burger.jpg'
        
    },
    'burger-04': {
        name: 'Pulled Pork BBQ',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$3.50', '$9.50'],
        cal: ['400', '1000'],
        id: 'burger-04',
        img: './images/pulled_pork.jpg'
    },
    'burger-05': {
        name: 'Philly Cheesesteak',
        option_1: ['Sandwhich', 'Regular Combo'],
        prices: ['$5.50', '$12.50'],
        cal: ['600', '1500'],
        id: 'burger-05',
        img: './images/philly.jpg'
    },

}

  const Pizza = {
    'pizza-01': {
        name: 'Cheese Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$5.50','$7.25','$10.12'],
        cal: ['200', '400','600','800'],
        id: 'pizza-01',
        img: './images/cheese_pizza.jpg'
    },
    'pizza-02': {
        name: 'Pepperoni Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$5.50','$7.25','$10.12'],
        cal: ['200', '400','600','800'],
        id: 'pizza-02',
        img: './images/pizza.jpg'
    },
    'pizza-03': {
        name: 'Supreme Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$2.50','$5.25','$8.12'],
        cal: ['200', '400','450','600'],
        id: 'pizza-03',
        img: './images/m_pizza.jpg'
    },
    'pizza-04': {
        name: 'Meat Lovers Pizza',
        option_1: ['Slice', 'Small','Medium','Large'],
        prices: ['$1.50', '$6.50','$8.25','$12.12'],
        cal: ['200', '400','600','1200'],
        id: 'pizza-04',
        img: './images/meat_Lovers_Pizza.jpg'
    },

}
  const Salads = {
    'salad-01': {
        name: 'Chef Salad',
        prices: ['$4.50'],
        cal: ['600'],
        id: 'salad-01',
        img: './images/chef_salad.jpg'
    },
    'salad-02': {
        name: 'Garden Salad',
        prices: ['$5.20'],
        cal: ['400'],
        id: 'salad-02',
        img: './images/garden.jpg'
    },
    'salad-03': {
        name: 'Grilled Chicken Ceasar Salad',
        prices: ['$7.50'],
        cal: ['700'],
        id: 'salad-03',
        img: './images/grill_salad.jpg'
    },
    'salad-04': {
        name: 'Chicken Salad',
        prices: ['$4.50'],
        cal: ['300'],
        id: 'salad-04',
        img: './images/gc_salad.jpg'
    },


}
  const Wings = {
    'wings-01': {
        name: 'Classic Hot Wings',
        prices: ['$5.50'],
        cal: ['900'],
        id: 'wings-01',
        img: './images/wings.jpg'
    },
    'wings-02': {
        name: 'BBQ Wings',
        prices: ['$6.20'],
        cal: ['800'],
        id: 'wings-02',
        img: './images/bbq_wings.jpg'
    },
    'salad-03': {
        name: 'Sweet Teryiakai',
        prices: ['$7.50'],
        cal: ['700'],
        id: 'wings-03',
        img: './images/sweet_c.jpg'
    },
    'salad-04': {
        name: 'Lemon Pepper Wings',
        prices: ['$7.50'],
        cal: ['800'],
        id: 'wings-04',
        img: './images/lemon_c.jpg'
    },
}
  const Sides = {
    'side-01': {
        name: 'French Fries',
        option_1: ['Small','Medium','Large'],
        prices: ['$2.50','$3.50','$4.50'],
        cal: ['200','400','600'],
        id: 'side-01',
        img: './images/fries.jpg'
    },
    'side-02': {
        name: 'Onion Rings',
        option_1: ['Small','Medium','Large'],
        prices: ['$2.50','$3.50','$4.50'],
        cal: ['200','300','400'],
        id: 'side-02',
        img: './images/o_rings.jpg'
    },
    'side-03': {
        name: 'Curly Fries',
        option_1: ['Small','Medium','Large'],
        prices: ['$2.50','$3.50','$4.50'],
        cal: ['200','400','600'],
        id: 'side-03',
        img: './images/c_fries.jpg'
    },
}
  const Drinks = {
    'drink-01': {
        name: 'Fountain Soda',
        option_1: ['Small','Medium','Large'],
        prices: ['$1.50','$2.50','$3.50'],
        cal: ['200','400','600'],
        id: 'drink-01',
        img: './images/soda.jpg'
    },
    'drink-02': {
        name: 'Iced Tea',
        option_1: ['Small','Medium','Large'],
        prices: ['$1.50','$2.50','$3.50'],
        cal: ['200','300','400'],
        id: 'drink-02',
        img: './images/iced_tea.jpg'
    },
    'drink-03': {
        name: 'Juice',
        option_1: ['Apple','Orange'],
        option_2: ['Small','Medium','Large'],
        prices: ['$1.50','$2.50','$3.50'],
        cal: ['150','170','200'],
        id: 'drink-03',
        img: './images/j.jpg'
    },
}
  const Desserts = {
    'dessert-01': {
        name: 'Ice Cream Cone',
        option_1: ['Vanilla','Choclate'],
        option_2: ['Small','Medium','Large'],
        prices: ['$1.50','$2.50','$3.50'],
        cal: ['150','200','300'],
        id: 'dessert-01',
        img: './images/i_cone.jpg'
    },
    'dessert-02': {
        name: 'Root Bear Float',
        option_1: ['Small','Medium','Large'],
        prices: ['$1.50','$2.50','$3.50'],
        cal: ['200','300','400'],
        id: 'dessert-02',
        img: './images/b_float.jpg'
    },
    'dessert-03': {
        name: 'Sundaes',
        option_1: ['Small','Medium','Large'],
        prices: ['$1.50','$2.50','$3.50'],
        cal: ['200','350','400'],
        id: 'dessert-03',
        img: './images/is.jpg'
    },
}

const Categories = {
    value:['Burgers','Pizza','Salads','Wings','Sides','Drinks','Desserts']
}

export {
    Categories,
    Burgers,
    Pizza,
    Salads,
    Wings,
    Sides,
    Drinks,
    Desserts
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