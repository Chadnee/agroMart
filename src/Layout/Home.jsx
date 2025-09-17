import React from "react"; // <-- add this
import Hero from "../Component/Hero";
import Navbar from "../Component/navbar";
import Category from "../Component/category";
import PromotionalOffer from "../Component/promotionalOffer";
import Process from "../Component/Process";
import Footer from "../Component/Footer";
import Highlights from "../Component/Highlights";
import FlashProduct from "../Component/FlashSale/FlashProduct";
import { Outlet } from "react-router-dom";
import Works from "../Component/works";
import Services from "../Component/Services";
import ContactBanner from "../Component/ContactBanner";
import Employee from "../Component/employee";

const Home = () => {
  return (
    <div className="">
      
      <Hero id="home"></Hero>
      <Category id="category"></Category>
      {/* <FlashProduct id="flashSale"></FlashProduct> */}
      <Services id="services"></Services>
      <PromotionalOffer></PromotionalOffer>
       <Works></Works>
      {/* <Process id="process"></Process> */}
      <ContactBanner></ContactBanner>
      <Employee></Employee>
      <Highlights id="highLights"></Highlights>
    </div>
  );
};

export default Home;
