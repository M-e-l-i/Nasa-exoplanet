import React from "react";
import "./style.css";

export const HomePage = () => {
    return (
        <div className="home-page">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <img className="exterior-galaxy" alt="Exterior galaxy" src="exterior-galaxy-1.png" />
                    <div className="nmae-title">
                        <div className="text-wrapper">Astralis</div>
                    </div>
                    <div className="planet-image-in" />
                    <div className="div">Highlights</div>
                    <p className="desc-abt-planet">
                        Astralis is a planet situated 420 lightyears away from Earth. It is life to the species CB-15 who share a
                        striking resemblance to us humans. The planet features three continents each divided into two countries and
                        boasts a diverse range of terrains.
                    </p>
                    <div className="rectangle" />
                    <div className="text-wrapper-2">Know More</div>
                </div>
            </div>
        </div>
    );
};
