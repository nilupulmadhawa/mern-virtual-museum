import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAllProducts } from '../../services/product';
import { getAllCategorys, getCategory } from '../../services/category';

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
// const products = [
//   {
//     id: 1,
//     name: 'Luke A Tuke Fridge Magnet Plywood Sri Lanka',
//     href: '/singleitemview',
//     price: 'LKR 2000.00',
//     imageSrc:
//       'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/180912911--1--1654058017.jpeg',
//     imageAlt:
//       'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Playing Elephant Fridge Magnet',
//     href: '/singleitemview',
//     price: 'LKR 550.00',
//     imageSrc:
//       'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/1700005123001--1--1628227307.jpeg',
//     imageAlt:
//       'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Luv Sl Fridge Magnet Ginidal Mask',
//     href: '/singleitemview',
//     price: 'LKR 950.00',
//     imageSrc:
//       'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/400-600/1700015923001--1--1626857875.jpeg',
//     imageAlt:
//       'Person using a pen to cross a task off a productivity paper card.',
//   },

// ];

export default function ShopViewMagnet() {
  const [table, setTable] = useState([]);
  const [cate, setCate] = useState({});
  const { cat } = useParams();

  const _getTableData = () => {
    getAllProducts('filter[category]=' + cat).then((res) => {
      setTable(res.data);
    });
  };

  useEffect(() => {
    _getTableData();
    getAllCategorys('filter[category]=' + cat).then((res) => {
      setCate(res.data[0]);
      console.log(res.data[0]);
    });
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="p-5 m-5 mt-10 text-3xl font-extrabold tracking-tight text-slate-900">
          {cate.category}
        </h1>
        <br />

        <p>{cate.description}</p>
        <br />
        <br />

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {table?.map((row, index) => (
            <Link key={row.id} to={row.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={row.image}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  style={{ width: '300px', height: '300px' }}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{row.product}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {row.price}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
