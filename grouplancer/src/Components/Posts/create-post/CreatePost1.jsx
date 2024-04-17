import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useUser } from "../../../context/UserContext";
import Select from 'react-select';
import toast from "react-hot-toast";

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}

const CreatePost1 = () => {
    const navigate = useNavigate();
    const [myGroups, setMyGroups] = useState([]);
    const { currentUser } = useUser();
    const [selGroup, setSelGroup] = useState();
    const [img, setImg] = useState(null);
  

    const [formData, setFormData] = useState({
        pDesc: "",
        media: null
    });

    const [postImage, setPostImage] = useState("");

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
            
            e.preventDefault();
            const authToken = localStorage.getItem('auth-token');
            console.log(img)
            const response = await fetch("http://localhost:8080/api/tweet/create-post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken,
                },
                body: JSON.stringify({ groupId: selGroup, content: formData.pDesc, file: img })
            });
            const data = await response.json();
            console.log(data);
            toast.success("Post Created Successfully !")
            setFormData({ pDesc: "", media: null })
            navigate("/")
        } catch (error) {
            console.log(error);
            toast.error("Failed to create post !")
        }
    }

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        try {
            const base64 = await convertToBase64(file);
            setPostImage(base64);
            // if (!postImage) {
            //     e.target.value = null;
            //     return;
            // }
            e.preventDefault();
            const authToken = localStorage.getItem('auth-token');
            const response = await fetch("http://localhost:8080/api/file/upload-post-img", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": authToken,
                },
                body: JSON.stringify({ file: base64 })
            });
            const data = await response.json();
            console.log(data);
           // console.log(data.image._id);
            setImg(data.image._id);
       
            setFormData(prevState => ({
                ...prevState,
                media: base64
            }));
           // console.log("Img: ", img);
        } catch (error) {
            console.log(error)
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="create">
            <Container>
                <Row className="align-items-center">
                    {/* <h1 className="text-center my-4" style={{ color: "#ffff", paddingBottom: "2vh" }}>
                        Create Post
                    </h1> */}
                    <h3 style={{ color: "white" }}>Select Group:</h3>

                    <Select
                        options={myGroups}
                        value={myGroups.label}
                        text={selGroup}
                        onChange={handleGroupChange}
                        width="5rem"
                    />

                    <Col className="form" size={12} md={6}>
                        <Form onSubmit={handleSubmit}>
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
                                            onChange={(e) => {
                                                handleChange(e);
                                                handleFileUpload(e);
                                            }}
                                            name="media"
                                            accept="image/*, video/*"

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
                          
                                src={formData.media}
                                alt="post"
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
