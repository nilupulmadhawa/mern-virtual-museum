import react from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,

    href: '/blogview',

    imageSrc:
      'https://images.pexels.com/photos/460736/pexels-photo-460736.jpeg?cs=srgb&dl=pexels-pixabay-460736.jpg&fm=jpg',
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc:
      'https://www.edra.com/ridimensiona.html/cms/1280/768/100__/cms/custom/files/100067/ct50012_id210246_t1/WhatsApp_Image_20211207_at_170857.jpeg',
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc:
      'https://news.artnet.com/app/news-upload/2019/10/Preview_Caravaggio_TR_14Oktb_06-1024x683.jpg',
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc:
      'https://downtownvienna.com/wp-content/uploads/2019/12/77068876_127685834964905_1200170327546911141_n-300x300.jpg',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
];

const posts = [
  {
    id: 1,
    title: 'James Mulraine Early Modern British Art',
    href: '#',
    description:
      'Through materials and objects, this exhibition describes exchanges between distant worlds – exchanges often far more ancient than the explorations of the 16th century. From deepest antiquity, carnelian, lapis lazuli, ebony and ivory circulated along trade routes...',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },

  // More posts...
];

export default function BlogsView() {
  return (
    <div className="bg-white justify-center">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="font-roboto text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px] mb-10 mt-20">
          Read the most interesting Blogs
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left mb-10 italic font-bold">
          Beyond the Museum's exhibitions lies a labyrinth of hallways, vast
          storage rooms and busy offices, all filled with the sights and sounds
          of discovery.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative mb-10">
          <div className="relative">
            {/* <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" /> */}
            <input
              className="placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] md:py-4"
              type="text"
              placeholder="Search Blog"
            />
          </div>
          <button className="w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2 ">
            Search
          </button>
        </div>

        {/* <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7 mb-5">
        <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
          Popular Tags:
        </span>
        <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
          <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
            Design
          </li>
          <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
            User Experience
          </li>
          <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
            User Interfaces
          </li>
        </ul>
      </div> */}
 
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <Link key={product.id} to={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 mb-10"
                />
              </div>
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                    <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-900 focus:ring-offset-2">
                      Read More
                    </button>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"></div>
      </div>
    </div>
  );
}
