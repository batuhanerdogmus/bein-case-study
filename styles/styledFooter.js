import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 2em 1em;

  .footer-left-colmn,
  .footer-right-colmn {
    display: flex;
    flex-wrap: wrap;

    ul {
      text-transform: uppercase;
      list-style: none;
    }
  }
  .footer-right-colmn {
    flex: 0 1 20%;
    justify-content: flex-end;
    align-content: center;
  }

  .footer-left-colmn {
    flex: 0 1 80%;
    ul li:first-child {
      font-size: 1.1em;
      font-weight: 600;
      margin-bottom: 0.4em;
    }
    ul li {
      line-height: 1.63;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .footer-right-colmn {
      justify-content: center;

      img {
        padding: 0.3em !important;
      }
    }
  }
`;
