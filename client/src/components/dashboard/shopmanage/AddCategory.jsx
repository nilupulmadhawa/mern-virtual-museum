import React from 'react';
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useStateContext } from '../../../context/ContextProvider';
import { toast } from 'react-toastify';
import { storage } from '../../../services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { addCategory } from '../../../services/category';

export default function AddCategory({ getTableData }) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [form, setForm] = useState({});
  const { setLoading } = useStateContext();

  const _addCategory = async (e) => {
    e.preventDefault();
    if (file == null) {
      toast.error('Please select a file to upload');
      return;
    }
    if ('jpg|jpeg|png|svg|wepg'.indexOf(file.type.split('/')[1]) == -1) {
      toast.error('Please select a valid image file');
      return;
    }
    setLoading(true);
    const name = new Date().getTime() + file.name;
    const storageRef = ref(storage, name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case 'paused':
            // console.log("Upload is paused");
            break;
          case 'running':
            // console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          addCategory({ ...form, image: downloadURL }).then((res) => {
            setLoading(false);
            if (res.success) {
              toast.success(res.message);
              getTableData();
              _modalClose();
            } else {
              toast.error(res.message);
            }
          });
        });
      }
    );
  };

  const _modalClose = async () => {
    setOpen(false);
    setForm({});
    setFile(null);
  };

  const cancelButtonRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        class="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => _modalClose()}
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
                  <form onSubmit={_addCategory}>
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
                                        Create Category for Virtual Museum Shop
                                      </h2>
                                      <p class="text-sm text-gray-500 font-normal leading-relaxed">
                                        Add Souvenir Category for the Virtual
                                        Museum Shop
                                      </p>
                                    </div>
                                  </div>
                                  <div class="divide-y divide-gray-200">
                                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                      <div class="flex flex-col">
                                        <label class="leading-loose">
                                          Category Name
                                        </label>
                                        <input
                                          type="text"
                                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          placeholder="Add Category Title"
                                          value={form.category}
                                          onChange={(e) =>
                                            setForm({
                                              ...form,
                                              category: e.target.value,
                                            })
                                          }
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
                                          Category Image
                                        </label>
                                        <input
                                          type="file"
                                          class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                          placeholder="Add Category"
                                          onChange={(e) =>
                                            setFile(e.target.files[0])
                                          }
                                        />
                                      </div>
                                      <div class="flex flex-col">
                                        <label class="leading-loose">
                                          Category Description
                                        </label>
                                        <textarea
                                          id="description"
                                          name="description"
                                          value={form.description}
                                          onChange={(e) =>
                                            setForm({
                                              ...form,
                                              description: e.target.value,
                                            })
                                          }
                                          rows="4"
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
                        type="submit"
                        ref={cancelButtonRef}
                        className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        Add
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
