
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
                        INTRODUCING DANKOO BABA GUEST HOUSE
                    </h2>

                    <p className="mt-4 text-gray-700">
                        Dankoo Baba simply means (THANK YOU LORD), launched in November 2023.One hard working African man whose blessings came after a long struggle ,had a vision to spread happiness and built a place that people can unwind and feel like their second home.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MiddleSection
