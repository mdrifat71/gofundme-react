import react, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

/** Header Item */
import {
  MenuItemButton,
  DropdownContainer,
  SearchBoxContainer,
  SearchBoxClose,
  SearchBoxInput,
  SearchBoxHeading,
  SearchBoxInputContainer,
  SearchBoxWraper,
  SearchBoxInputIcon,
  MobileMenuWraper,
  MobileMenuItemContainer,
  MobileMenuClose,
  MobileMenuItemButton,
  MobileDropdownIndicator,
  MobileMenuDropdown,
  MobileMenuItemWraper,
} from "./HeaderItem";

/** icons */
import { IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";
import { CgCloseR } from "react-icons/cg";
/** Utilities */
import { useBaseLayer } from "../../utilities";

/**Base Style */
import { FixedOverlay, Container, GoFundMeButton } from "../../style";

/**
 *
 * @param {button text} children
 * @param {icons} logo
 *
 */
export const MenuItem = ({
  children,
  logo,
  dropDown = false,
  marginLeft,
  link,
  to,
  divider = false,
  type,
  sticky = false,
  isDropdownOpen,
  dropDownHandler,
  clickHandler,
}) => {
  const [state, dispatch] = useBaseLayer();
  return (
    <>
      <MenuItemButton
        type={type}
        sticky={sticky}
        isDropdownOpen={isDropdownOpen}
        onClick={() => {
          if (dropDownHandler) {
            dispatch({
              type: "CLEAR_TIMEOUT",
            });
            dropDownHandler();
          } else if (clickHandler) {
            clickHandler();
          }
        }}
        onBlur={() => {
          if (isDropdownOpen) {
            dropDownHandler();
          }
        }}
      >
        {logo && <span style={{ marginRight: ".8rem" }}>{logo}</span>}

        <span>{link ? <Link to={to}>{children}</Link> : children}</span>

        {dropDown && (
          <span className="dropdown-indicator">
            <IoIosArrowDown />
          </span>
        )}

        {dropDown && (
          <DropdownContent itemObj={dropDown} isDropdownOpen={isDropdownOpen} />
        )}
      </MenuItemButton>

      {/* menu item dividor */}
      {divider && (
        <span style={{ color: "#ddd", fontSize: "1.8rem", fontWeight: "300" }}>
          |
        </span>
      )}
    </>
  );
};

/**
 * Dropdown for desktop
 */

export const DropdownContent = ({ itemObj, isDropdownOpen }) => {
  return (
    <DropdownContainer isOpen={isDropdownOpen} className="dropdown-container">
      {itemObj.map((item, i) => {
        return (
          <react.Fragment key={i}>
            <>
              {item.heading && <h4>{item.heading}</h4>}
              {item.type === "all" ? (
                <Link
                  to={item.to}
                  style={{
                    textAlign: "center",
                    color: "#02a95c",
                    borderTop: "1px solid #ddd",
                    marginTop: "1rem",
                  }}
                >
                  See all
                </Link>
              ) : (
                item.text && (
                  <Link to={item.to} key={i}>
                    {item.text}
                  </Link>
                )
              )}
            </>
          </react.Fragment>
        );
      })}
    </DropdownContainer>
  );
};

/**
 * Search Box
 */

export const SearchBox = ({
  closeHandler,
  inputChangeHandler,
  inputValue,
  searchClearHandler,
}) => {
  return (
    <FixedOverlay
      onClick={(e) => {
        if (e.target.classList.contains("overlay")) closeHandler();
      }}
      className="overlay"
    >
      <SearchBoxWraper>
        <Container>
          <SearchBoxContainer>
            <SearchBoxClose>
              <GrClose onClick={closeHandler} />
            </SearchBoxClose>
            <SearchBoxHeading>
              <h4>
                <BsSearch style={{ marginRight: ".7rem" }} />
                SEARCH GOFUNDME
              </h4>
            </SearchBoxHeading>
            <SearchBoxInputContainer>
              <SearchBoxInput
                type="text"
                placeholder="Find fundraisers by name or location"
                onChange={inputChangeHandler}
                value={inputValue}
              />
              {inputValue && (
                <SearchBoxInputIcon onClick={searchClearHandler}>
                  <CgCloseR />
                </SearchBoxInputIcon>
              )}
            </SearchBoxInputContainer>
          </SearchBoxContainer>
        </Container>
      </SearchBoxWraper>
    </FixedOverlay>
  );
};

/**
 *
 * mobile navigation
 * @param {function} mobileMenuToggle
 */
export const MobileMenu = ({ mobileMenuToggle }) => {
  const [menu, setMenu] = useState({
    discover: {
      isDropdownOpen: false,
      dropDown: [
        {
          text: "FundRaisers",
          to: "/fundraisers",
        },
        {
          text: "Success Stories",
          to: "/success",
        },
      ],
    },
    howItWorks: {
      isDropdownOpen: false,
      dropDown: [
        {
          text: "FundRaisers",
          to: "/fundraisers",
        },
        {
          text: "Success Stories",
          to: "/success",
        },
      ],
    },
    fundRaiseFor: {
      isDropdownOpen: false,
      dropDown: [],
    },
    user: {
      isDropdownOpen: false,
      dropDown: [
        {
          text: "Profile",
          to: "/profile",
        },
        {
          text: "Sign out",
          to: "/signout",
        },
      ],
    },
  });

  /**
   * Effect
   */

  useEffect(() => {
    let category = window.localStorage.getItem("fundraisingCategory");
    setMenu((prev) => {
      return {
        ...prev,
        fundRaiseFor: {
          ...prev.fundRaiseFor,
          dropDown: JSON.parse(category),
        },
      };
    });
  }, []);
  return (
    <>
      <FixedOverlay>
        <MobileMenuWraper>
          <MobileMenuItemContainer>
            <MobileMenuClose>
              <GrClose onClick={mobileMenuToggle} />
            </MobileMenuClose>
            <MobileMenuItem dropdownContents={menu.discover.dropDown}>
              Discover
            </MobileMenuItem>
            <MobileMenuItem dropdownContents={menu.fundRaiseFor.dropDown}>
              Fund raise for
            </MobileMenuItem>
            <MobileMenuItem dropdownContents={menu.howItWorks.dropDown}>
              How it works
            </MobileMenuItem>
            <MobileMenuItem link={true} to="/login">
              Sign in
            </MobileMenuItem>
          </MobileMenuItemContainer>
          <div style={{ padding: "3rem 0", textAlign: "center" }}>
            <GoFundMeButton>Start a GoFundMe</GoFundMeButton>
          </div>
        </MobileMenuWraper>
      </FixedOverlay>
    </>
  );
};

/**
 * Mobile menu Item
 */

export const MobileMenuItem = ({
  children,
  link = false,
  to,
  dropdownContents,
}) => {
  const mobileDropdown = useRef(null);

  const clickHandler = (e) => {
    const targetDropdown = mobileDropdown.current;
    const parent = targetDropdown.parentNode.parentNode.childNodes;
    parent.forEach((child) => {
      let dropDownContent = child.querySelector(".mobile-dropdown");
      if (dropDownContent !== null && dropDownContent !== targetDropdown)
        dropDownContent.style.height = 0;
      else if (dropDownContent === targetDropdown) {
        if (
          targetDropdown.style.height === "0px" ||
          targetDropdown.style.height == ""
        ) {
          {
            targetDropdown.style.height = targetDropdown.scrollHeight + "px";
          }
        } else {
          targetDropdown.style.height = 0;
        }
      }
    });
  };
  return (
    <>
      <MobileMenuItemWraper>
        <MobileMenuItemButton
          onClick={() => {
            if (dropdownContents) clickHandler();
          }}
        >
          {link ? <Link to={to}>{children}</Link> : <span>{children}</span>}
          {!link && (
            <MobileDropdownIndicator>
              <IoIosArrowDown />
            </MobileDropdownIndicator>
          )}
        </MobileMenuItemButton>
        {dropdownContents && (
          <MobileMenuDropdown ref={mobileDropdown} className="mobile-dropdown">
            {dropdownContents.map((item, i) => {
              return (
                <>
                  {item.type === "all" ? (
                    <Link
                      to={item.to}
                      style={{ textAlign: "center", color: "#02a95c" }}
                    >
                      See all
                    </Link>
                  ) : (
                    <Link to={item.to} key={i}>
                      {item.text}
                    </Link>
                  )}
                </>
              );
            })}
          </MobileMenuDropdown>
        )}
      </MobileMenuItemWraper>
    </>
  );
};

export const Logo = () => {
  return (
    <>
      <svg viewBox="0 0 3148.92 920" id="svg-gfm-logo-solid" className="logo">
        <g fill="none" strokeMiterlimit="10">
          <path
            d="M3089.71,416c4-9.11,7.49-17.47,11.28-25.7,1.63-3.55,7.41-5.29,10.89-3.83,2,.82,1.39,2.46,1.39,3.83,0,16,0,32,.09,47.95,0,3-.94,4-4,4s-4-1.05-4-4.05c.12-11.32.07-22.65,0-34,0-1.75.39-3.58-.74-5.85-3.55,8.59-8.11,16.24-10.83,24.71-.65,2-1.24,3.65-3.79,3.86s-3.8-.92-4.77-3.25c-2.79-6.71-5.82-13.33-8.84-19.95-.58-1.28-.84-2.89-2.77-3.63-1.06,2-.56,4.18-.57,6.22-.06,10.48-.11,21,0,31.46,0,3.08-.66,4.48-4.12,4.47s-3.59-1.9-3.59-4.46c.05-15.32,0-30.64.08-45.95,0-2-1.32-5.41,2.4-5.41,3.28,0,7.4-2.09,9.53,2.83,3.47,8,7.21,15.93,10.85,23.87C3088.59,413.9,3089,414.61,3089.71,416Z"
            fill="currentColor"
          ></path>
          <path
            d="M3032.23,418c0-6.15-.32-12.32.11-18.44.35-5-1.56-6.5-6.23-5.95-2.62.31-5.32-.07-8,.09-2.81.16-4.21-.49-4.23-3.78,0-3.49,1.76-3.65,4.37-3.63,12.14.07,24.28.09,36.42,0,2.91,0,4.22.8,4.18,4s-1.64,3.54-4.14,3.47c-3.16-.1-6.34.2-9.47-.08-3.87-.36-5.18.93-5.1,4.95.24,12.8,0,25.61.12,38.41,0,3.1.06,5.35-4.29,5.27s-3.77-2.63-3.77-5.28Q3032.25,427.49,3032.23,418Z"
            fill="currentColor"
          ></path>
          <path
            d="M2321,539.12c8.54-7.44,16.29-14.2,25.06-19.62,25.18-15.57,52.67-20.37,81.84-17.84a122.61,122.61,0,0,1,39.47,9.85c18,8,31.38,21,42.31,37,1.82,2.65,2.75,3.17,4.79.12,18.67-27.91,45.38-43.2,78.19-47.22,32.5-4,62.74,2.37,87.81,25,12.64,11.43,19.71,26.15,22.7,42.89a194,194,0,0,1,2.77,33.75c.13,57.32,0,114.65.18,172,0,4.89-1.36,6-6.11,6q-45.24-.33-90.49,0c-4.38,0-5.58-1.06-5.56-5.51q.26-67.74.06-135.48a140.53,140.53,0,0,0-3.4-32.17c-8.72-37-50.71-37.23-69.43-19.72-11.51,10.77-15.33,24.51-17,39.35-1.44,12.62-.88,25.28-.9,37.93q-.09,55.25.05,110.48c0,3.81-.84,5.14-4.93,5.11q-46-.25-92,0c-4.29,0-5.19-1.33-5.18-5.37.14-45.66.08-91.32.09-137,0-9.33-.32-18.63-2.12-27.82-3.34-17.11-13.57-27.79-30.37-32-19.81-4.93-39.38,2.53-49.78,18.81-6.25,9.77-7.6,21-7.68,32.12q-.53,72.5-.21,145c0,5.18-1.4,6.29-6.36,6.25q-45.24-.36-90.49,0c-4.22,0-5.23-1.19-5.22-5.3q.16-132.74,0-265.47c0-4.34,1.39-5.16,5.38-5.14q45.75.24,91.49,0c4.31,0,5.29,1.35,5.17,5.38C2320.83,519.62,2321,528.79,2321,539.12Z"
            fill="currentColor"
          ></path>
          <path
            d="M2014.39,753c-6.27,6.09-12.32,12-19.15,16.93-15.55,11.29-33.15,17-52.14,19.16-29.4,3.33-57.42-1.37-83.33-15.5-41.18-22.45-67.92-56.2-75.28-103.19-6-38.51-1.58-75.78,20.64-108.91C1829,526,1862.21,504.28,1905,498c31.48-4.64,61.12.38,88.54,16.89,7.29,4.38,13.46,10.26,20.15,16,1.24-2,.71-4,.71-5.83q0-92.22-.09-184.45c0-5.07,1.34-6.46,6.42-6.42,30.49.24,61,.18,91.47,0,3.84,0,5.1.9,5.1,5q-.16,218.45,0,436.89c0,3.75-.73,5.13-4.87,5.11q-46.48-.28-93,0c-4,0-5.2-1.26-5.08-5.14C2014.56,768.36,2014.39,760.7,2014.39,753Zm-61.26-48c3.66,0,7.37.38,11-.06,37.2-4.54,62.31-43,51.3-79.13-12.87-42.17-62.82-57.2-97.4-34.89-25.18,16.25-32.21,39.34-28.39,62.91C1894.33,682.87,1921.57,707,1953.13,705Z"
            fill="currentColor"
          ></path>
          <path
            d="m560.47 494.93c36.65-0.06 67.18 4.87 95.22 20 39 21.12 66.53 52 76.37 96.15 15 67.37-17.49 132.39-80.13 162.06-22.24 10.53-45.81 15.46-70.28 17.15-26.1 1.8-51.9 0.36-77.19-6.34-46.31-12.26-81.84-38.65-101.48-83-21.81-49.22-16.31-109.35 24.39-153 25.46-27.3 56.76-42.72 93.06-49.16 14.95-2.58 29.97-3.97 40.04-3.86zm2.77 84a75.28 75.28 0 0 0 -14.9 1.18c-37.41 7.32-65.87 50.33-45.38 90.76 13.82 27.27 42.55 40.83 74.33 35.13 35.93-6.46 59.09-42.12 51.16-77.66-5.62-25.19-32.37-50.67-65.21-49.43z"
            fill="currentColor"
          ></path>
          <path
            d="M1524.25,539.31a131.9,131.9,0,0,1,23.86-22.22c14.73-10.48,31.46-15.38,49.28-17.18,22.76-2.29,45.2-1.43,66.74,7,32.74,12.87,51.9,36.92,58.14,71.48,1.7,9.39,2,18.81,2,28.3q-.06,84.48.09,168.95c0,4.45-1.17,5.51-5.54,5.48q-45.48-.3-91,0c-5.06,0-5.89-1.56-5.88-6.17q.26-69.48,0-138.95a139.39,139.39,0,0,0-2.91-28.69c-3.51-16.21-13.76-26.26-29.46-29.74-20.71-4.6-39.33-.08-53.88,16.4-7,7.93-9.35,17.75-10.61,28-1.46,11.78-.81,23.61-.83,35.41q-.13,59.24.06,118.47c0,4.12-1,5.3-5.23,5.28q-46-.28-92,0c-4.28,0-5.17-1.29-5.16-5.34q.16-132.71,0-265.42c0-4.49,1.23-5.48,5.56-5.45q45.73.29,91.47,0c4,0,5.51.83,5.36,5.15C1524,519.4,1524.25,528.71,1524.25,539.31Z"
            fill="currentColor"
          ></path>
          <path
            d="M1356.18,600.64c0,29,.62,58-.16,87-1,37.47-17.66,66.15-50.9,84.48-20.09,11.07-41.86,16.37-64.49,19.09a320.61,320.61,0,0,1-52.82,1.67c-32.3-1.44-63.8-6.76-91.8-24.47q-40.07-25.33-45-72.69a215.77,215.77,0,0,1-.81-22.43c0-54.16,0-108.33-.12-162.49,0-4.41.91-5.9,5.66-5.86q45.75.35,91.5,0c4.51,0,5.88,1,5.86,5.74-.18,50.83-.08,101.66-.14,152.49,0,8.24.88,16.25,4.19,23.86,5.89,13.55,16.95,20.77,30.77,23.68,12.48,2.62,25.16,2.46,37.4-1.84,16.76-5.9,25.56-18.15,27.86-35.53,1-7.62.95-15.26.95-22.91,0-46.67.06-93.33-.11-140,0-4.42,1.11-5.53,5.51-5.5q45.75.3,91.5,0c4.08,0,5.34.94,5.31,5.19-.19,30.16-.1,60.33-.1,90.5Z"
            fill="currentColor"
          ></path>
          <path
            d="M2974.56,661.27H2874.08c-5.79,0-6.27.59-5.51,6.36.75,5.59,1.11,11.23,2.59,16.73,4.69,17.38,15.11,29.41,32.53,34.78,15.1,4.66,30.34,5.59,45.69,1,11.12-3.3,19.87-10,26.71-19.15,2-2.64,3.95-3.92,7.39-3.91q44,.21,88,0c4.83,0,5.09,1.44,3.73,5.47-15.47,45.76-48.2,72-94.07,83.48-14.91,3.71-30.09,5.06-45.47,5.32-26.64.46-52.88-1.9-77.91-11.4-49.1-18.64-80.2-53.27-89.55-105.42-7.13-39.76-1.94-78,20.07-112.72,16.84-26.58,40.53-45,70.4-54.6,40.42-13,81.58-14,122.37-2.4,50.48,14.3,80.37,49.19,94.09,98.9,4.88,17.65,5.57,35.75,5.33,53.95,0,4-2.36,3.6-4.91,3.6Zm-46.34-55.22q26.47,0,53,0c2.08,0,4.8.59,3.8-3.12-3.71-13.82-9.85-26.11-21.94-34.66s-25.78-9.88-40-9.32c-26,1-45.63,17.58-51.19,43-.8,3.67.18,4.16,3.42,4.14C2892.91,606,2910.57,606.05,2928.22,606.05Z"
            fill="currentColor"
          ></path>
          <path
            d="M835.21,683.17c0-30.65-.08-61.31.09-92,0-4.11-1-5.45-5.21-5.29-9,.32-18,0-27,.15-3.05.06-4-.92-4-4q.15-36.48,0-73c0-3.43,1.21-4.18,4.34-4.12,8.83.18,17.68-.23,26.49.19,4.63.21,5.49-1.4,5.4-5.63-.28-12.16-.41-24.33,0-36.48.79-25.36,5.06-50.08,19.37-71.58,19.05-28.61,45.82-46.77,79.41-54.37,23.54-5.33,46.73-4.26,69.4,4.78,4.27,1.7,5.63,3.82,5.58,8.39-.25,24.15-.11,48.32-.11,72.48,0,6.95,0,7-6,4-10.7-5.4-21.83-8.64-34-7.95-16.81.95-28.23,12.27-29.79,29-1.64,17.62-.82,35.26-1.24,52.88-.09,3.58,1.13,4.47,4.55,4.45,20.5-.15,41,0,61.48-.16,3.83,0,5.16.88,5.13,5q-.28,35.23,0,70.48c0,4.27-1,5.78-5.55,5.72-19.66-.24-39.32-.13-59-.09-7.34,0-6.53-.79-6.53,6.81q0,90.74,0,181.45c0,6.78,0,6.78-6.77,6.78-30.32,0-60.65-.07-91,.09-3.91,0-5.07-1-5-5C835.28,745.16,835.21,714.17,835.21,683.17Z"
            fill="currentColor"
          ></path>
          <path
            d="m3136.1 79.42c-19.53-23.49-65.56-29.28-94.05-15.89-6 2.82-12.26 5.1-17.65 9l-170.92 124c-12.17 10.62-23.19 22.69-24.92 38.37-1.58 14.3 0 26.13 12.51 38.9 28.3 28.82 78.26 29 102.08 14.48 21.88-13.29 166.42-120.11 190-137.52l6.12-6.13c6.99-9.63 19.1-38.42-3.17-65.21z"
            fill="currentColor"
          ></path>
          <path
            d="m2417.1 269.41c12.53-12.77 14.09-24.6 12.51-38.9-1.73-15.68-12.75-27.75-24.92-38.37l-170.92-124c-5.39-3.91-11.64-6.19-17.65-9-28.49-13.39-74.52-7.6-94 15.89-22.27 26.79-10.16 55.57-3.12 65.18l6.12 6.13c23.48 17.44 168.02 124.26 189.92 137.55 23.8 14.49 73.76 14.34 102.06-14.48z"
            fill="currentColor"
          ></path>
          <path
            d="M2630.32,237c36.49,0,67.07-16.61,75.76-47.45a50.2,50.2,0,0,0,1.69-13l.82-111.18c0-.94.07-1.88.07-2.81,0-42.74-34.45-62.6-77.71-62.6-43,0-77.95,23.07-78.3,65.41h0l-.08,112.08a56.94,56.94,0,0,0,1.29,13C2561.29,222.52,2592.68,237,2630.32,237Z"
            fill="currentColor"
          ></path>
          <path
            d="M2855.9,320.61c-58-28.86-134.66-47-234.76-47-167.72,0-280.19,52.93-337.33,129.86h.86l-.24.31,675-.06C2934.82,371.84,2901,343,2855.9,320.61Z"
            fill="currentColor"
          ></path>
          <path
            d="M230.85,749.65c-5,4.13-9.07,7.65-13.29,11-18.3,14.71-39.21,22.59-62.61,24.66-33.35,3-64.7-2.82-93.23-20.75C27.31,743,8.06,711.28,2.14,671.42c-5-33.38-1.71-66,14.15-96.12,22.72-43.1,58.31-69.19,107-76.37,25.52-3.77,50.4-1.59,74.17,9.17,10.63,4.81,19.56,12,27.67,20.22,1.57,1.6,2.91,3.43,4.36,5.16l1.51-.94c0-7.42.17-14.85-.08-22.26-.12-3.75.76-5.21,4.91-5.19q46,.27,92,0c3.43,0,4.56.89,4.56,4.45-.12,90.32.14,180.64-.36,271-.12,20.92-2.56,41.87-12.44,61.05-14.62,28.41-37.45,48.1-66,61.47-22.27,10.44-46,14.82-70.47,16.35-30.38,1.9-60.26-.38-89-10.46C57.64,896.19,29,873.78,10.71,839.18c-3.36-6.36-5.2-13.26-6.59-20.32-.72-3.64-.14-4.8,3.93-4.77,25.49.2,51,.1,76.48.1q14.5,0,29,0c2.07,0,3.79,0,4.73,2.54,6.13,16.42,19.24,23.82,35.55,25.88,16.07,2,31.94.73,46.56-7.37,18.6-10.3,27.81-26.56,29.73-47.34C231.25,775.51,231,763.1,230.85,749.65ZM170.41,706c34.78.9,65.42-27.52,65.44-63.84,0-35.21-27.51-64.76-65.18-64.77-39.91,0-64.75,33.14-64.93,64.47C105.54,675.07,134.29,706.57,170.41,706Z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </>
  );
};
