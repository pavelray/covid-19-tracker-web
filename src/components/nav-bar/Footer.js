import React from 'react';
import { Layout } from 'antd';
import { CopyrightTwoTone  } from '@ant-design/icons';
const { Footer } = Layout;

export default function PageFooter() {
  return (
     <Footer style={{ textAlign: 'center', backgroundColor:'#2196f3' }}>
       <p>
          Developed by <a href="https://github.com/pavelray" style={{color: 'black'}} >#Ray</a>
       </p>
       <p>
          Covid-19 Tracker <CopyrightTwoTone  spin twoToneColor="#eb2f96"/> &nbsp;{new Date().getFullYear()}
       </p>
       
       {/* <p>
          API Used : <a href="https://api.covid19api.com" style={{color: 'black'}}>covid19api</a>&nbsp;and&nbsp; 
          <a href="https://api.covid19india.org" style={{color: 'black'}}>covid19india</a>
       </p> */}
     </Footer>
  )
}
