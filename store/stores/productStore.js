import {create} from 'zustand';

export const useProductStore = create(set => ({
  products: [
    {
      id: 1,
      name: 'SMITH - Trade',
      category: 'Road Helmet',
      price: 120,
      img: require('../../assets/images/helmet.png'),
      largeImage: require('../../assets/images/helmet-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },
    {
      id: 2,
      name: 'PEUGEOT - LR01 ',
      category: 'Road Bike',
      price: 120,
      img: require('../../assets/images/bicycle2.png'),
      largeImage: require('../../assets/images/bicycle2-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },

    {
      id: 3,
      name: 'PILOT - Chromoly',
      category: 'Mountain Bike',
      price: 1999.99,
      img: require('../../assets/images/bicycle3.png'),
      largeImage: require('../../assets/images/bicycle3-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },
    {
      id: 4,
      name: 'SMITH - Trade',
      category: 'Road Helmet',
      price: 120,
      img: require('../../assets/images/helmet.png'),
      largeImage: require('../../assets/images/helmet-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },
    {
      id: 5,
      name: 'SMITH - Trade',
      category: 'Road Helmet',
      price: 120,
      img: require('../../assets/images/helmet.png'),
      largeImage: require('../../assets/images/helmet-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },
    {
      id: 6,
      name: 'PEUGEOT - LR01 ',
      category: 'Road Bike',
      price: 120,
      img: require('../../assets/images/bicycle2.png'),
      largeImage: require('../../assets/images/bicycle2-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },

    {
      id: 7,
      name: 'PILOT - Chromoly',
      category: 'Mountain Bike',
      price: '1.999.99',
      img: require('../../assets/images/bicycle3.png'),
      largeImage: require('../../assets/images/bicycle3-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },
    {
      id: 8,
      name: 'SMITH - Trade',
      category: 'Road Helmet',
      price: 120,
      img: require('../../assets/images/helmet.png'),
      largeImage: require('../../assets/images/helmet-lg.png'),
      description:
        "The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.",
    },
  ],
  filteredProducts: [],
  filterProducts: category => {
    console.log(category);
    set(state => {
      if (category === 'All') {
        return {...state, filteredProducts: state.products};
      } else {
        const filtered = state.products.filter(item =>
          item.category.toLowerCase().includes(category.toLowerCase()),
        );
        console.log(filtered);
        return {...state, filteredProducts: filtered};
      }
    });
  },
}));
