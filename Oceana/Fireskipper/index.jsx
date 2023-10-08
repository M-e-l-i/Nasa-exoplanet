import React from "react";
import "./style.css";

export const Fireskippers = () => {
    return (
        <div className="fireskippers">
            <div className="div">
                <div className="text-wrapper">Fireskippers</div>
                <div className="overlap">
                    <div className="frame" />
                    <p className="description">
                        <span className="span">Description:</span>
                        <span className="text-wrapper-2">
                            {" "}
                            Fireskippers are small, reptilian beings native to the volcanic islands of Pelagia. They have fiery red
                            scales and can skip across the water&#39;s surface
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Characteristics:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            Fireskippers have unique webbed feet that allow them to glide short distances over water, which they use
                            for hunting and escaping predators. They are known for their agility and playful nature
                        </span>
                        <span className="span">
                            {" "}
                            <br />
                            Role in the Ecosystem:{" "}
                        </span>
                        <span className="text-wrapper-2">
                            These creatures are skilled hunters, feeding on small aquatic creatures and contributing to the regulation
                            of the island&#39;s ecosystem
                        </span>
                    </p>
                    <div className="text-wrapper-3">Description</div>
                </div>
                <div className="overlap-group">
                    <div className="rectangle" />
                    <div className="text-wrapper-4">Back</div>
                </div>
            </div>
        </div>
    );
};
