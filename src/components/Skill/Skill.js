import React, { useEffect, useState } from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const Skill = () => {



    var settings = {
        dots: true,
        infinite: true,
        speed: 1200,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 4,
        pauseOnHover: true,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <article className="mt-5 mb-5">
            <Slider {...settings}>
                <aside className="icon-box shadow">
                    <h4 className="text-center"><AiOutlineHtml5 /></h4>
                    <h6 className="text-center">HTML</h6>
                </aside>
                <aside className="icon-box shadow">
                    <h4 className="text-center"><SiCss3 /></h4>
                    <h6 className="text-center">CSS</h6>
                </aside>
                <aside className="icon-box shadow">
                    <h4 className="text-center"><SiJavascript /></h4>
                    <h6 className="text-center">JavaScript</h6>
                </aside>

                <aside className="icon-box shadow">
                    <h4 className="text-center"><FaReact /></h4>
                    <h6 className="text-center">React</h6>
                </aside>
                <aside className="icon-box shadow">
                    <h4 className="text-center"><SiBootstrap /></h4>
                    <h6 className="text-center ">Bootstrap</h6>
                </aside>
                <aside className="icon-box shadow">
                    <h4 className="text-center"><FaNodeJs /></h4>
                    <h6 className="text-center ">Node Js</h6>
                </aside>
                <aside className="icon-box shadow">
                    <h4 className="text-center"><SiMongodb /></h4>
                    <h6 className="text-center ">Mongo DB</h6>
                </aside>

            </Slider>
        </article>
    );
};

export default Skill;