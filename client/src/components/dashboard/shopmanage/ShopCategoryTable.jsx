import React from 'react';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';

export default function ShopCategoryTable() {
  return (
    <div>
      <h2 className="mb-10 mt-10 text-2xl font-semibold leading-tight">
        Manage Shop Category Details
      </h2>

      <AddCategory />

      <div class="-my-2 py-2 mb-10 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div class="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
          <div class="flex justify-between">
            <div class="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
              <div class="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div class="flex">
                  <span class="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                    <svg
                      width="18"
                      height="18"
                      class="w-4 lg:w-auto"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                        stroke="#455A64"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.9993 16.9993L13.1328 13.1328"
                        stroke="#455A64"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  class="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  ID
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Name
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Image
                </th>

                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Description
                </th>

                {/* <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Actions</th> */}
                <th class="py-3 px-12  border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Actions
                </th>
                {/* <th class="px-6 py-3 border-b-2 border-gray-300"></th> */}
              </tr>
            </thead>
            <tbody class="bg-white">
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="flex items-center">
                    <div>
                      <div class="text-sm leading-5 text-gray-800">#C001</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-blue-900">Magnets</div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <img
                    class="rounded-lg"
                    src="https://sc04.alicdn.com/kf/H54ed08deb477471190bb8076bf86568dO.jpg"
                    alt="image description"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  The fridge magnet has been a popular souvenir for years. Every
                  museum shop and souvenir shop sells them. In our webshop you
                  will find more than 200 different magnets. For on the fridge
                  or on a whiteboard. Guaranteed to brighten up your home! Do
                  you like classics? We have several magnets with works of art
                  by Johannes Vermeer, Vincent van Gogh, Rembrandt van Rijn and
                  more! Prefer something else? Then brighten up your fridge with
                  our cute animal magnets. Or get Delft Blue in the house with
                  our Delft Blue magnets. You can find them all here in our
                  Museum webshop!
                </td>

                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="flex items-center">
                    <div>
                      <div class="text-sm leading-5 text-gray-800">#C002</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-blue-900">
                    Bookmarks & Cards
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <img
                    class="rounded-lg"
                    src="https://fashionmuseum.shop/wp-content/uploads/2020/10/bookmark-1-11-1.jpg"
                    alt="image description"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  Keeping track of where you have been reading? The most
                  beautiful bookmarks of a variety of themes can be found in our
                  bookmark category. Our name says it all, on this website you
                  will find products printed with paintings and works of art
                  that can also be viewed in all the major museums of the world.
                  Do you read a book with a small font? That is no problem for
                  our bookmark with magnifying glass. This bookmark reimburses
                  the letters when you hold it above the page for ease of
                  reading. Practical and stylish!
                </td>

                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="flex items-center">
                    <div>
                      <div class="text-sm leading-5 text-gray-800">#A001</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-blue-900">Accessoires</div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <img
                    class="rounded-lg"
                    src="https://i.guim.co.uk/img/media/e9e42a47ee0a5a337fabe2bb22400ed66365729a/0_0_862_517/master/862.jpg?width=700&quality=85&auto=format&fit=max&s=9d8aa0e15da5054d1f8c7504d5067271"
                    alt="image description"
                  />
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  There is no shortage of accessories at the Museum webshop!
                  With us you will find accessories that fit every outfit and
                  can be used all year round. For example, we have beautiful
                  scarves with colourful prints such as the Almond Blossom by
                  Vincent van Gogh, or the Water Lilies by Claude Monet. We also
                  have handy pocket mirrors that you can always carry with you.
                  So you always carry your beloved work of art with you, and it
                  is practical too!
                </td>

                <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </div>
                      {/* //// */}
                      <EditCategory />
                      <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </td>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
