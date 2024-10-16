import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import  { CloseSquareOutlined } from '@ant-design/icons';

interface ChildProps {
  togglefun?: (newValue: true) => void;  // Function to update the parent state
}
interface BoxProps {
  style?: React.CSSProperties; // Type for inline styles
}
type MenuItem = Required<MenuProps>['items'][number];
type modevalue={menumode:'horizontal' | 'vertical' | 'inline'}
type MenubarProps = modevalue & BoxProps & ChildProps;

// const closebutton:string=""
const items: MenuItem[] = [
   {
    label:<CloseSquareOutlined style={{fontSize:"30px"}}/>,
    key:'close',
  },
  {
    label: 'Platform',
    key: 'platform',
    children: [
        { key: '3', label: 'Option 3' },
        { key: '4', label: 'Option 4' },],
    
  },
  {
    label: 'Solutions',
    key: 'solution',
  },
  {
    label: 'Pricing',
    key: 'price',
  },
  {
    key: 'self',
    label:'Selt-Hosted'
  },
  {
    key: 'resource',
    label:'Resources',
    
  },
];

const menuitems: MenuItem[] = items.slice()

const Menubar: React.FC <MenubarProps>  = (props: MenubarProps) => {



  const [current, setCurrent] = useState('resource');
  
  const onClick: MenuProps['onClick'] = (e) => {
      setCurrent(e.key);
      console.log('click ', e);
      console.log(current);

    if('close'===current)
    {
      props.togglefun && props.togglefun(true)
    }
      

  }; 
  
  // const menu_styel={}

  
  return <> {props.menumode=='inline'? <Menu onClick={onClick}  style={props.style} selectedKeys={[current]} mode={props.menumode} items={items}  />:menuitems.shift()? <Menu onClick={onClick}  style={props.style} selectedKeys={[current]} mode={props.menumode} items={menuitems}  />:null
  
  };
</> 

};

export default Menubar;