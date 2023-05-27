import React, { useEffect, useState } from 'react';
import AddMuseumModal from './AddMuseumModal';
import EditMuseumModal from './EditMuseumModal';
import { getAllMuseums } from '../../../services/museum';
import DeleteMuseumModal from './DeleteMuseumModal';
import { Link } from 'react-router-dom';
import { useStateContext } from '../../../context/ContextProvider';

export default function MuseumDetailsTable() {
    const [open, setOpen] = useState(false);
    const [table, setTable] = useState([]);
    const { setLoading } = useStateContext();
    const _getTableData = () => {
        setLoading(true)
        getAllMuseums().then((res) => {
            setTable(res.data);
            setLoading(false)
        }).catch((err) => {
            console.log("ERR", err)
            setLoading(false)
        });
    }

    useEffect(() => {
        _getTableData()
    }, [])


    return (
        <div>
            <h2 className="mb-6 mt-6 text-2xl font-semibold leading-tight">
                Manage Museum Details
            </h2>

            <AddMuseumModal getTableData={_getTableData} />

            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                    <div className="flex justify-between">
                        <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
                            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                                <div className="flex">
                                    <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                                        <svg
                                            width="18"
                                            height="18"
                                            className="w-4 lg:w-auto"
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
                                    className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                                    placeholder="Search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="p-3 border-b-2 border-gray-300 text-center leading-4 text-blue-500 tracking-wider">

                                </th>
                                <th className="p-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">
                                    Title
                                </th>
                                <th className="p-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">
                                    Image
                                </th>

                                <th className="p-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">
                                    Description
                                </th>
                                <th className="p-3  border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">
                                    Latitude & Longitude
                                </th>
                                <th className="p-3  border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">

                            {
                                table?.map((row, index) => (
                                    <tr>
                                        <td className="px-3 text-center  py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-800">#{index + 1}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-3 text-center  py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="text-sm leading-5 text-blue-900">{row.title}</div>
                                        </td>

                                        <td className="px-3 text-center  py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5 flex item-center justify-center">
                                            <img
                                                className="rounded-lg w-20 h-20 object-cover"
                                                src={row.image}
                                                alt="image description"
                                            />{' '}
                                        </td>
                                        <td className="px-3 text-center  py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                                            {row.description}
                                        </td>
                                        <td className="px-3 text-center  py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5 text-center">
                                            {row.lat}-{row.lng}
                                        </td>
                                        <td className="px-3 text-center  py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <div className="flex item-center justify-center">
                                                <Link to={`/museum/${row._id}`} rel="noreferrer" target={'_blank'} >
                                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
                                                </Link>
                                                <EditMuseumModal row={row} getTableData={_getTableData} />
                                                <DeleteMuseumModal row={row} getTableData={_getTableData} />
                                            </div>
                                        </td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}
