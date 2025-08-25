
const Bookings = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 justify-between mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                    Standard Rooms
                </h2>

                <p className="mt-2 text-gray-700">They are perfect for budget-minded travelers.</p>

                <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> R350</strong>

                <span className="text-sm font-medium text-gray-700">/per day</span>
                </p>

                <a
                className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
                >
                Book Now
                </a>
            </div>

            <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A comfortable queen-size bed </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A private bathroom </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> All the essential amenities </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span className="text-gray-700"> A king-size bed </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span className="text-gray-700"> A seating area. </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span className="text-gray-700"> Minibar </span>
                </li>
                </ul>
            </div>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                    Family Rooms
                <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 text-gray-700">Our family rooms are perfect for families with up to four children.</p>

                <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> R850</strong>

                <span className="text-sm font-medium text-gray-700">/per day</span>
                </p>

                <a
                className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
                >
                    Book Now
                </a>
            </div>

            <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A king-size bed </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> Two twin beds </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A private bathroom </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A seating area </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span className="text-gray-700"> Minibar </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-red-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                    <span className="text-gray-700"> A desk </span>
                </li>
                </ul>
            </div>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                    Deluxe Rooms
                </h2>

                <p className="mt-2 text-gray-700">Our deluxe rooms offer more space and comfort than our standard rooms. </p>

                <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> R750</strong>

                <span className="text-sm font-medium text-gray-700">/per day</span>
                </p>

                <a
                className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
                >
                Book Now
                </a>
            </div>

            <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A king-size bed </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A private bathroom </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A seating area </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> Minibar </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A desk </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> All feature of the Standard Rooms </span>
                </li>
                </ul>
            </div>
            </div>

            <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-xs">
            <div className="p-6 sm:px-8">
                <h2 className="text-lg font-medium text-gray-900">
                    Executive Rooms
                </h2>

                <p className="mt-2 text-gray-700">Perfect for business travelers or guests who want the ultimate in luxury and comfort.</p>

                <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> R1 350</strong>

                <span className="text-sm font-medium text-gray-700">/per day</span>
                </p>

                <a
                className="mt-4 block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden sm:mt-6"
                href="#"
                >
                Get Started
                </a>
            </div>

            <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-gray-900 sm:text-xl">What's included:</p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A king-size bed </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A private bathroom </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A seating area </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> A desk </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> Minibar </span>
                </li>

                <li className="flex items-center gap-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-700 shadow-sm"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span className="text-gray-700"> All feature of the Deluxe Rooms </span>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Bookings
