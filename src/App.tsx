import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import { ServiceCard } from './components/Services/ServiceCard';
import { Steps } from './components/Steps/Steps';
import { SectionOne } from './Sections/SectionOne';
import { SectionTwo } from './Sections/SectionTwo';
import { ReviewCard } from './components/Reviews/ReviewCard';
import { Reviews } from './components/Reviews/Reviews';
import { Footer } from './Footer';

function App() {
  return (
    <>
    <Header />
    <Steps />
    <SectionOne />
    <Services />
    <SectionTwo />
    <Reviews />
    <Footer />
    </>
  );
}

export default App;
