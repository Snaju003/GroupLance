import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../context/UserContext";
import Select from 'react-select';

const CreatePost1 = () => {

    const navigate = useNavigate();
    const [myGroups, setMyGroups] = useState([]);
    const { currentUser } = useUser();
    const [selGroup, setSelGroup] = useState();

    const [formData, setFormData] = useState({
        pDesc: "",
        media: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem('auth-token');
                const response = await fetch("http://localhost:8080/api/user/owned-groups", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": authToken,
                    },
                });
                const data = await response.json();
                setMyGroups(data.ownedGroups.map(({ gName, _id }) => ({ value: _id, label: gName })))
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
        , [currentUser, navigate])

    const handlePost = async (e) => {
        try {
            const authToken = localStorage.getItem('auth-token');
            console.log(selGroup)
            const response = await fetch("http://localhost:8080/api/tweet/create-post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken,
                },
                body: JSON.stringify({ groupId: selGroup, content: formData.pDesc })
            });
            const data = await response.json();
            console.log(data);
            setFormData({pDesc: "", media: null})
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "media") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };


    const handleGroupChange = (e) => {
        setSelGroup(e.value);
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    // };

    return (
        <section className="create">
            <Container>
                <Row className="align-items-center">
                    <h1 className="text-center my-4" style={{ color: "#ffff", paddingBottom: "2vh" }}>
                        Create Post
                    </h1>
                    <h3 style={{ color: "white" }}>Select Group:</h3>

                    <Select
                        options={myGroups}
                        value={myGroups.label}
                        text={selGroup}
                        onChange={handleGroupChange}
                        styles={{width: "5rem"}}
                    />

                    <Col className="form" size={12} md={6}>
                        <Form>
                            <Col className="column" style={{ width: "31.25vw" }}>
                                <Row className="px-1">
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            as="textarea"
                                            rows="6"
                                            placeholder="Post Description"
                                            onChange={handleChange}
                                            name="pDesc"
                                            required
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="px-1">
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            type="file"
                                            placeholder="Upload Media"
                                            onChange={handleChange}
                                            name="media"
                                            accept="image/*, video/*"
                                            required
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="px-1">
                                    <Col className="text-center">
                                        <button className="button-48" style={{ borderRadius: "20px" }} type="submit" onClick={handlePost}>
                                            <span>Create Post</span>
                                        </button>
                                    </Col>
                                </Row>
                            </Col>
                        </Form>
                    </Col>
                    <Col className="boximage">
                        {formData.media ? (
                            <img
                                src={URL.createObjectURL(formData.media)}
                                alt="image"
                                style={{ borderRadius: "30px 30px 30px 30px", height: "50vh", width: "30vw", marginLeft: "15vh" }}
                            />
                        ) : (
                            <img
                                src="./default-user.jpg"
                                alt="default"
                                style={{ borderRadius: "30px 30px 30px 30px", height: "50vh", width: "30vw", marginLeft: "15vh" }}
                            />
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};


export default CreatePost1;
