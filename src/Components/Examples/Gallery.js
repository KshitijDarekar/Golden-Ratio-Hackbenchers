import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap/";
import { Link } from "react-router-dom";
import GalleryData from "./GalleryData";

const style = {
    border: "20px",
    width: "300px",
    height: "300px",
    boxShadow: "3px 6px rgba(0,0,0,0.2)",
    borderRadius: "10px",
};
// Gallery Data with Filter start from here
function Gallery() {
    const [filterData, setData] = useState(GalleryData); // By Default pass GalleryData to display all the images
    // by Using arrow function handleClick can be rendered many times
    const handleClick = (e) => {
        if (e === "all") {
            // if showall data(button) is clicked then all the data is passed down without filter
            setData(GalleryData);
        } else {
            setData(
                // data is filtered on the basis of value of e(passed argument)
                GalleryData.filter((product, index, products) => {
                    return product.alt === e;
                })
            );
        }
    };

    return (
        <>
            <div className="v-spacer">
                {/* use arrow function to call handle events ,otherwise it will get call infinitely  */}
                <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-dark "
                    onClick={() => handleClick("all")}
                    to="/example"
                >
                    Show all
                </Link>{" "}
                <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary"
                    onClick={() => handleClick("Art")}
                    to="/example/art"
                >
                    Art
                </Link>{" "}
                <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary"
                    onClick={() => handleClick("Beauty")}
                    to="/example/beauty"
                >
                    Beauty
                </Link>{" "}
                <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary"
                    onClick={() => handleClick("Geometry")}
                    to="/example/geomerty"
                >
                    Geometry
                </Link>{" "}
                <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary"
                    onClick={() => handleClick("Nature")}
                    to="/example/nature"
                >
                    Nature
                </Link>{" "}
                <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary"
                    onClick={() => handleClick("Music")}
                    to="/example/music"
                >
                    Music
                </Link>{" "}
                <Link
                    style={{ marginBottom: "10px" }}
                    className="btn btn-primary"
                    onClick={() => handleClick("Architecture")}
                    to="/example/architecture"
                >
                    Architecture
                </Link>{" "}
            </div>

            <Container>
                <Row>
                    {filterData.map((item) => (
                        // Map data from filterData
                        <Col
                            data-aos="zoom-in"
                            className="v-spacer"
                            key={item.id}
                            lg={4}
                            md={6}
                            sm={12}
                            xs={12}
                        >
                            <img style={style} alt={item.alt} src={item.url} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}
export default Gallery;
