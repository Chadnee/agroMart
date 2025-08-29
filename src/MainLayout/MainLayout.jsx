import React from "react";   // <-- add this
import Hero from "../Component/Hero";
import Navbar from "../Component/navbar";
import Category from "../Component/category";
import About from "../Component/about";
import PromotionalOffer from "../Component/promotionalOffer";
import Process from "../Component/Process";
import Footer from "../Component/Footer";
import Highlights from "../Component/Highlights";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <PromotionalOffer></PromotionalOffer>
            <Category></Category>
            <About></About>
            <Process></Process>
            <Footer></Footer>
            <Highlights></Highlights>
        </div>
    );
};

export default MainLayout;
