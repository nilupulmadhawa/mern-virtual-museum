import React, { useEffect, useState } from 'react';
import { getAllMuseums } from '../services/museum';
import { useStateContext } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

export default function MuseumList() {
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
        <>
            <section class="py-16 bg-[#EFF0F4] lg:py-20 dark:bg-gray-800 font-poppins mt-36">
                <div class="flex flex-col justify-center ">
                    <div class="w-full px-4 mx-auto lg:max-w-5xl ">
                        <div class="relative">
                            <div
                                class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5] dark:bg-gray-700 lg:block left-1/2">
                            </div>
                            <div class="space-y-2 lg:space-y-4">
                                {
                                    table?.map((row, index) => (
                                        <a  >
                                            <div class="flex flex-col items-center">
                                                <div onClick={() => window.open(`/museum/${row._id}`, "_blank")} class={"flex items-center w-full mx-auto" + (index % 2 == 0 ? ' justify-start ' : ' justify-end ')}>
                                                    <div class={"cursor-pointer  w-full lg:w-1/2" + (index % 2 == 0 ? '  lg:pr-8 ' : '  lg:pl-8 ')}>
                                                        <div
                                                            class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 dark:bg-gray-900">
                                                            {index % 2 == 0 ?
                                                                <div
                                                                    class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                                                                    <div
                                                                        class="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block dark:bg-gray-900">
                                                                    </div>
                                                                </div> :
                                                                <div
                                                                    class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                                                                    <div
                                                                        class="hidden h-10 origin-top-right transform -rotate-45 bg-white dark:bg-gray-900 lg:block drop-shadow-lg">
                                                                    </div>
                                                                </div>
                                                            }


                                                            <div class="relative z-20 ">
                                                                <div class="flex flex-wrap items-center">
                                                                    <div class="p-4 md:w-1/4 ">

                                                                        <img src={row.image} alt="" />
                                                                    </div>
                                                                    <div
                                                                        class="flex-1 p-4 pr-4 border-l border-gray-300 dark:border-gray-700">
                                                                        <p
                                                                            class="mb-2 text-xl font-bold text-gray-600 dark:text-gray-400">
                                                                            {row.title}</p>
                                                                        <p class="text-gray-700 dark:text-gray-500">
                                                                            {row.description}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-blue-500 rounded-full dark:bg-gray-700 left-1/2 lg:translate-y-[4px]">
                                                    <span class="text-gray-100 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" class="w-3 h-3 bi bi-building" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd"
                                                                d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z">
                                                            </path>
                                                            <path
                                                                d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z">
                                                            </path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
