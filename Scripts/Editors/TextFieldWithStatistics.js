import React from "react";
import { asEditorWidget } from "@episerver/react-to-dijit-adapter";
import StringStatistics from "../Util/StringStatistics";

const TextFieldWithStatistics = ({ onChange, value }) => {
    const result = StringStatistics(value);
    return (
        <>
            <div className="dijitReset dijitTextBox">
                <div className="dijitReset dijitInputField dijitInputField dijitInputContainer">
                    <input className="dijitReset dijitInputInner" type="text" onChange={(e) => onChange(e.target.value)} value={value}/>
                </div>
            </div>
            <div style={{ fontSize: "12px", color: "#333" }}>characters: {result.characters}, words: {result.words}</div>
        </>
    );
};

export default asEditorWidget(TextFieldWithStatistics);