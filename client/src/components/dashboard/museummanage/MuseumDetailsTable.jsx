import React, { useRef, useState } from 'react';
import AddMuseumModal from './AddMuseumModal';
import EditMuseumModal from './EditMuseumModal';

export default function MuseumDetailsTable() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);
  return (
    <div>
      <h2 className="mb-10 mt-10 text-2xl font-semibold leading-tight">
        Manage Museum Details
      </h2>

      <AddMuseumModal />

      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
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
                  Title
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
                      <div class="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-blue-900">
                    Ancient Egyptian Artifacts
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <img
                    class="rounded-lg"
                    src="https://lh3.googleusercontent.com/p/AF1QipPgFeszcjVdlMQOghsg9ZnUz25-LW5NsacvmGSY=s1360-w1360-h1020"
                    alt="image description"
                  />{' '}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  This exhibit features a collection of ancient Egyptian
                  artifacts, including mummies, sarcophagi, and hieroglyphics
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
                      <div class="text-sm leading-5 text-gray-800">#2</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-blue-900">Modern Art</div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <img
                    class="rounded-lg"
                    src="data:image/jpeg;base64,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"
                    alt="image description"
                  />{' '}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  This exhibit features a collection of modern art from around
                  the world, including paintings, sculptures, and installations.
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
                      <div class="text-sm leading-5 text-gray-800">#1</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div class="text-sm leading-5 text-blue-900">
                    Natural History
                  </div>
                </td>

                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <img
                    class="rounded-lg"
                    src="data:image/jpeg;base64,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"
                    alt="image description"
                  />{' '}
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  This exhibit features a collection of natural history
                  specimens, including fossils, taxidermy animals, and plant
                  specimens.
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
                      {/* /// */}
                      <EditMuseumModal />
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
