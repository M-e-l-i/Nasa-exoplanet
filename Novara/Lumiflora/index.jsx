import React from "react";
import "./style.css";

export const Lumiflora = () => {
    return (
        <div className="lumiflora">
            <div className="div">
                <div className="text-wrapper">Lumiflora</div>
                <div className="overlap-group">
                    <div className="frame" />
                    <p className="description">
                        <span className="span">Description: </span>
                        <span className="text-wrapper-2">
                            Lumiflora are bioluminescent plants that cover the hills and forests of Veridia. They emit a soft,
                            soothing glow in various colors, creating an enchanting, otherworldly landscape.
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Characteristics:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Lumiflora use bioluminescence not only for aesthetics but also to attract pollinators during the misty
                            nights. They come in different shapes and sizes, ranging from small ground cover to towering trees.
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Role in the Ecosystem:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Lumiflora play a crucial role in Veridia&#39;s ecosystem by providing a primary food source for
                            herbivorous creatures and maintaining the balance of the nutrient cycle.
                        </span>
                    </p>
                    <div className="text-wrapper-3">Description</div>
                </div>
                <div className="overlap">
                    <div className="rectangle" />
                    <div className="text-wrapper-4">Back</div>
                </div>
            </div>
        </div>
    );
};
