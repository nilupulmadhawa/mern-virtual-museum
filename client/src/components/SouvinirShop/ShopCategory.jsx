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
const callouts = [
  {
    name: 'Magnets',
    description:
      'The fridge magnet has been a popular souvenir for years. Every museum shop and souvenir shop sells them. In our webshop you will find more than 200 different magnets. For on the fridge or on a whiteboard. Guaranteed to brighten up your home! Do you like classics? We have several magnets with works of art by Johannes Vermeer, Vincent van Gogh, Rembrandt van Rijn and more! Prefer something else? Then brighten up your fridge with our cute animal magnets. Or get Delft Blue in the house with our Delft Blue magnets. You can find them all here in our Museum webshop!',
    imageSrc:
      'https://sc04.alicdn.com/kf/H54ed08deb477471190bb8076bf86568dO.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    to: '/shopviewmagnet',
  },
  {
    name: 'Bookmarks & Cards',
    description:
      'Keeping track of where you have been reading? The most beautiful bookmarks of a variety of themes can be found in our bookmark category. Our name says it all, on this website you will find products printed with paintings and works of art that can also be viewed in all the major museums of the world. Do you read a book with a small font? That is no problem for our bookmark with magnifying glass. This bookmark reimburses the letters when you hold it above the page for ease of reading. Practical and stylish!',
    imageSrc:
      'https://fashionmuseum.shop/wp-content/uploads/2020/10/bookmark-1-11-1.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    to: '/shopviewcards',
  },
  {
    name: 'Accessoires',
    description:
      'There is no shortage of accessories at the Museum webshop! With us you will find accessories that fit every outfit and can be used all year round. For example, we have beautiful scarves with colourful prints such as the Almond Blossom by Vincent van Gogh, or the Water Lilies by Claude Monet. We also have handy pocket mirrors that you can always carry with you. So you always carry your beloved work of art with you, and it is practical too!',
    imageSrc:
      'https://i.guim.co.uk/img/media/e9e42a47ee0a5a337fabe2bb22400ed66365729a/0_0_862_517/master/862.jpg?width=700&quality=85&auto=format&fit=max&s=9d8aa0e15da5054d1f8c7504d5067271',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    to: '/shopviewaccessories',
  },
];

export default function ShopCategory() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900 mt-10">
            Souvenirs Collections
          </h2>
          <br />
          <h6>
            Whether you visit a museum or other tourist attraction, souvenirs
            and gifts are always a nice memento of your cultural visit! The
            Museum webshop has several products that will immortalize your visit
            forever. A tangible memory!
          </h6>
          <br />

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <Link to={callout.to}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </Link>
                <br />
                <h1 className="mt-6 text-lg text-gray-500">
                  <Link to={callout.to}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h1>
                <br />
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
