import React from 'react';

import MainNavbar from '../components/home/MainNavbar';
import Herobanner from '../components/home/Herobanner';
import MainView from '../components/home/MainView';
import Footer from '../components/Footer';
// import { useParams } from 'react-router-dom';


export const HomePage = () => {
//   const { company } = useParams();
  return (
      <>
      <MainNavbar />
      <Herobanner />
      <MainView />
      <Footer />
    </>
    );
};
export default HomePage;