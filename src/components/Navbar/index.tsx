import React, { MutableRefObject } from "react";

interface NavbarProps {
    heroRef: MutableRefObject<any>;
    aboutRef: MutableRefObject<any>;
    expRef: MutableRefObject<any>;
    projectsRef: MutableRefObject<any>;
    contactRef: MutableRefObject<any>;
}

const Navbar: React.FC<NavbarProps> = ({ heroRef, aboutRef, expRef, projectsRef, contactRef }) => {
    const heroScroll = () => heroRef.current.scrollIntoView({ behavior: "smooth" });
    const aboutScroll = () => aboutRef.current.scrollIntoView({ behavior: "smooth" });
    const expScroll = () => expRef.current.scrollIntoView({ behavior: "smooth" });
    const projectsScroll = () => projectsRef.current.scrollIntoView({ behavior: "smooth" });
    const contactScroll = () => contactRef.current.scrollIntoView({ behavior: "smooth" });

    return (
        <div className="navbar">
            <div className="navbar_left">
                <img
                    src={
                        "https://res.cloudinary.com/drnym8nne/image/upload/v1666110360/portfolio/nav/favicon_uw1wog.png"
                    }
                    alt="Not found"
                    className="navbar_left_img"
                />
            </div>
            <div className="navbar_right">
                <div className="navbar_right_link" onClick={() => heroScroll()}>
                    Home
                </div>
                <div className="navbar_right_link" onClick={() => aboutScroll()}>
                    About
                </div>
                <div className="navbar_right_link" onClick={() => expScroll()}>
                    Experience
                </div>
                <div className="navbar_right_link" onClick={() => projectsScroll()}>
                    Project
                </div>
                <div className="navbar_right_link" onClick={() => contactScroll()}>
                    Contact
                </div>
            </div>
        </div>
    );
};

export default Navbar;
