import React from "react";   // <-- add this
import Hero from "../Component/Hero";
import Navbar from "../Component/navbar";
import Category from "../Component/category";
import PromotionalOffer from "../Component/promotionalOffer";
import Process from "../Component/Process";
import Footer from "../Component/Footer";
import Highlights from "../Component/Highlights";
import Trial from "../Component/trial";
import About from "../Component/about";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar ></Navbar>
            <Hero id = "hero"></Hero>
            <PromotionalOffer></PromotionalOffer>
            <Category id = "category"></Category>
            <About id = "about"></About>
            <Process id = "process"></Process>
            <Highlights id = "highLights"></Highlights>
        </div>
    );
};

export default MainLayout;
