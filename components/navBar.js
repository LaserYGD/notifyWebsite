function NavBar() {
  return (
    <nav className="flex flex-col px-6 py-4 w-full text-center font-sans bg-white shadow sm:flex-row sm:items-baseline sm:justify-between sm:text-left">
      <div className="mb-2 sm:mb-0">
        <a href="/home" className="text-grey-darkest hover:text-blue-dark no-underline text-2xl">
          TwitchNotify
        </a>
      </div>
      <div>
        <a href="/download" className="text-grey-darkest hover:text-blue-dark ml-2 underline text-lg">
          <button
            type="button"
            className="btn-primary focus:shadow-outline mr-1 px-4 py-2 text-white font-normal bg-green-700 hover:bg-green-900 rounded focus:outline-none transition duration-300 ease-in-out"
          >
            Download
          </button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
// <a href="/faq" className="text-grey-darkest hover:text-blue-dark ml-2 mr-5 no-underline text-lg"></a>
