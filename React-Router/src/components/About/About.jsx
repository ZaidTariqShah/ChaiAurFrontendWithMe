import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white">
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12 lg:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="About"
                className="rounded-xl shadow-md"
              />
            </div>

            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-3xl text-gray-900 font-bold md:text-4xl">
                About Our Development Journey
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed">
                We are a team of passionate developers focused on delivering
                modern, elegant, and scalable web solutions. Every line of code
                we write aims to improve performance, design, and user
                experience.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed">
                From small projects to large applications, our goal remains the
                same: build with quality, creativity, and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default About;
