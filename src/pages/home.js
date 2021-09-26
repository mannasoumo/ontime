import React from 'react';
import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppFaq from '../components/home/faq';
import AppContact from '../components/home/contact';
function Home() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppFaq/> 
      <AppContact/>
    </div>
  );
}

export default Home;