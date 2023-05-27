import React, { useEffect, useState } from 'react';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import axios from 'axios';
import { getAllCategorys } from '../../../services/category';
import DeleteCategory from './DeleteCategory';

export default function ShopCategoryTable() {
  const [open, setOpen] = useState(false);
  const [table, setTable] = useState([]);

  const _getTableData = () => {
    getAllCategorys().then((res) => {
      setTable(res.data);
    });
  };

  useEffect(() => {
    _getTableData();
  }, []);

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:5000/api/category/${_id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2 className="mb-10 mt-10 text-2xl font-semibold leading-tight">
        Manage Shop Category Details
      </h2>

      <AddCategory getTableData={_getTableData} />

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
                  placeholder="Search by Category Name"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
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
              {table?.map((row, index) => (
                <tr>
                  <td className="px-3 text-center  py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm leading-5 text-gray-800">
                          #{index + 1}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      {row.category}
                    </div>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    <img
                      src={row.image}
                      class="img-fluid mb-5 img-thumbnail shadow-sm"
                      alt=""
                      style={{ width: '100px', height: '100px' }}
                    />
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                    {row.description}
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
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
                      <EditCategory row={row} getTableData={_getTableData} />
                      <DeleteCategory row={row} getTableData={_getTableData} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
