import React from "react";
import { asEditorWidget } from "@episerver/react-to-dijit-adapter";
import StringStatistics from "../Util/StringStatistics";

const TextFieldWithStatistics = ({ onChange, value }) => {
    const result = StringStatistics(value);
    return (
        <>
            <input type="text" onChange={(e) => onChange(e.target.value)} value={value} style={{ width: "600px" }} />
            <div> Characters: {result.characters} </div>
            <div> Words: {result.words} </div>
        </>
    );
};

export default asEditorWidget(TextFieldWithStatistics);