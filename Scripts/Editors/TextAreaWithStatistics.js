import React from "react";
import { asEditorWidget } from "@episerver/react-to-dijit-adapter";
import StringStatistics from "../Util/StringStatistics";

const TextAreaWithStatistics = ({ onChange, value }) => {
    const result = StringStatistics(value);
    return (
        <>
            <textarea className="dijitTextBox dijitTextArea" onChange={(e) => onChange(e.target.value)} value={value} style={{ width: "600px" }}/>
            <div style={{ fontSize: "12px", color: "#333" }}>characters: {result.characters}, words: {result.words}, paragraphs: {result.paragraphs}</div>
        </>
    );
};

export default asEditorWidget(TextAreaWithStatistics);