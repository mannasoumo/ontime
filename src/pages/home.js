import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFaq from '../components/home/faq';
import AppContact from '../components/home/contact';
import AppFooter from '../components/home/footer';
import { Layout } from 'antd';

const {  Footer } = Layout;
function Home() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFaq/> 
      <AppContact/>
      <Layout>
      <Footer style={{ textAlign: 'center', backgroundColor:"rgb(10 1 1 / 85%)" ,color:"white"}}>
      <AppFooter/>
      </Footer>
      </Layout>
    </div>
  );
}

export default Home;