import React, { useEffect } from 'react';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function EditProduct(props) {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const [category, setCategory] = useState('');
  const [product, setProduct] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [is_active, setIsActive] = useState(false);

  const [file, setFile] = useState(null);

  useEffect(() => {
    if (props.category) {
      setCategory(props.category);
    }
    if (props.product) {
      setProduct(props.product);
    }
    if (props.image) {
      setImage(props.image);
    }
    if (props.price) {
      setPrice(props.price);
    }
  }, [props.category, props.product, props.price, props.id, props.image]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      category,
      product,
      price,
      image,
      is_active: true,
    };
    console.log(data);

    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append('name', filename);
      formData.append('file', file);

      try {
        await axios.post('http://localhost:5000/api/upload', formData);
        data.image = filename;
      } catch (err) {
        alert(err);
        return;
      }
    }
    submitForm(data);
  }

  async function submitForm(data) {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/product/${props.id}`,
        data
      );
      console.log(response.data);
      setCategory('');
      setPrice('');
      setProduct('');
      setImage('');
      setIsActive(false);

      if (response.data.success) {
        toast.success(response.message);
        window.location = '/shopmanage';
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
                  <form onSubmit={handleSubmit}>
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
                                        Edit Product for Virtual Museum Shop
                                      </h2>
                                      <p class="text-sm text-gray-500 font-normal leading-relaxed">
                                        Edit Souvenir Product for the Virtual
                                        Museum Shop
                                      </p>
                                    </div>
                                  </div>
                                  <div class="divide-y divide-gray-200">
                                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                      <div class="flex flex-col">
                                        <label class="leading-loose">
                                          Product Name
                                        </label>
                                        <input
                                          type="text"
                                          value={product}
                                          onChange={(e) =>
                                            setProduct(e.target.value)
                                          }
                                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          placeholder="Add Product
             Title"
                                        />
                                      </div>
                                      <div class="flex flex-col">
                                        <label class="leading-loose">
                                          Product Category
                                        </label>
                                        <input
                                          type="text"
                                          value={category}
                                          onChange={(e) =>
                                            setCategory(e.target.value)
                                          }
                                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          placeholder="Add Product
             Title"
                                        />
                                      </div>

                                      <div class="flex flex-col">
                                        {file && (
                                          <img
                                            className="img-fluid rounded"
                                            src={URL.createObjectURL(file)}
                                            alt=""
                                          />
                                        )}
                                      </div>

                                      <div class="flex flex-col">
                                        <label class="leading-loose">
                                          Product Image
                                        </label>
                                        <input
                                          type="file"
                                          onChange={(e) =>
                                            setFile(e.target.files[0])
                                          }
                                          value={file}
                                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          placeholder="Add Product"
                                        />
                                      </div>
                                      <div class="flex flex-col">
                                        <label class="leading-loose">
                                          Product Price
                                        </label>
                                        <input
                                          type="text"
                                          value={price}
                                          onChange={(e) =>
                                            setPrice(e.target.value)
                                          }
                                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          placeholder="Add Product"
                                        />
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
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Edit Product
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
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
