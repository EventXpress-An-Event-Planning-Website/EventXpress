import React from "react";
import { NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
// import React, { children, useState } from "react";
import event1 from '../../../assets/images/event1.png';
import event2 from '../../../assets/images/event2.png';
import event3 from '../../../assets/images/event3.png';
import event4 from '../../../assets/images/event4.png';
import event5 from '../../../assets/images/event5.png';
// import Sidebar from "../Sidebar";

const Birthday = ({ children }) => {

    const birthdayData = [
        {
            path: "/Decoration",
            name: "Anniversary",
            image: event1
        },
        {
            path: "/Decoration",
            name: "Graduation",
            image: event2
        },
        {
            path: "/Decoration",
            name: "Bride to be",
            image: event3
        },
        {
            path: "/Birthday",
            name: "Birthday",
            image: event4
        },
        {
            path: "/Decoration",
            name: "Concert",
            image: event5
        }
    ]

    return (
        <div className="cusSidebar-Container">
            <div style={{  "margin-top": "-8px" }} className="p-sidebar" >
                <div className="cusSidebar-top-section">
                </div>
                {
                    birthdayData.map((event, index) => (
                        <NavLink to={event.path} key={index} className="p-link " activeclassName="cusSidebar-active">
                            {/* <div className="cusSidebar-icon"> */}
                            <Stack gap={0}>

                                <div>

                                    <Image className="p-sidebar-img" src={event.image} />
                                </div>

                                <div>
                                    {/* </div> */}
                                    <div className="cusSidebar-link-text">{event.name}</div>
                                </div>
                            </Stack>
                        </NavLink>
                    ))
                }
            </div>
            <main className="cusSidebar-main">{children}</main>
        </div>
    );
};

export default Birthday;