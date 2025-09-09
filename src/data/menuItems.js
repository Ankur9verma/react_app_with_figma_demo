import { GiChickenOven, GiMeat, GiFriedFish, GiSausage, GiShrimp, GiRiceCooker, GiNoodles, GiPizzaSlice, GiHamburger, GiBowlOfRice, GiCupcake, GiDonut, GiIceCube, GiCakeSlice, GiChocolateBar, GiCarrot, GiBread, GiFrenchFries, GiCorn, GiCircle } from 'react-icons/gi';

// Image imports - real images for some items
import tandooriChickenImg from '../assets/images/menu/starters/tandoori-chicken.jpg';
import biryaniImg from '../assets/images/menu/main-course/biryani.jpg';
import chocolateCakeImg from '../assets/images/menu/desserts/chocolate-cake.jpg';
import frenchFriesImg from '../assets/images/menu/sides/french-fries.jpg';

// Commented out - add these when you have more images
// import fishTikkaImg from '../assets/images/menu/starters/fish-tikka.jpg';
// import chickenWingsImg from '../assets/images/menu/starters/chicken-wings.jpg';
// import prawnFryImg from '../assets/images/menu/starters/prawn-fry.jpg';
// import seekhKebabImg from '../assets/images/menu/starters/seekh-kebab.jpg';
// import chickenCurryImg from '../assets/images/menu/main-course/chicken-curry.jpg';
// import pastaAlfredoImg from '../assets/images/menu/main-course/pasta-alfredo.jpg';
// import margheritaPizzaImg from '../assets/images/menu/main-course/margherita-pizza.jpg';
// import veggieBurgerImg from '../assets/images/menu/main-course/veggie-burger.jpg';
// import vanillaIceCreamImg from '../assets/images/menu/desserts/vanilla-ice-cream.jpg';
// import chocolateDonutImg from '../assets/images/menu/desserts/chocolate-donut.jpg';
// import cupcakeImg from '../assets/images/menu/desserts/cupcake.jpg';
// import chocolateBarImg from '../assets/images/menu/desserts/chocolate-bar.jpg';
// import garlicBreadImg from '../assets/images/menu/sides/garlic-bread.jpg';
// import steamedRiceImg from '../assets/images/menu/sides/steamed-rice.jpg';
// import grilledCornImg from '../assets/images/menu/sides/grilled-corn.jpg';
// import onionRingsImg from '../assets/images/menu/sides/onion-rings.jpg';

export const menuItems = [
  // Starters
  {
    id: 1,
    name: 'Tandoori Chicken',
    description: 'Tandoori chicken is a dish made from chicken marinated in yogurt and spices.... Read more',
    isVeg: false,
    type: 'Starter',
    icon: GiChickenOven,
    image: tandooriChickenImg,
  },
  {
    id: 2,
    name: 'Fish Tikka',
    description: 'Grilled fish marinated in aromatic spices and herbs.... Read more',
    isVeg: false,
    type: 'Starter',
    icon: GiFriedFish,
  },
  
  // Main Course
  {
    id: 3,
    name: 'Biryani',
    description: 'Fragrant rice dish with tender meat and aromatic spices.... Read more',
    isVeg: false,
    type: 'Main Course',
    icon: GiRiceCooker,
    image: biryaniImg,
  },
  {
    id: 4,
    name: 'Pasta Alfredo',
    description: 'Creamy pasta with parmesan cheese and herbs.... Read more',
    isVeg: true,
    type: 'Main Course',
    icon: GiNoodles,
  },
  
  // Desserts
  {
    id: 5,
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with creamy frosting.... Read more',
    isVeg: true,
    type: 'Desert',
    icon: GiCakeSlice,
    image: chocolateCakeImg,
  },
  {
    id: 6,
    name: 'Vanilla Ice Cream',
    description: 'Creamy vanilla ice cream with natural flavors.... Read more',
    isVeg: true,
    type: 'Desert',
    icon: GiIceCube,
  },
  
  // Sides
  {
    id: 7,
    name: 'French Fries',
    description: 'Crispy golden fries with sea salt.... Read more',
    isVeg: true,
    type: 'Side',
    icon: GiFrenchFries,
    image: frenchFriesImg,
  },
  {
    id: 8,
    name: 'Garlic Bread',
    description: 'Toasted bread with garlic butter and herbs.... Read more',
    isVeg: true,
    type: 'Side',
    icon: GiBread,
  }
];