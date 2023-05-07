import { Link } from 'react-router-dom';

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
  {
    id: 1,
    name: 'Luke A Tuke Fridge Magnet Plywood Sri Lanka',
    href: '/singleitemview',
    price: 'LKR 2000.00',
    imageSrc:
      'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/180912911--1--1654058017.jpeg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Playing Elephant Fridge Magnet',
    href: '/singleitemview',
    price: 'LKR 550.00',
    imageSrc:
      'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/1700005123001--1--1628227307.jpeg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Luv Sl Fridge Magnet Ginidal Mask',
    href: '/singleitemview',
    price: 'LKR 950.00',
    imageSrc:
      'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/1700015923001--1--1626857875.jpeg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Luke A Tuke Fridge Magnet Acrylic Sri Lanka Icon',
    href: '/singleitemview',
    price: 'LKR 1,350.00',
    imageSrc:
      'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/180912891--1--1654058002.jpeg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Luv Sl Fridge Magnets Heart',
    href: '/singleitemview',
    price: 'LKR 1,150.00',
    imageSrc:
      'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/104258946--1--1626772206.jpeg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Dark Elephant',
    href: '/singleitemview',
    price: 'LKR 500.00',
    imageSrc:
      'https://ecoceylon.lk/wp-content/uploads/2020/10/refrigerator-magnet-10-1024x1024-1.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Sri Lanka Colombo National Museum Heart Shape',
    href: '/singleitemview',
    price: 'LKR 3000.00',
    imageSrc: 'https://m.media-amazon.com/images/I/613gk2I82iL._AC_SL1002_.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Luv SL Fridge Magnet Sri Lanka Flag With Glitter',
    href: '/singleitemview',
    price: 'LKR 900.00',
    imageSrc:
      'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/1700006423001--1--1622687512.jpeg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export default function ShopViewMagnet() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="p-5 m-5 mt-10 text-3xl font-extrabold tracking-tight text-slate-900">
          Magnets
        </h1>
        <br />

        <p>
          Our magnets are compact, light and easy to carry. Some people collect
          them fanatically from all the places they have been. Because just like
          a postcard it is something that is a nice memento of your visit to a
          museum, tourist attraction or other activity. The magnets are suitable
          for any iron surface and will hang on it without any problems. So
          place them on your fridge, whiteboard, anywhere! Simply hang up your
          holiday photos, notes, notes and shopping lists with our fun fridge
          magnets. Available separately or in sets, in a wide range of designs.
        </p>
        <br />
        <br />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  style={{ width: '300px', height: '300px' }}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
