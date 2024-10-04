const Navbar = () => {
  return (
    <div className="sm:w-9/12 container m-auto bg-base-100">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">AZBloom</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#about">Haqqımızda</a>
            </li>
            <li>
              <a href="#plan">Gerçəkləşmə Planı</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
