import React from 'react';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { storage } from '../../../services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { useStateContext } from '../../../context/ContextProvider';
import { deleteBlog } from '../../../services/blog';

export default function DeleteBlog({ row, getTableData }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(row);
  const [file, setFile] = useState(null);
  const { setLoading } = useStateContext();

  const cancelButtonRef = useRef(null);

  const _deleteBlog = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      deleteBlog(form._id).then((res) => {
        setLoading(false);
        if (res.success) {
          getTableData();
          toast.success(res.message);
          _modalClose();
        } else {
          toast.error(res.message);
        }
      });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  const _modalClose = async () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => setOpen(false)}
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
                  <form onSubmit={_deleteBlog}>
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <div className="mt-0">
                            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                              <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                                <div class="max-w-md mx-auto">
                                  <div class="flex items-center space-x-5">
                                    <div class="h-14 w-14 bg-red-200 rounded-full flex flex-shrink-0 justify-center items-center text-red-500 text-2xl font-mono">
                                      ?
                                    </div>
                                    <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                      <h2 class="leading-relaxed">
                                        Delete Blog Exhibit
                                      </h2>
                                      <p class="text-sm text-gray-500 font-normal leading-relaxed">
                                        Are you sure you want to delete this
                                        Blog exhibit?
                                      </p>
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
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-800 sm:ml-3 sm:w-auto"
                        ref={cancelButtonRef}
                      >
                        Yes
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
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