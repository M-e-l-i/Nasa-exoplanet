import React from "react";
import "./style.css";

export const PlanetOverview = () => {
    return (
        <div className="planet-overview">
            <div className="div">
                <div className="overlap">
                    <div className="overlap-group">
                        <img className="rectangle" alt="Rectangle" src="rectangle-2.png" />
                        <div className="know-more-button">
                            <div className="text-wrapper">Know More</div>
                        </div>
                        <div className="novara">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-2">
                                    1.Veridia
                                    <br />
                                    2.Arcadia
                                </div>
                                <div className="rectangle-2" />
                                <div className="text-wrapper-3">Know More</div>
                            </div>
                            <div className="text-wrapper-4">Novara</div>
                        </div>
                        <div className="seraphia">
                            <div className="overlap-group-2">
                                <div className="text-wrapper-2">
                                    1.Solara
                                    <br />
                                    2.Zephyria
                                </div>
                                <div className="rectangle-2" />
                                <div className="text-wrapper-3">Know More</div>
                            </div>
                            <div className="text-wrapper-4">Seraphia</div>
                        </div>
                    </div>
                    <button className="back-button">
                        <div className="text-wrapper-5">Back</div>
                    </button>
                </div>
                <div className="oceana">
                    <div className="overlap-group-2">
                        <div className="text-wrapper-2">
                            1.Aquatica
                            <br />
                            2.Pelagia
                        </div>
                        <div className="rectangle-2" />
                        <div className="text-wrapper-3">Know More</div>
                    </div>
                    <div className="text-wrapper-4">Oceana</div>
                </div>
            </div>
        </div>
    );
};
