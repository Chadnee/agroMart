import React from "react"; // <-- add this
import Hero from "../Component/Hero";
import Navbar from "../Component/navbar";
import Category from "../Component/category";
import PromotionalOffer from "../Component/promotionalOffer";
import Process from "../Component/Process";
import Footer from "../Component/Footer";
import Highlights from "../Component/Highlights";
import Trial from "../Component/trial";
import About from "../Component/about";
import FlashProduct from "../Component/FlashSale/FlashProduct";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      
      <Hero id="home"></Hero>
      <PromotionalOffer></PromotionalOffer>
      <Category id="category"></Category>
      <FlashProduct id="flashSale"></FlashProduct>
      <About id="about"></About>
      <Process id="process"></Process>
      <Highlights id="highLights"></Highlights>
    </div>
  );
};

export default Home;
