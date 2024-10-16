import React from "react";
import Navbar from "./Navbar/Navbar";
import './Header.css'
import {Flex,Typography,Button,Row,Col} from 'antd';
import HeaderBox from "../Single_component/Header_box/HeaderBox";
// import { Grid_box } from "../Grid/Grid_box";

const {Title,Paragraph,Text}=Typography
const Header :React.FC=()=>{

    return (<div id="header-container">
           
         <Navbar/>
        
        <Row justify={"space-between"} align={"bottom"}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
                <Title className="header_title">
                    Startups build on Mailcoach
                </Title>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12}}>
            <Paragraph className="header_para" style={{ margin:"0", fontSize: "30px",flexBasis: "30%", alignSelf:"end" }}>
                    Powerful email marketing tool to effortlessly grow, connect, and convert
                </Paragraph>
            </Col>
        </Row>
               
          
               
        <Row align={"middle"} gutter={10}>
        <Col >
        <Button style={{ margin:"0",fontSize: "14px", borderRadius:"50px", backgroundColor:"blue",color:"white", padding:"20px 30px"}}>
                   Start 14-day free trail
                </Button>
               
        </Col>
        <Col >
        <Text style={{ margin:"0", fontSize: "14px" }}>
                    No credit card required
                </Text>
        </Col>
    </Row>
  
      <Flex className="flex_box" vertical style={{}}>

      <div className="box1" >   
                <HeaderBox  para=" jjI have used send grid,mailchimp & Mandrill." text="Nothing compares to Mailcoach" name="Johnsonigbal" position="FrontEnd Developer"/>
            </div>

        <div className="box2" >   
                <HeaderBox  para=" I have used send grid,mailchimp & Mandrill." text="Nothing compares to Mailcoach" name="Johnsonigbal" position="FrontEnd Developer"/>
            </div>
    
        <div className="box3">   
                <HeaderBox  para=" I have used send grid,mailchimp & Mandrill." text="Nothing compares to Mailcoach" name="Johnsonigbal" position="FrontEnd Developer"/>
            </div>
           
        
      </Flex>
      
       
      
 </div>)
};

export default Header;