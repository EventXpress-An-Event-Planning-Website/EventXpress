import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChatSidebar from "../Chat/ChatSidebar";
import Sidebar from '../../../assets/images/Sidebar.png'
import ChatImg from '../../../assets/images/chatimg.png'
import ChatImg2 from '../../../assets/images/chatimg2.png'
import ChatImg3 from '../../../assets/images/chatimg3.png'
import ChatImg4 from '../../../assets/images/chatimg4.png'

const ChatDes = () => {

    return (
        <>
            <div style={{ "display": "flex" }}>
                {/* <ChatSidebar/> */}
                <div>
                    <img src={Sidebar} className="chat-img" />
                </div>
                

                <Container>
      <Row>
        <Col sm={12}>
        <img src={ChatImg} className="chat-img2" />
        <hr/>
        </Col>
        
      </Row>
      <Row>
      <Col sm={6}>
        <img src={ChatImg2} className="chat-img3" />
        </Col>

        <Col sm={6}>
        <img src={ChatImg3} className="chat-img4" />
        </Col>

      </Row>

      <Row>
      <Col sm={12}>
        <img src={ChatImg4} className="chat-img5" />
        </Col>
      </Row>
    </Container>
            </div>
        </>
    );
};



export default ChatDes;