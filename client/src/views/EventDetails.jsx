import React, { useEffect, useState } from 'react';
import { getAllEvents } from '../services/event';
import { Link } from 'react-router-dom';

export default function EventDetails() {

  const [open, setOpen] = useState(false);
  const [table, setTable] = useState([]);

  const _getTableData = () => {
    getAllEvents().then((res) => {
        console.log(res)
        setTable(res.data);
    });
}

useEffect(() => {
    _getTableData()
}, [])

  return (
    <div>
      <section
        className="dark:bg-gray-800 dark:text-gray-100"
        style={{ marginTop: '140px' }}
      >
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
          >
            <img
              src="./images/mu1.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Celebrating the Coronation at the British Museum
              </h3>
              <span className="text-xs dark:text-gray-400">May 7, 2023</span>
              <p>
                Join us to celebrate the Coronation of His Majesty The King and
                Her Majesty The Queen.
              </p>
            </div>
          </a> */}
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {table.map((row)=>(
              <Link
              rel="noopener noreferrer"
              to={`/newEvents/${row._id}`}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src={row.Event_Image}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                {row.Event_Title}
                </h3>
                <span className="text-xs dark:text-gray-400"> {row.Start_Date}</span>
                <p>
                {row.Event_Description}
                </p>
              </div>
            </Link>
            ))}
           
          </div>
          {/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div> */}
        </div>
      </section>
    </div>
  );
}
