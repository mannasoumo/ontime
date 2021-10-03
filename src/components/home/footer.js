import React from 'react';
import "antd/dist/antd.css";

import {TwitterSquareFilled , FacebookFilled, InstagramFilled, LinkedinFilled  } from '@ant-design/icons';
import {Button} from "antd";
function FooterApp(){
   
    return(
            <div >
                <h1 style={{color:"white"}}>OnTime</h1>
            <Button style={{margin:10}} type="link" href='https://www.twitter.com' >
            <TwitterSquareFilled   style={{color:'b#1f1f96',fontSize:40}} />
            </Button> 
            <Button style={{margin:10}} type="link" href='https://www.facebook.com' >
            <FacebookFilled style={{color:'b#1f1f96',fontSize:40}}/>
            </Button>
            <Button style={{margin:10}} type="link" href='https://www.instagram.com' >
            <InstagramFilled  style={{color:'b#1f1f96',fontSize:40}} />
            </Button> 
            <Button style={{margin:10}} type="link" href='https://www.linkedin.com' >
            <LinkedinFilled   style={{color:'b#1f1f96',fontSize:40}} />
            </Button>
          
            <p style={{marginTop:20}}>@copyright OnTime</p>
            </div>
    );
}

export default FooterApp;