const InAbout = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="InAbout"
              className="rounded-xl shadow-md"
            />
          </div>

          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
              A Deeper Look Into Our Philosophy
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              InAbout goes further into our creative mindset — how we design,
              experiment, and innovate. This section highlights our deeper
              approach to building seamless user experiences.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether it's performance optimization or UI refinement, we
              constantly push boundaries to ensure our work stays exceptional
              and impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InAbout;
