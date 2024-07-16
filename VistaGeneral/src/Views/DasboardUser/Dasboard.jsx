const Dashboard = () => {
  const lagoutAuth = () => {
    sessionStorage.clear();
    window.location.href = "/login";

  };
  return (
    <>
      <div>
        <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <button
                  id="toggleSidebarMobile"
                  aria-expanded="true"
                  aria-controls="sidebar"
                  className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded"
                >
                  <svg
                    id="toggleSidebarMobileHamburger"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                  </svg>
                  <svg
                    id="toggleSidebarMobileClose"
                    className="w-6 h-6 hidden"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                  </svg>
                </button>
                <a
                  href="#"
                  className="text-xl font-bold flex items-center lg:ml-2.5"
                >
                  <img
                    src="https://demo.themesberg.com/windster/images/logo.svg"
                    className="h-6 mr-2"
                    alt="Windster Logo"
                  />
                  <span className="self-center whitespace-nowrap">
                    Windster
                  </span>
                </a>
                <form
                  action="#"
                  method="GET"
                  className="hidden lg:block lg:pl-32"
                >
                  <label className="sr-only">Search</label>
                  <div className="mt-1 relative lg:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="email"
                      id="topbar-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5"
                      placeholder="Search"
                    />
                  </div>
                </form>
              </div>
              <div className="flex items-center">
                <button
                  id="toggleSidebarMobileSearch"
                  type="button"
                  className="lg:hidden text-gray-500 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-lg"
                >
                  <span className="sr-only">Search</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
                  </svg>
                </button>
                <div className="hidden lg:flex items-center">
                  <span className="text-base font-normal text-gray-500 mr-5">
                    Open source ❤️
                  </span>
                  <div className="-mb-1">
                    <a
                      className="github-button"
                      href="#"
                      data-color-scheme="no-preference: dark; light: light; dark: light;"
                      data-icon="octicon-star"
                      data-size="large"
                      data-show-count="true"
                      aria-label="Star themesberg/windster-tailwind-css-dashboard on GitHub"
                    ></a>
                  </div>
                </div>
                <button
                  onClick={lagoutAuth}
                  className="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3"
                >
                  <svg
                    className="svg-inline--fa fa-gem -ml-1 mr-2 h-4 w-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="gem"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM244.3 474.9C247.3 478.2 251.6 480 256 480s8.653-1.828 11.67-5.062L510.6 224H1.365L244.3 474.9z"
                    ></path>
                  </svg>
                  Salir
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex overflow-hidden bg-white pt-16">
          <aside
            id="sidebar"
            className="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
            aria-label="Sidebar"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul className="space-y-2 pb-2">
                    <li>
                      <form action="#" method="GET" className="lg:hidden">
                        <label className="sr-only">Search</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            name="email"
                            id="mobile-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-600 focus:ring-cyan-600 block w-full pl-10 p-2.5"
                            placeholder="Search"
                          />
                        </div>
                      </form>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span className="ml-3">Inicio</span>
                      </a>
                    </li>

                    {/* <li>
                      <a
                        href="#"
                        target="_blank"
                        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                        <span className="ml-3 flex-1 whitespace-nowrap">
                          Inbox
                        </span>
                      
                      </a>
                    </li> */}
                  </ul>
                  <div className="space-y-2 pt-2">
                    <a
                      onClick={lagoutAuth}
                      className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                    >
                      <svg
                        className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"></path>
                      </svg>
                      <span className="ml-3 flex-1 whitespace-nowrap">
                        Salir
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div
            className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
            id="sidebarBackdrop"
          ></div>
          <div
            id="main-content"
            className="h-full min-h-screen bg-white dark:bg-gray-200 w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            <main>
              <div className="pt-6 px-4">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                          $45,385
                        </span>
                        <h3 className="text-base font-normal text-gray-500">
                          Sales this week
                        </h3>
                      </div>
                      <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                        12.5%
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"></path>
                        </svg>
                      </div>
                    </div>
                    <div id="main-chart"></div>
                  </div>
                  <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Latest Transactions
                        </h3>
                        <span className="text-base font-normal text-gray-500">
                          This is a list of latest transactions
                        </span>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="#"
                          className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col mt-8">
                      <div className="overflow-x-auto rounded-lg">
                        <div className="align-middle inline-block min-w-full">
                          <div className="shadow overflow-hidden sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th
                                    scope="col"
                                    className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    Transaction
                                  </th>
                                  <th
                                    scope="col"
                                    className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    Date & Time
                                  </th>
                                  <th
                                    scope="col"
                                    className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                  >
                                    Amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="bg-white">
                                <tr>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment from{" "}
                                    <span className="font-semibold">
                                      Bonnie Green
                                    </span>
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 23 ,2021
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $2300
                                  </td>
                                </tr>
                                <tr className="bg-gray-50">
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                    Payment refund to{" "}
                                    <span className="font-semibold">
                                      #00910
                                    </span>
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 23 ,2021
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    -$670
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment failed from{" "}
                                    <span className="font-semibold">
                                      #087651
                                    </span>
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 18 ,2021
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $234
                                  </td>
                                </tr>
                                <tr className="bg-gray-50">
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                    Payment from{" "}
                                    <span className="font-semibold">
                                      Lana Byrd
                                    </span>
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 15 ,2021
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $5000
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment from{" "}
                                    <span className="font-semibold">
                                      Jese Leos
                                    </span>
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 15 ,2021
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $2300
                                  </td>
                                </tr>
                                <tr className="bg-gray-50">
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                    Payment from{" "}
                                    <span className="font-semibold">
                                      THEMESBERG LLC
                                    </span>
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 11 ,2021
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $560
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                    Payment from{" "}
                                    <span className="font-semibold">
                                      Lana Lysle
                                    </span>
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                    Apr 6 ,2021
                                  </td>
                                  <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                    $1437
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
