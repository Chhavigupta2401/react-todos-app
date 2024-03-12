import React, { useState } from 'react'
import '../new.css';
import { Button, Col, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { GiNotebook } from 'react-icons/gi';
import Bubbles from './Bubbles';
export default function NewTodo() {
    const [input, setinput] = useState({
        list: "",

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
            seteditClick(false)
            setinput({ list: "" })
        } else {
            settableData([...tableData, input]);
            setinput({ list: "" });
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
            list: tempdata.list

        });
        seteditClick(true);
        seteditindex(index);
    };
    return (
        <>
     <Bubbles />
            <div className="container">


                <Row
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "3rem",
                        margin: "65px",
                        fontFamily: "cursive",
                        fontWeight: "bold",
                        marginTop: "106px"
                    }}
                >
                    T
                    <img className="imgg img-fluid " src="image/711nWA8QRtL.jpg" alt="" />

                    D   <img className="imgg img-fluid " src="image/3883846a603e25ddf89f7554a6100c6d.jpg" alt="" /> LIST
                    <GiNotebook />
                </Row>
                <hr />

                <Row>
                    <Col md={{ span: 5, offset: 4 }}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Add item . . . "
                                type="text"
                                name="list"
                                size="lg"
                                value={input.list}
                                onChange={handleOnchange}
                            />
                            <div className='rd' onClick={handleSubmit}>
                                <div className="btn btn-2">
                                    {editClick ? "Edit" : "add"}</div>
                            </div>
                        </InputGroup>

                    </Col>
                </Row>

                <div className="showItems">
                    {
                        tableData.map((item, ind) => {
                            return (
                                <div className="eachItem">
                                    <h4>{item.list}</h4>
                                    <div className="sen d-flex justify-content-between">
                                        <i class="fa-solid fa-trash" onClick={() => {
                                            handleDelete(ind)
                                        }}></i>
                                        <i class="fa-solid fa-pen-to-square" onClick={() => {
                                            handeledit(ind)
                                        }}></i>
                                    </div>

                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
