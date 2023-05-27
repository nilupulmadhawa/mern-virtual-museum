import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategorys } from '../../services/category';

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

export default function ShopCategory() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getAllCategorys().then((res) => {
      if (res.success) {
        setCategory(res.data);
      }
    });
  }, []);
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
            {category.map((callout) => (
              <div key={callout._id} className="group relative">
                <Link to={`/shopview/${callout.category}`}>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.image}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </Link>
                <br />
                <h1 className="mt-6 text-lg text-gray-500">
                  <Link to={`/shopview/${callout.category}`}>
                    <span className="absolute inset-0" />
                    {callout.category}
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
