import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const AsideAdmin = (props: Props) => {
  return (
    <aside
      id="sidebar"
      className="transition-width fixed top-0 left-0 z-20 flex hidden h-full w-64 flex-shrink-0 flex-col pt-16 duration-75 lg:flex"
      aria-label="Sidebar"
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex-1 space-y-1 divide-y bg-white px-3">
            <ul className="space-y-2 pb-2">
              <li>
                <Link to={`/admin`}>
                  <button className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100">
                    <svg
                      className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="ml-3">Dashboard</span>
                  </button>
                </Link>
              </li>
              <li>
                <Link to={`/admin/products`}>
                  <button className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 ">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Products
                    </span>
                  </button>
                </Link>
              </li>
              <li>
                <a
                  href="https://demo.themesberg.com/windster/authentication/sign-in/"
                  className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a
                  href="https://demo.themesberg.com/windster/authentication/sign-up/"
                  className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 "
                >
                  <svg
                    className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AsideAdmin;
