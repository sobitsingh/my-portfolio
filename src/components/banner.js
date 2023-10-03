import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import ParticleConfig from './particleConfig';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import './banner.css';


const Banner = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <div className="banner d-flex justify-content-center align-items-center">
            <Particles 
                id="tsparticles"
               init={particlesInit}
               loaded={particlesLoaded}
               options={{
                background: {
                    color: {
                        value: "#ff000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000000",
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 40,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
               /> 
            <div className="banner-contact-me">
                <ul className="contact-list">
                    <li>
                        <a href="mailto:sobitsingh007@gmail.com" className="text text-decoration-none"><FontAwesomeIcon icon={faEnvelope} /></a>
                    </li>
                    <li>
                        <a href="tel:+8108071944350" className="text text-decoration-none"><FontAwesomeIcon icon={faPhone} /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/sobitsingh007" className="text text-decoration-none"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li>
                        <a href="https://instagram.com/__sobit_007" className="text text-decoration-none"> <FontAwesomeIcon icon={faSquareInstagram} /></a>
                    </li>
                    <li>
                        <a href="https://github.com/sobitsingh" className="text text-decoration-none"><FontAwesomeIcon icon={faGithub} /></a>
                    </li>
                </ul>
            </div>
            <div className="banner-me">
                <div className="row">
                    <div className="col-12">
                        <h1 className="p-4">Hi, I'm Sobit Singh </h1>
                        <h2 className="p-1">An AWS Expert Specializing in Seamless Deployments for Web Success</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
