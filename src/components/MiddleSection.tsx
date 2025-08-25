
const MiddleSection = () => {
  return (
    <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                <div>
                    <img
                    src="/Background.jpg"
                    className="rounded"
                    alt=""
                    />
                </div>

                <div>
                    <div className="max-w-prose md:max-w-none">
                    <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                        We offer a variety of room types to choose from
                    </h2>

                    <p className="mt-4 text-gray-700">
                        All of which are well-appointed and equipped with everything you need for a relaxing and enjoyable stay. Our rooms feature en-suite bathrooms, air conditioning, flat-screen TVs, and free Wi-Fi. We also offer a delicious breakfast every morning, which is included in your room rate.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MiddleSection
