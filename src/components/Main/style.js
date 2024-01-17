import styled from "styled-components";

export const Header = styled.header`
  .loading {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 7px solid red;
    border-top-color: black;
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: load;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    @keyframes load {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  }
  .loading-add {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 7px solid yellow;
    border-top-color: black;
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: load;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    @keyframes load {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  }
  .loading-del {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 7px solid black;
    border-top-color: red;
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: load;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    @keyframes load {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  }
  .loading-edit {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 7px solid black;
    border-top-color: red;
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-name: load;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    @keyframes load {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  }
  .none {
    display: none;
  }
  .add-none {
    display: none;
  }
  .del-none {
    display: none;
  }
  .edit-none {
    display: none;
  }
`;
