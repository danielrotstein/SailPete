import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
// import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

// darkMode
type Theme = "dark" | "light";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow-md";

  // darkMode
  const [theme, setTheme] = useState<Theme>("dark");

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    // to activate darkMode
    // change this to "dark" -> if (theme === "dark") {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 `}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <h1 className="cursor-default font-pacifico text-4xl">SailPete</h1>
            {/* <img alt="logo" src={Logo} /> */}

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-6 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>

                <div className={`${flexBetween} gap-6`}>
                  <button type="button" onClick={handleThemeSwitch}>
                    {theme === "dark" ? (
                      <SunIcon className="h-6 w-6 text-black" />
                    ) : (
                      <MoonIcon className="h-6 w-6 text-black" />
                    )}
                  </button>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Request a Quote!
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className="fixed right-0 bottom-0 z-30 h-full w-[300px]
         bg-primary-100 drop-shadow-xl"
        >
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-black" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <button type="button" onClick={handleThemeSwitch}>
              {theme === "dark" ? (
                <SunIcon className="h-6 w-6 text-black" />
              ) : (
                <MoonIcon className="h-6 w-6 text-black" />
              )}
            </button>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
