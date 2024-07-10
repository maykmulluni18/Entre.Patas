import NabarHeader from "../componets/NabarHeader";

const Contact = () => {
  return (
    <>
      <NabarHeader />
      <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
        <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Entre Patas
                </h1>
                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Contactanos
                </p>

                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Acme Inc, Street, State, Postal Code
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +44 1234567890
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    info@acme.org
                  </div>
                </div>
              </div>

              <form className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                  <label className="hidden">Nombres</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    className="text-white w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="hidden">Apellidos</label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Apellido"
                    className="text-white w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col mt-2">
                  <label className="hidden">Correo Electronico</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="text-white w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col mt-2">
                  <label className="hidden">Telefono</label>
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Telephone Number"
                    className="text-white w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="hidden">Direccion</label>
                  <textarea
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Dirección"
                    className="text-white w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 py-10 text-gray-400">
        <div className="text-center">&copy; 2024 - Entre Patas</div>
      </div>
      {/* <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 px-6 py-16 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                volutpat massa dictumst amet. Sapien tortor lacus arcu.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>742 Evergreen Terrace</p>
                    <p>Springfield, OR 12345</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <svg
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span className="ml-3">support@example.com</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-gray-500">
                Looking for careers?
                <a href="#" className="font-medium text-gray-700 underline">
                  View all job openings
                </a>
                .
              </p>
            </div>
          </div>
          <div className="bg-white px-6 py-16 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label for="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autocomplete="name"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label for="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label for="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="block w-full rounded-md border-gray-800 px-4 py-3 placeholder-gray-800 shadow-sm focus:border-indigo-800 focus:ring-indigo-800"
                    placeholder="Phone "
                  />
                </div>
                <div>
                  <label  className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
