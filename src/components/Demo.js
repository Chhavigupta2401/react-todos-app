import React, { useState } from "react";

export default function Demo() {
  //states

  const [input, setinput] = useState({
    name: "",
    email: "",
    phone: "",

  });
  const [tableData, settableData] = useState([]);
  const [editindex, seteditindex] = useState("");
  const [editClick, seteditClick] = useState(false);

  const handleOnchange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);

  //submit form
  const handleSubmit = () => {
    if (editClick) {
      const tempdata = tableData;
      Object.assign(tempdata[editindex], input);
      settableData([...tempdata]);
    } else {
      settableData([...tableData, input]);
      setinput({ name: "", email: "", phone: "",  });
    }
  };

  //delete form
  const handleDelete = (index) => {
    const fData = tableData.filter((item, i) => i !== index);
    settableData(fData);
  };

  //UPDATE FORM
  const handeledit = (index) => {
    const tempdata = tableData[index];
    setinput({
      name: tempdata.name,
      email: tempdata.email,
      pass: tempdata.pass,

    });
    seteditClick(true);
    seteditindex(index);
  };



  return (
    <>
      <div className="container mt-5 text-center">
        <h2>Todos List</h2>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleOnchange}
        />
        <input
          type="text"
          name="email"
          value={input.email}
          onChange={handleOnchange}
        />
        <input
          type="text"
          name="phone"
          value={input.phone}
          onChange={handleOnchange}
        />

        <div className="btn btn-info" onClick={handleSubmit}>
          {editClick ? "Edit" : "add"}
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">email</th>
              <th scope="col"> phone</th>

            </tr>
          </thead>
          <tbody>
            {tableData.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>

                  <td>
                    <div
                      className="btn btn-primary"
                      onClick={() => {
                        handeledit(i);
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(i);
                      }}
                    >
                      Delete
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
