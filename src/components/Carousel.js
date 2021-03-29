import { Carousel, Container } from "react-bootstrap"
import ODPicture  from "../images/OD.png"
import MountainPicture  from "../images/MountainNight.jpg"
import SAPicture  from "../images/SpaceAge.png"
import "./ComponentStyle.css"

function MainCarousel() {
    return (
        <Container className="ContainerSize" w-75>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={SAPicture}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={MountainPicture}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ODPicture}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default MainCarousel;