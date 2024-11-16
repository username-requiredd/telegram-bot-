import React from 'react';

const AddressBook = () => {
  const customers = [
    { name: "Neil Sims", email: "0waxndhu36....",  imgSrc: "/docs/images/people/profile-picture-1.jpg" },
    { name: "Bonnie Green", email: "0owxvt627g....", imgSrc: "/docs/images/people/profile-picture-3.jpg" },
    { name: "Michael Gough", email: "0xnahu2671...",  imgSrc: "/docs/images/people/profile-picture-2.jpg" },
    { name: "Lana Byrd", email: "0xng75151....",  imgSrc: "/docs/images/people/profile-picture-4.jpg" },
    { name: "Thomes Lean", email: "0xbahg61f2...",  imgSrc: "/docs/images/people/profile-picture-5.jpg" },
  ];

  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        {/* <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5> */}
        {/* <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
          View all
        </a> */}
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {customers.map((customer, index) => (
            <li key={index} className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={customer.imgSrc} alt={`${customer.name} image`} />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {customer.name}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {customer.email}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddressBook;
