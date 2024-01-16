import React, { useEffect, useRef, useState } from "react";
import { Header } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "../Actions/Action";
import {
  addOneUser,
  allUserGet,
  deleteOneUser,
  editOneUser,
} from "../Redux/Type";

function Main() {
  useEffect(() => {
    dispatch(allUserGet());
  }, []);

  const name = useRef(null);

  const surname = useRef(null);

  function getUserData(event) {
    event.preventDefault();
    const newUser = {
      name: name.current.value,
      surname: surname.current.value,
    };
    dispatch(addOneUser(newUser));
    name.current.value = "";
    surname.current.value = "";
  }

  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const data = useSelector((state) => state.counter.users);

  const increment = () => dispatch(plus());

  const decrement = () => dispatch(minus());

  const [userEdit, setUserEdit] = useState({
    id: 1,
    name: "",
    surname: "",
  });

  function editedUser(event) {
    event.preventDefault();
    if (userEdit.name == "" || userEdit.surname == "") {
      alert("Ma'lumotlar to'ldirilmagan!");
    } else {
      const newEditedUser = {
        id: userEdit.id,
        name: userEdit.name.trim(),
        surname: userEdit.surname.trim(),
      };
      dispatch(editOneUser({ id: newEditedUser.id, data: newEditedUser }));
    }
    setUserEdit({ name: "", surname: "", id: null });
  }

  return (
    <>
      <Header>
        <div className="container">
          <h1>{count}</h1>
          <button onClick={increment} className="btn btn-success">
            +
          </button>
          <button onClick={decrement} className="btn btn-primary">
            -
          </button>
          <form className="form" onSubmit={(event) => getUserData(event)}>
            <input required className="form-control" type="text" ref={name} />
            <input
              required
              className="form-control"
              type="text"
              ref={surname}
            />
            <button className="btn btn-info" type="submit">
              Submit
            </button>
          </form>
          <form className="form" onSubmit={(event) => editedUser(event)}>
            <input
              required
              className="form-control"
              type="text"
              value={userEdit.name}
              onChange={(event) =>
                setUserEdit((prev) => ({
                  ...prev,
                  name: event.target.value,
                }))
              }
            />
            <input
              required
              className="form-control"
              type="text"
              value={userEdit.surname}
              onChange={(event) =>
                setUserEdit((prev) => ({
                  ...prev,
                  surname: event.target.value,
                }))
              }
            />
            <button className="btn btn-info" type="submit">
              Submit
            </button>
          </form>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">SURNAME</th>
                <th scope="col">DELETE</th>
                <th scope="col">EDIT</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, id) => (
                <tr key={id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>
                    <button
                      onClick={() => {
                        const coniform = window.confirm(
                          "Do you want to delete"
                        );
                        if (coniform) {
                          dispatch(deleteOneUser(item.id));
                        }
                      }}
                      className="btn btn-danger"
                    >
                      DELETE
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        setUserEdit({
                          id: item.id,
                          name: item.name,
                          surname: item.surname,
                        })
                      }
                      className="btn btn-warning"
                    >
                      EDIT
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Header>
    </>
  );
}

export default Main;
