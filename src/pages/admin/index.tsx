import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Profile = (props: Props) => {
  return (
    <>
      <div className="relative flex h-full w-full justify-start space-x-6 overflow-y-auto bg-gray-50 p-10 lg:ml-64">
        <div className="min-w-[400px] max-w-[300px] rounded-lg border border-gray-200 bg-white px-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
          <div className="flex flex-col items-center pb-10 pt-8">
            <img
              className="mb-3 h-24 w-24 rounded-full object-cover shadow-lg"
              src="https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/66648021_2413708075541517_2827397363461521408_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=19026a&_nc_ohc=NIiOZT85gmEAX-Fk5HJ&_nc_ht=scontent.fhan5-11.fna&oh=00_AT_MyIWwrvHKF5GxvG2IgC3cLdp101E4H5LUxPJidR7LJw&oe=627D1F6A"
              alt="HeroPham"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              Phạm Anh Hùng
            </h5>
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Frontend Developer
            </span>
            <hr />
            <span className="mt-4 flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="mr-3 transform text-black text-opacity-50"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                ></path>
              </svg>
              <a
                href={"https://github.com/hero-stw/react-typescript-assignment"}
              >
                Front-end
              </a>
            </span>
            <span className="mt-4 flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
              <svg
                width="24"
                height="24"
                fill="currentColor"
                className="mr-3 transform text-black text-opacity-50"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"
                ></path>
              </svg>
              <a href={"https://github.com/hero-stw/nodejs"}>Backend</a>
            </span>
            <div className="mt-4 flex space-x-3 lg:mt-6">
              <a
                href="https://www.facebook.com/phamanh.hung.771"
                className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-lg border bg-white px-8 shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Main Page
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              This is the main admin page of my final assignment for React
              TypeScript course at school
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Pheww~~ It takes quite a lot of time to do this but I hope that it
              will be okey
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
