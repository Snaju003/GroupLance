import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Layout from '../Layout/Layout';
import { Col, Row, Container, Form } from "react-bootstrap";

// TODO remove, this demo shouldn't need to reset the theme.

export default function SignUpBuis() {
    return (
        <Layout>
            <section className="create" >
                <Container >
                    <Row className="align-items-center" >
                        <h1 className="text-center my-4" style={{ color: "#ffff", paddingBottom: "2vh" }}>
                            Sign Up
                        </h1>

                        <Col className="form" size={12} md={6} style={{ display: "flex", gap: "150px", marginLeft: "100px" }}>
                            <form>
                                <Col className="column" style={{ width: "31.25vw" }}>
                                    <Row size={12} sm={6} className="px-1">
                                        <input type="text" placeholder="Company Name" onChange={onchange}
                                            name="name" required />
                                    </Row>
                                    <Row size={12} sm={6} className="px-1" >
                                        <input type="text" placeholder="Email Address" onChange={onchange}
                                            name="email" required />
                                    </Row>
                                    <Row size={12} sm={6} className="px-1">
                                        <input type="text" placeholder="Password" onChange={onchange}
                                            name="password" required />
                                    </Row>
                                    <Row size={12} sm={6} className="px-1">
                                        <input type="text" placeholder="Address" onChange={onchange}
                                            name="address" required />
                                    </Row>
                                    <Row size={12} sm={6} className="px-1">
                                        <Form.Select className="domainForm" onChange={onchange}
                                            name="stateName" style={{ maxHeight: '200px', overflowY: "scroll" }} required>
                                            <option style={{ color: "black" }}>Select Your State</option>
                                            <option value="Andhra Pradesh" style={{ color: "black" }}>Andhra Pradesh</option>
                                            <option value="Arunachal Pradesh" style={{ color: "black" }}>Arunachal Pradesh</option>
                                            <option value="Assam" style={{ color: "black" }}>Assam</option>
                                            <option value="Bihar" style={{ color: "black" }}>Bihar</option>
                                            <option value="Chhattisgarh" style={{ color: "black" }}>Chhattisgarh</option>
                                            <option value="Goa" style={{ color: "black" }}>Goa</option>
                                            <option value="Gujarat" style={{ color: "black" }}>Gujarat</option>
                                            <option value="Haryana" style={{ color: "black" }}>Haryana</option>
                                            <option value="Himachal Pradesh" style={{ color: "black" }}>Himachal Pradesh</option>
                                            <option value="Jharkhand" style={{ color: "black" }}>Jharkhand</option>
                                            <option value="Karnataka" style={{ color: "black" }}>Karnataka</option>
                                            <option value="Kerala" style={{ color: "black" }}>Kerala</option>
                                            <option value="Madhya Pradesh" style={{ color: "black" }}>Madhya Pradesh</option>
                                            <option value="Maharashtra" style={{ color: "black" }}>Maharashtra</option>
                                            <option value="Manipur" style={{ color: "black" }}>Manipur</option>
                                            <option value="Meghalaya" style={{ color: "black" }}>Meghalaya</option>
                                            <option value="Mizoram" style={{ color: "black" }}>Mizoram</option>
                                            <option value="Nagaland" style={{ color: "black" }}>Nagaland</option>
                                            <option value="Odisha" style={{ color: "black" }}>Odisha</option>
                                            <option value="Punjab" style={{ color: "black" }}>Punjab</option>
                                            <option value="Rajasthan" style={{ color: "black" }}>Rajasthan</option>
                                            <option value="Sikkim" style={{ color: "black" }}>Sikkim</option>
                                            <option value="Tamil Nadu" style={{ color: "black" }}>Tamil Nadu</option>
                                            <option value="Telangana" style={{ color: "black" }}>Telangana</option>
                                            <option value="Tripura" style={{ color: "black" }}>Tripura</option>
                                            <option value="Uttar Pradesh" style={{ color: "black" }}>Uttar Pradesh</option>
                                            <option value="Uttarakhand" style={{ color: "black" }}>Uttarakhand</option>
                                            <option value="West Bengal" style={{ color: "black" }}>West Bengal</option>
                                            <option value="Andaman and Nicobar Islands" style={{ color: "black" }}>Andaman and Nicobar Islands</option>
                                            <option value="Chandigarh" style={{ color: "black" }}>Chandigarh</option>
                                            <option value="Dadra and Nagar Haveli and Daman and Diu" style={{ color: "black" }}>Dadra and Nagar Haveli and Daman and Diu</option>
                                            <option value="Lakshadweep" style={{ color: "black" }}>Lakshadweep</option>
                                            <option value="Delhi" style={{ color: "black" }}>Delhi</option>
                                            <option value="Puducherry" style={{ color: "black" }}>Puducherry</option>
                                            <option value="Ladakh" style={{ color: "black" }}>Ladakh</option>
                                        </Form.Select>
                                    </Row>
                                    <Row size={12} sm={6} className="px-1">
                                        <input type="text" placeholder="City" onChange={onchange}
                                            name="address" required />
                                    </Row>
                                    <Row size={12} sm={6} className="px-1">
                                        <input type="number" placeholder="Pin Code" onChange={onchange}
                                            name="address" required />
                                    </Row>
                                    <Row size={12} sm={6} className="px-1">
                                        <input type="number" placeholder="Phone Number" onChange={onchange}
                                            name="address" required />
                                    </Row>
                                    <Col size={12} className="px-1" style={{ marginLeft: "160px" }}>
                                        <button className="button-48" style={{ borderRadius: "20px", marginRight: "8rem" }} type="submit"><span>Sign Up</span></button>
                                    </Col>
                                </Col>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <div className="boximage" style={{ gap: "6rem" }}>
                    <img src="./creategrp.jpg" alt="group" style={{ borderRadius: "30px 30px 0px 0px", height: "400px", width: "450px" }} />
                    <img src="./creategrp3.avif" alt="group" style={{ borderRadius: "0px 0px 30px 30px", height: "400px", width: "450px" }} />
                </div>
            </section>
        </Layout>
    );
}