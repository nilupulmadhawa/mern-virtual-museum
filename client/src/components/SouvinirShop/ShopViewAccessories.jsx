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
    name: '18K gold-plated Sri Lanka map with cities necklace / charmed jewelry gift / Sri Lanka map gold necklace for Men and Women',
    href: '/singleitemview',
    price: 'LKR 20000.00',
    imageSrc:
      'https://i.etsystatic.com/23308213/r/il/f64843/2554473678/il_794xN.2554473678_9wlf.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Sri Lankan Wooden Elephant Keychain Souvenir Gift Collectable Craft',
    href: '/singleitemview',
    price: 'LKR 600.00',
    imageSrc:
      'https://i.etsystatic.com/24590306/r/il/ad12f1/3055181098/il_794xN.3055181098_sxiw.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Sri Lankan Wooden Elephant Key Chain key tag',
    href: '/singleitemview',
    price: 'LKR 250.00',
    imageSrc:
      'https://i.etsystatic.com/43045571/r/il/4b8e84/4847407350/il_794xN.4847407350_jp9x.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: '2pcs Sri Lanka Wooden Carving Traditional Key Chain',
    href: '/singleitemview',
    price: 'LKR 500.00',
    imageSrc:
      'https://i.etsystatic.com/27211027/r/il/0305cd/4338147831/il_600x600.4338147831_jxsc.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Pocket Mirror Large, Ø 80 mm, Tulip with Insect, Marrel',
    href: '/singleitemview',
    price: 'LKR 1500.00',
    imageSrc:
      'https://cdn.webshopapp.com/shops/290353/files/312009546/800x600x2/pocket-mirror-large-80-mm-tulip-with-insect-marrel.jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Pocket Mirror , Ø 80 mm, Monet, Water Lilies evening',
    href: '/singleitemview',
    price: 'LKR 1500',
    imageSrc:
      'https://cdn.webshopapp.com/shops/290353/files/312012215/800x600x2/pocket-mirror-80-mm-monet-water-lilies-evening.jpg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Scarf, Sunflowers Van Gogh',
    href: '/singleitemview',
    price: 'LKR 1000.00',
    imageSrc:
      'https://cdn.webshopapp.com/shops/290353/files/312012708/800x600x2/scarf-sunflowers-van-gogh.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Scarf , Frida Kahlo',
    href: '/singleitemview',
    price: 'LKR 900.00',
    imageSrc:
      'https://cdn.webshopapp.com/shops/290353/files/421975399/800x600x2/scarf-frida-kahlo.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

export default function ShopViewAccessories() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="p-5 m-5 mt-10 text-3xl font-extrabold tracking-tight text-slate-900">
          Accessories
        </h1>
        <br />

        <p>
          Our museum shopping app offers a variety of accessories that are
          inspired by our collections, including scarves, pocket mirrors,
          keyrings, pillboxes, and mints. These accessories are perfect for
          taking a piece of the museum experience with you, whether you're
          looking for a stylish scarf, a portable mirror, a meaningful keyring,
          a convenient pillbox, or a delicious mint. Each accessory features
          unique designs or artwork that showcases the museum's collections,
          making them a perfect souvenir or gift for anyone who loves art and
          culture.
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
