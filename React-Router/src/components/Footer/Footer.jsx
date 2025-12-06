import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-7xl p-6 lg:py-12">
        {/* TOP SECTION */}
        <div className="md:flex md:justify-between md:items-start">
          {/* LOGO */}
          <div className="mb-10 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16 brightness-200"
                alt="Logo"
              />
            </Link>
            <p className="text-sm text-gray-400 mt-3">
              Building modern web experiences with passion.
            </p>
          </div>

          {/* LINKS GRID */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-gray-400 font-medium space-y-3">
                <li>
                  <Link to="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium space-y-3">
                <li>
                  <a
                    href="https://github.com/ZaidtariqShah"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium space-y-3">
                <li>
                  <Link to="#" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <hr className="my-8 border-gray-700" />

        {/* BOTTOM SECTION */}
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* COPYRIGHT */}
          <span className="text-sm text-gray-400">
            © 2023{" "}
            <a
              href="https://hiteshchoudhary.com/"
              className="hover:text-white transition"
            >
              zaidtariqshah
            </a>
            . All Rights Reserved.
          </span>

          {/* SOCIAL ICONS */}
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Facebook */}
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 8 19">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.135 3H8V0H6.135C4.56 0 3.375 1.185 3.375 2.76V6H0v3h3.375V19h3V9H8l.6-3H6.375V2.76c0-.42.345-.76.76-.76Z"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>

            {/* Discord */}
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556A16.3 16.3 0 0 0 12.816.256a12.08 12.08 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.63 11.63 0 0 0-.535-1.1A16.26 16.26 0 0 0 2.98 1.556 17.39 17.39 0 0 0 0 13.218a15.785 15.785 0 0 0 4.963 2.521A10.43 10.43 0 0 0 6.047 14.3a11.738 11.738 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33a12.51 12.51 0 0 1-1.71.832c.344.678.773 1.27 1.084 1.785A16.46 16.46 0 0 0 20.02 13.218 17.29 17.29 0 0 0 16.94 1.556ZM6.68 10.813a1.94 1.94 0 1 1 1.8-2.045 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 1 1 1.8-2.045 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
              <span className="sr-only">Discord</span>
            </a>

            {/* Twitter */}
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 17">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.07 4.07 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.01 4.01 0 0 0 1.268 5.392 4.16 4.16 0 0 1-1.859-.5v.05A4.05 4.05 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.11 4.11 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.73 11.73 0 0 0 6.291 16a11.5 11.5 0 0 0 11.673-11.5c0-.18 0-.35-.012-.523A8.14 8.14 0 0 0 20 1.892Z"
                />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ZaidtariqShah"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.68-.215.68-.477 0-.237-.01-1.017-.014-1.845-2.76.6-3.34-1.169-3.34-1.169a2.63 2.63 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.1 2.1 0 0 1 1.52 1.021 2.12 2.12 0 0 0 2.88.823c.044-.503.27-.973.63-1.325-2.2-.25-4.52-1.1-4.52-4.9a3.84 3.84 0 0 1 1.33-2.897 3.56 3.56 0 0 1 .095-2.623s.83-.266 2.72 1.016a9.42 9.42 0 0 1 4.96 0c1.89-1.282 2.72-1.016 2.72-1.016.36.83.4 1.768.1 2.623a3.83 3.83 0 0 1 1.02 2.659c0 3.807-2.32 4.644-4.52 4.889a2.38 2.38 0 0 1 .67 1.834c0 1.326-.01 2.394-.01 2.72 0 .263.18.572.68.475A9.911 9.911 0 0 0 10 .333Z"
                />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>

            {/* Dribbble */}
            <a href="#" className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.52 8.52 0 0 1 1.93 5.32 20 20 0 0 0-5.95-.274 32.48 32.48 0 0 0-.75-1.68 11.4 11.4 0 0 0 4.77-3.366ZM8 1.707a8.78 8.78 0 0 1 2-.238 8.5 8.5 0 0 1 5.66 2.152 9.6 9.6 0 0 1-4.48 3.087A45.8 45.8 0 0 0 8 1.707Zm-6.358 6.555a8.57 8.57 0 0 1 4.73-5.981A54.1 54.1 0 0 1 9.54 7.222a32 32 0 0 1-7.9 1.04Zm2.01 7.46A8.5 8.5 0 0 1 1.45 10.02a32 32 0 0 0 8.78-1.219c.243.477.477.964.692 1.449-3.64 1.11-6.01 3.555-6.61 5.87Zm6.348 2.834a8.45 8.45 0 0 1-5.24-1.8 11.73 11.73 0 0 1 6.7-5.332 35.8 35.8 0 0 1 1.82 6.476 8.47 8.47 0 0 1-3.28.656Zm4.772-1.462A37.3 37.3 0 0 0 13.113 11a12.5 12.5 0 0 1 5.32.364 8.56 8.56 0 0 1-3.66 5.73Z"
                />
              </svg>
              <span className="sr-only">Dribbble</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
