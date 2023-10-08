import React from "react";
import "./style.css";

export const Corallina = () => {
    return (
        <div className="corallina">
            <div className="div">
                <div className="text-wrapper">Corallina</div>
                <div className="overlap-group">
                    <div className="frame" />
                    <p className="description">
                        <span className="span">Description: </span>
                        <span className="text-wrapper-2">
                            Corallians are sentient coral colonies found in the depths of Aquatica&#39;s oceans. They form vast living
                            cities with intricate structures and chambers
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Characteristics:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Corallians have a hive-mind intelligence, allowing them to communicate instantly across the entire colony.
                            They possess bioluminescent patterns that change in response to their emotions and environmental
                            conditions
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Role in the Ecosystem:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Corallians are masterful builders and create habitats for a wide variety of marine life. They are also
                            known for their advanced understanding of underwater technology and science
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
