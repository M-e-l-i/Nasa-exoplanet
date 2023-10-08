import React from "react";
import "./style.css";

export const PlateauRunners = () => {
    return (
        <div className="plateau-runners">
            <div className="div">
                <div className="overlap-group">
                    <div className="text-wrapper">Description</div>
                    <p className="description">
                        <span className="span">Description: </span>
                        <span className="text-wrapper-2">
                            Plateaurunners are large, herbivorous creatures that roam the expansive plains and plateaus of Zephyria.
                            They have sturdy, hoofed legs and a humpbacked body structure
                            <br />
                        </span>
                        <span className="span">
                            <br />
                            Characteristics:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Plateaurunners are social animals that travel in herds for protection against predators. They are known
                            for their swift running, which they use for migration and escaping danger
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Role in the Ecosystem:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            These creatures play a crucial role in shaping the landscape of Zephyria by grazing on the grasslands and
                            aiding in seed dispersal Their dung provides essential nutrients for the grasses and plants of the region{" "}
                        </span>
                    </p>
                    <div className="frame" />
                </div>
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-wrapper-3">Back</div>
                </div>
                <div className="text-wrapper-4">Plateau Runners</div>
            </div>
        </div>
    );
};
