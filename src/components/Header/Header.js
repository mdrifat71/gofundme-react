import React, { useState, useEffect } from "react";

/* material ui */
import { Grid } from "@material-ui/core";

/* styled component */
import {
  HeaderContainerDesktop,
  HeaderContainerMobile,
  HeaderWraper,
  LogoContainer,
} from "./HeaderItem";

/* Base styling */
import { Container, FixedOverlay } from "../../style";
import { MenuItem, MobileMenu, SearchBox, Logo } from "./UtilComponent";

/** icons */
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

/**Logo */
// import Logo from "../../logo.png";
import { useBaseLayer } from "../../utilities";

function Header() {
  /**
   * Navigation menu state
   */
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
          heading: "How it works",
        },
        {
          text: "How GoFundMe works",
          to: "/works",
        },
        {
          text: "What is crowdfunding",
          to: "/crowdfunding",
        },
        {
          text: "The Donate Button",
          to: "/donate",
        },
        {
          heading: "Plan your fundraiser",
        },
        {
          text: "Team fundraising",
          to: "/team-fundraising",
        },
        {
          text: "Fundraising tips",
          to: "/fundrising-tips",
        },
        {
          text: "Fundraising ideas",
          to: "/fundrising-ideas",
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
   * Navigation bar sticky or not
   */

  const [sticky, setSticky] = useState(false);

  /**
   * search box state
   */
  const [searchBox, setSearchBox] = useState({
    isOpen: false,
    value: "",
  });

  const [mobileMenu, setMobileMenu] = useState(false);
  const [state, dispatch] = useBaseLayer();

  /**
   *
   * @param {Object key, REF = [menu]~ state variable} key
   * fired whenever menu item clicked or blur
   */
  const dropDownHandler = (key) => {
    setMenu((prev) => {
      let state = {};
      for (let menu in prev) {
        state[menu] = {
          ...prev[menu],
          isDropdownOpen: key === menu ? !prev[key].isDropdownOpen : false,
        };
      }
      return state;
    });
  };

  /**
   * searchbox onChange Handler
   */
  const searchBoxHandler = (e) => {
    setSearchBox((prev) => {
      return {
        ...prev,
        value: e.target.value,
      };
    });
  };

  /**
   * Search icon click handler
   */

  const searchClickHandler = () => {
    setSearchBox((prev) => {
      return {
        ...prev,
        isOpen: !prev.isOpen,
      };
    });
  };

  /**
   * Search clear icon click handler
   */
  const searchClearHandler = () => {
    setSearchBox((prev) => {
      return {
        ...prev,
        value: "",
      };
    });
  };

  /**
   * Mobile menu toggle
   */
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  /**
   * Effect
   */

  useEffect(() => {
    //this data will come from server
    let category = [
      {
        text: "Medical",
        to: "/start/medical-fundraising",
      },
      {
        text: "Emergency",
        to: "/start/emergency-fundraising",
      },
      {
        text: "Memorial",
        to: "/start/memorial-fundraising",
      },
      {
        text: "Education",
        to: "/start/education-fundraising",
      },
      {
        text: "Nonprofit",
        to: "/start/nonprofit-fundraising",
      },
      {
        type: "all",
        text: "See all",
        to: "/start",
      },
    ];

    // set data to localstorage
    window.localStorage.setItem(
      "fundraisingCategory",
      JSON.stringify(category)
    );

    setMenu((prev) => {
      return {
        ...prev,
        fundRaiseFor: {
          ...prev.fundRaiseFor,
          dropDown: category,
        },
      };
    });
  }, []);

  useEffect(() => {
    let scrollHandler = (e) => {
      if (window.scrollY > 2) setSticky(true);
      else setSticky(false);
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <HeaderWraper id="header" sticky={sticky}>
        <Container>
          <HeaderContainerDesktop>
            {/* header colunmn -1 */}
            <Grid xs={4} container item style={{ alignItems: "center" }}>
              {searchBox.isOpen && (
                <SearchBox
                  closeHandler={searchClickHandler}
                  inputChangeHandler={searchBoxHandler}
                  inputValue={searchBox.value}
                  searchClearHandler={searchClearHandler}
                />
              )}
              <MenuItem
                divider="true"
                logo={<BsSearch />}
                sticky={sticky}
                clickHandler={searchClickHandler}
              >
                Search
              </MenuItem>

              <MenuItem
                divider="true"
                dropDown={menu["discover"].dropDown}
                isDropdownOpen={menu.discover.isDropdownOpen}
                dropDownHandler={() => {
                  dropDownHandler("discover");
                }}
                sticky={sticky}
              >
                Discover
              </MenuItem>
              <MenuItem
                dropDown={menu["fundRaiseFor"].dropDown}
                isDropdownOpen={menu.fundRaiseFor.isDropdownOpen}
                dropDownHandler={() => {
                  dropDownHandler("fundRaiseFor");
                }}
                sticky={sticky}
              >
                Fundraise for
              </MenuItem>
            </Grid>
            {/* header colunmn -2 Logo */}
            <Grid xs={4} container item style={{ alignItems: "center" }}>
              <LogoContainer sticky={sticky}>
                {/* <img
                  src={Logo}
                  alt="logo"
                  style={{
                    width: "138px",
                    height: "auto",
                    objectFit: "containe",
                  }}
                /> */}
                <Logo className="logo" />
              </LogoContainer>
            </Grid>
            {/* header colunmn -3 */}
            <Grid xs={4} container item style={{ alignItems: "center" }}>
              <MenuItem
                divider="true"
                dropDown={menu["howItWorks"].dropDown}
                isDropdownOpen={menu.howItWorks.isDropdownOpen}
                dropDownHandler={() => {
                  dropDownHandler("howItWorks");
                }}
                sticky={sticky}
              >
                How it works
              </MenuItem>
              {state.user.name ? (
                <MenuItem
                  dropDown={menu.user.dropDown}
                  isDropdownOpen={menu.user.isDropdownOpen}
                  logo={<FaUserAlt />}
                  sticky={sticky}
                  dropDownHandler={() => {
                    dropDownHandler("user");
                  }}
                >
                  <strong>{state.user.name}</strong>
                </MenuItem>
              ) : (
                <MenuItem link="true" to="/login" sticky={sticky}>
                  Sign in
                </MenuItem>
              )}
              <MenuItem type="button" link="true" to="/login" sticky={sticky}>
                Start a GoFundMe
              </MenuItem>
            </Grid>
          </HeaderContainerDesktop>
          <HeaderContainerMobile>
            {mobileMenu && (
              <MobileMenu
                mobileMenuToggle={mobileMenuToggle}
                sticky={sticky}
              ></MobileMenu>
            )}

            {/* header colunmn -1 */}
            <Grid xs={4} container item style={{ alignItems: "center" }}>
              {searchBox.isOpen && (
                <SearchBox
                  closeHandler={searchClickHandler}
                  inputChangeHandler={searchBoxHandler}
                  searchClearHandler={searchClearHandler}
                  inputValue={searchBox.value}
                />
              )}
              <MenuItem sticky={sticky}>
                <BsSearch
                  style={{ fontSize: "1.8rem" }}
                  onClick={searchClickHandler}
                />
              </MenuItem>
            </Grid>
            {/* header colunmn -2 Logo */}
            <Grid xs={4} container item style={{ alignItems: "center" }}>
              <LogoContainer sticky={sticky}>
                <Logo className="logo"></Logo>
              </LogoContainer>
            </Grid>
            {/* header colunmn -3 */}
            <Grid xs={4} item container style={{ justifyContent: "flex-end" }}>
              <MenuItem sticky={sticky}>
                <AiOutlineMenu
                  style={{ fontSize: "2.2rem" }}
                  onClick={mobileMenuToggle}
                />
              </MenuItem>
            </Grid>
          </HeaderContainerMobile>
        </Container>
      </HeaderWraper>
    </>
  );
}

export default Header;
