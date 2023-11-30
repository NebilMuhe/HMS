interface NAV {
  name: string;
  url: string;
}

const NavBar = () => {
  const navs = [
    { name: "Home", url: "#" },
    { name: "About", url: "#" },
    { name: "Services", url: "#" },
    { name: "Departments", url: "#" },
    { name: "Doctors", url: "#" },
    { name: "Contact", url: "#" },
  ];
  return (
    <nav className=" bg-blue-600 text-white">
      <div className="max-w-screen-2xl flex justify-between mx-auto items-center py-4">
        <div>
          <h1>HMS</h1>
        </div>
        <div>
          <ul className="flex justify-between">
            {navs.map((list: NAV) => (
              <li className="mr-5">
                <a href={list.url}>{list.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
