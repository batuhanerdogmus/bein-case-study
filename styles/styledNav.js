import styled from "styled-components";

export const StyledNav = styled.div`
  height: 4em;
  width: 100%;
  background-image: linear-gradient(to right, #001e42 0, #a71d8e);
  box-shadow: 0 2px 30px 6px rgb(0 0 0 / 50%);
  padding: 0 5%;

  z-index: 100;
  position: relative;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    display: flex;
    .nav-link {
      color: white;
      font-size: 1.2 em;
      margin: 0 1em;
      cursor: pointer;
      font-weight: 600;
    }
  }
  .nav-buttons {
    display: flex;
    .nav-button {
      background: transparent;
      border: 1px solid;
    }
    div {
      margin-right: 1em;
      text-align: center;
      color: white;
      font-weight: 600;
      text-transform: capitalize;
      min-width: 7em;
      width: 50%;
      padding: 0.5em;
      border-radius: 5px;
      border-width: 2px;
      background: #25265a;
      cursor: pointer;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    .nav-buttons,
    .nav-link {
      display: none;
    }
  }
`;
