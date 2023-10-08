import React from "react";
import "./style.css";

export const Sunseekers = () => {
    return (
        <div className="sunseekers">
            <div className="div">
                <div className="text-wrapper">Sunseekers</div>
                <div className="overlap-group">
                    <div className="frame" />
                    <p className="description">
                        <span className="span">Description:</span>
                        <span className="text-wrapper-2">
                            {" "}
                            Sunseekers are humanoid beings adapted to the scorching deserts of Solara. They have heat-resistant skin
                            and eyes that can withstand the intense sunlight
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Characteristics:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Sunseekers have evolved to store water efficiently and can survive for extended periods without water.
                            They are nomadic and have a deep cultural connection to the desert
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Role in the Ecosystem:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Sunseekers have developed sustainable desert agriculture and have a unique bond with the desert creatures,
                            which they rely on for companionship and mutual protection
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
