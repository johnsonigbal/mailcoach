
import './Navbar.css';
import { Button,Row,Col,} from 'antd';
import  { MenuOutlined } from '@ant-design/icons';
import {useState} from 'react';

import {Logo} from '../../Svg/Logo'
import Menubar from './Menu/Menu'
//Ant Design

const Navbar:React.FC=()=>{

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = (newValue?:boolean) => {
     
      newValue?setIsSidebarOpen(false):setIsSidebarOpen(!isSidebarOpen);
    };

        const menuStyle: React.CSSProperties = {
                                                    backgroundColor:"white",
                                                    borderRadius:"20px",
                                                    fontWeight:"bold" ,
                                                    minWidth:"480px",
                                                    maxWidth:"480px"};
         const sidemenustyle: React.CSSProperties = { zIndex:"1",
                                                      position:'fixed',
                                                      right:"0",
                                                      top:"0",
                                                      backgroundColor:"#c394ef",
                                                      borderRadius:"0",
                                                      fontWeight:"bold" ,
                                                      width:"200px",
                                                      height:"100vh",
                                                      border:"1px solid black"
                                                        
                                                    };
  
    return (
     <div id='Navbar' >
    <Row justify={'space-between'} align={"top"}>  
    <Col>
    <Logo/>
    </Col>
    <Col className='menubar'>
      <Menubar menumode="horizontal" style={menuStyle}/>
    </Col>
    <Col style={{display:"flex",gap:"20px"}} >
    <Button type="primary" style={{backgroundColor:'black',color:"white",borderRadius:"50px",padding:"20px 30px"}}> Get Started</Button>
    <MenuOutlined  className='menuicon '  onClick={()=>{toggleSidebar()}} />
    <div className={`sidemenu ${isSidebarOpen?'open':'close'}`}>
    
      <Menubar togglefun={toggleSidebar}  menumode="inline" style={sidemenustyle} />
    </div>
    
    </Col>
   
    </Row>
     </div>)
}

export default Navbar