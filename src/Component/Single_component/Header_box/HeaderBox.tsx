import {Typography,Avatar,Flex} from 'antd';
import "./HeaderBox.css"

const{Paragraph,Text,Title} =Typography

 type headerbox={
    para:string,
    text:string,
    position:string,
    name:string
}

const HeaderBox=(props:headerbox)=>{

    return(<div className="Headerbox">
                <Paragraph className='para'>
                    {/* I have used send grid,mailchimp & Mandrill.  */} {props.para}
                    <Text  className='text'>{/* Nothing compares to Mailcoach*/} {props.text}</Text>
                </Paragraph>
               <Flex gap={"20px"}>
               <Avatar size={60}/> 
               <Text>
                    <Title level={5}>{props.name}</Title>
                    {props.position}
               </Text>
               </Flex>
              
             </div>)
}

export default HeaderBox