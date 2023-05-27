import React from 'react';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function EditBlog() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div>
      <div
        class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
        onClick={() => setOpen(true)}
      >
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
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <div className="mt-0">
                          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                            <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                              <div class="max-w-md mx-auto">
                                <div class="flex items-center space-x-5">
                                  <div class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                                    i
                                  </div>
                                  <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 class="leading-relaxed">
                                      Edit Blog Exhibit
                                    </h2>
                                    <p class="text-sm text-gray-500 font-normal leading-relaxed">
                                      Edit new Blog Exhibit for the Virtual
                                      Blog.
                                    </p>
                                  </div>
                                </div>
                                <div class="divide-y divide-gray-200">
                                  <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div class="flex flex-col">
                                      <label class="leading-loose">
                                        Blog Title
                                      </label>
                                      <input
                                        type="text"
                                        value={
                                          'Read the most interesting Blogs'
                                        }
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Edit Blog
             Title"
                                      />
                                    </div>

                                    <div class="flex flex-col">
                                      <label class="leading-loose">
                                        Blog Image
                                      </label>
                                      <input
                                        type="file"
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Edit Category"
                                      />
                                    </div>
                                    <div class="flex flex-col">
                                      <label class="leading-loose">
                                        Blog Description
                                      </label>
                                      <input
                                        type="text"
                                        value={
                                          'Beyond the Museums exhibitions lies a labyrinth of hallways, vast storage roomsand busy offices, all filled with the sights and sounds of discovery.'
                                        }
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Edit Description"
                                      />
                                    </div>
                                    <div class="flex flex-col">
                                      <label class="leading-loose">
                                        Blog Paragraph
                                      </label>
                                      <textarea
                                        id="message"
                                        rows="4"
                                        value={
                                          'Over the past three centuries, people have collected objects and specimens and placed them in natural history museums throughout the world. Taken as a whole, this global collection is the physical basis for our understanding of the natural world and our place in it, an unparalleled source of information that is directly relevant to issues as diverse as wildlife conservation, climate change, pandemic preparedness, food security, invasive species, rare minerals, and the bioeconomy (1). Strategic coordination and use of the global collection has the potential to focus future collecting and guide decisions that are relevant to the future of humanity and biodiversity. To begin to map the aggregate holdings of the global collection, we describe here a simple and fast method to assess the contents of any natural history museum, and report results based on our assessment of 73 of the world’s largest natural history museums and herbaria from 28 countries.Today, more than a thousand natural history museums exist, with the largest ones located in Europe and North America.'
                                        }
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpen(false)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
