import React from "react";
import "./style.css";

export const Aerowings = () => {
    return (
        <div className="aerowings">
            <div className="div">
                <div className="text-wrapper">Aerowings</div>
                <div className="overlap-group">
                    <div className="frame" />
                    <p className="description">
                        <span className="span">Description: </span>
                        <span className="text-wrapper-2">
                            Aerowings are large, flying creatures native to Arcadia&#39;s mountainous regions. They have iridescent
                            wings and are known for their majestic aerial display
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Characteristics:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Aerowings are social creatures that live in colonies on the highest mountain peaks. They use their
                            iridescent wings to communicate with intricate patterns and colors during courtship and in-flight
                            coordination
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Role in the Ecosystem:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            These creatures play a role in seed dispersal and help maintain the health of the mountain ecosystems
                            through their interactions with plants
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
