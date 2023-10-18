import Link from 'next/link';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import Navlinks from './Navlinks';
import { themeChange } from 'theme-change';
import { useEffect, useState } from 'react';
import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';

function Navbar() {
  // const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))
  const [currentTheme, setCurrentTheme] = useState(null);

  const logoutUser = () => {};

  useEffect(() => {
    themeChange(false);
    console.log(currentTheme);
    if (currentTheme === null) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentTheme('dark');
      } else {
        setCurrentTheme('light');
      }
    }
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="w-full flex justify-center  shadow-md  text-primary-content bg-primary">
      <div className="navbar  max-w-5xl">
        <div className="flex-none lg:hidden"></div>

        <div className="flex-1 px-2 mx-2">
          <Link href="/">
            <div>T31 Labs.</div>
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>

          {/* <label className="swap ">
                <input type="checkbox"/>
                <SunIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-5 h-5 "+(currentTheme === "dark" ? "swap-on" : "swap-off")}/>
                <MoonIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-5 h-5 "+(currentTheme === "light" ? "swap-on" : "swap-off")} />
            </label> */}

          <div className="dropdown ml-6 dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-6 rounded-full"></div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100  rounded-box w-52"
            >
              <li className="justify-between">
                <Link href={'/app/settings-profile'}>Settings</Link>
              </li>
              <div className="divider mt-0 mb-0"></div>
              <li>
                <a onClick={logoutUser}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
