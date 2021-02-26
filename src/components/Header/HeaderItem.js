import styled from "styled-components";
import { Grid } from "@material-ui/core";

/**
 * Wrap the whole header
 */
export const HeaderWraper = styled.header`
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: ${(props) => (props.sticky ? "#fff" : "transparent")};
`;

/**
 * Wrap desktop header element
 */
export const HeaderContainerDesktop = styled.div`
  height: 9.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  align-items: center;
  font-family: "Lato", sans-serif;
  a,
  button {
    font-family: inherit;
  }
  @media only screen and (max-width: 1068px) {
    display: none;
  }
`;

export const HeaderContainerMobile = styled.div`
  height: 6rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
  align-items: center;
  box-shadow: ${(props) =>
    !props.sticky && "0 0.125rem 0.1875rem -0.125rem rgb(0 0 0 / 20%)"};
  @media only screen and (max-width: 1068px) {
    display: flex;
  }
`;

/**
 * UtilComponent @menuItem
 * Menu Item
 */

/** Menu Item type buttom */
export const MenuItemButton = styled.button`
  padding: ${(props) =>
    props.type === "button" ? ".8rem 1.8rem" : "2rem 1.5rem"};

  border: ${(props) => (props.type === "button" ? "1px solid #fff" : "0")};

  background: ${(props) =>
    props.type === "button"
      ? props.sticky
        ? "#02a95c"
        : "rgba(0,0,0,0.5)"
      : "transparent"};

  outline: 0;
  cursor: pointer;
  position: relative;
  display: flex;
  font-size: 1.4rem;
  color: ${(props) => (props.sticky ? "#333" : "#fff")};
  border-radius: 4px;

  a {
    text-decoration: none;
    color: ${(props) =>
      props.type === "button" ? "#fff" : props.sticky ? "#333" : "#fff"};

    &:hover {
      color: ${(props) =>
        props.type === "button" ? "#fff" : props.sticky ? "#999" : "#ddd"};
    }
  }
  span {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .dropdown-indicator {
    font-size: 1.8rem;
    margin-left: 0.4rem;
    transition: 0.3s;

    transform: ${(props) => props.isDropdownOpen && "rotate(180deg)"};
  }

  /**hover */
  &:hover {
    color: ${(props) => (props.sticky ? "#999" : "#ddd")};

    .dropdown-indicator {
      transform: rotate(180deg);
    }
  }
`;

/**
 * UtilComponent
 * Menu Item
 */
/** Logo container */

export const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

  /** logo */
  .logo {
    height: 4.2rem;
    width: auto;
    color: ${(props) => (props.sticky ? "#02a95c" : "#fff")};
  }
`;

/**
 * Dropdown container
 */
export const DropdownContainer = styled.div`
  font-family: inherit;
  position: absolute;
  top: 5.5rem;
  left: 0;
  min-width: 20rem;
  box-shadow: 0 0.3125rem 1rem -0.1875rem rgb(0 0 0 / 20%);
  background: #fff;
  color: #333;
  border-radius: 2px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  z-index: 102;
  padding-bottom: 1rem;
  a {
    color: #333;
    text-decoration: none;
    padding: 1rem 0;
    padding-left: 1.5rem;
    text-align: left;

    &:hover {
      color: #999;
    }
  }

  h4 {
    padding: 1.2rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    border-bottom: 1px solid #eee;
    text-align: left;
    font-weight: 900;
    cursor: auto;

    margin-top: 1rem;
    :nth-child(1) {
      margin-top: 0;
    }
  }
`;

/**
 * UtilComponent @searchBox
 * Search box
 */

export const SearchBoxWraper = styled.div`
  width: 100%;
  background: #fff;
  z-index: 500;
`;
export const SearchBoxContainer = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem 5rem;
  padding-left: 6rem;
  padding-right: 8.8rem;
  padding-top: 3.5rem;
  position: relative;
  @media only screen and (max-width: 1068px) {
    padding: 1rem;
  }
`;

/**
 * Close SearchBox
 */
export const SearchBoxClose = styled.div`
  display: inline;

  font-size: 1.8rem;
  color: #888;
  position: absolute;
  top: 1rem;
  right: 8.8rem;
  svg {
    cursor: pointer;
  }

  @media only screen and (max-width: 1068px) {
    right: 2rem;
  }
`;

/**
 *  Search Box heading wraper
 */

export const SearchBoxHeading = styled.div`
  padding: 0.8rem 1rem;
  padding-bottom: 0.4rem;
  text-align: left;
  h4 {
    display: flex;
    align-items: center;
    font-weight: 900;
    color: #444;
  }

  letter-spacing: 0.002em;
  font-size: 1.3rem;
  font-family: "Lato", sans-serif;
`;

export const SearchBoxInputContainer = styled.div`
  text-align: left;
  padding: 0 1rem;
  position: relative;
`;
export const SearchBoxInput = styled.input`
  height: 44px;
  border: 0;
  outline: 0;
  font-size: 2.2rem;
  line-height: 2rem;
  width: 100%;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  ::placeholder {
    font-weight: 300;
  }

  @media only screen and (max-width: 1068px) {
    font-size: 1.4rem;
  }
`;

export const SearchBoxInputIcon = styled.div`
  position: absolute;
  top: 15px;
  font-size: 2rem;
  right: 0;
  @media only screen and (max-width: 1068px) {
    right: 1rem;
  }
`;

/**
 * Mobile menu wraper
 */

export const MobileMenuWraper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background-color: #fff;
  padding: 1.2rem;
`;

export const MobileMenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

export const MobileMenuItemWraper = styled.div`
  width: 100%;
`;
export const MobileMenuClose = styled.div`
  padding: 0.4rem;
  padding-bottom: 1.5rem;
  color: #666;
  display: flex;
  justify-content: flex-end;
  font-size: 1.8rem;

  path {
    stroke: #666;
  }
`;

export const MobileMenuItemButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 0;
  border-bottom: 1px solid #ddd;

  padding: 1.4rem 0;
  background: transparent;
  font-size: 1.6rem;
  font-family: "Lato", sans-serif;
  color: #666;

  :focus {
    outline-color: #e59700;
  }
  a {
    text-decoration: none;
    color: #666;
    width: 100%;
    display: block;
    text-align: left;
  }
  a.see-all {
    text-align: center;
  }
  svg {
    font-size: 2.2rem;
  }
`;

export const MobileDropdownIndicator = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 0.5rem;
`;

export const MobileMenuDropdown = styled.div`
  width: 100%;
  height: 0;

  overflow: hidden;
  transition: 0.2s ease-in;

  ::before {
    content: "";
    display: block;
    padding: 0.5rem;
  }
  a {
    text-decoration: none;
    color: #666;
    padding: 1.5rem;
    display: block;
  }
`;
