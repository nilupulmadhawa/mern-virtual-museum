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
    name: 'Sri lankan traditional handmade wooden bookmark gift for book lovers',
    href: '/singleitemview',
    price: 'LKR 1400.00',
    imageSrc: 'https://i.ebayimg.com/images/g/8xYAAOSwoO9jY2fq/s-l1600.png',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Sri lankan traditional handmade wooden bookmark gift for book lovers',
    href: '/singleitemview',
    price: 'LKR 1500.00',
    imageSrc: 'https://i.ebayimg.com/images/g/KcEAAOSw6rZjY2hx/s-l500.png',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Sri Lankan Character Book Mark - Kapuwa',
    href: '/singleitemview',
    price: '$89',
    imageSrc:
      'https://www.paradiseroad.lk/1524-thickbox_default/book-mark-rani.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Sri Lankan Character Book Mark - Rajasinghe',
    href: '/singleitemview',
    price: '$35',
    imageSrc:
      'https://www.paradiseroad.lk/1514-large_default/book-mark-rani.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Kandian Dancer Card',
    href: '/singleitemview',
    price: 'LKR 60.00',
    imageSrc:
      'https://backend.lassana.com/images//products/DSC_0045-Recovered--1626166870.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Pride Of Sri Lanka Card',
    href: '/singleitemview',
    price: 'LKR 50.00',
    imageSrc:
      'https://backend.lassana.com/images//products/DSC_0082-Recovered--1626167239.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Kandian Nilame Card',
    href: '/singleitemview',
    price: 'LKR 170.00',
    imageSrc:
      'https://backend.lassana.com/images//products/DSC_0085-Recovered--1626166568.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'My Ceyloan card',
    href: '/singleitemview',
    price: 'LKR 140.00',
    imageSrc:
      'https://backend.lassana.com/images//products/DSC_0081-Recovered--1626166754.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export default function ShopViewCards() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="p-5 m-5 mt-10 text-3xl font-extrabold tracking-tight text-slate-900">
          Bookmarks & Cards
        </h1>
        <br />

        <p>
          Our bookmarks are not just bookmarks, but magnetic bookmarks. With
          this bookmark you don't have to worry about it falling out of your
          book. There are 2 magnets in the bookmark so you can clamp it to a
          page, it can also be taken off without effort and will not damage the
          page. We offer many different bookmarks with magnets, such as with the
          most famous paintings from art history, your favorite animals or with
          the most typical Dutch images. View the entire collection here! Also
          handy; a bookmark with magnifying glass. For anyone who might have a
          little more trouble reading the small print, or for people with
          dyslexia! This bookmark with magnifying glass makes everything twice
          as big and is made of sturdy paper. These bookmarks are also available
          in different designs such as the beautiful work of art by Hokusai; the
          large wave, or almond blossom by Vincent van Gogh. Choose your
          favourite and relax with a nice thick book.
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
