import React from "react";
import { asEditorWidget } from "@episerver/react-to-dijit-adapter";

const MyComponent = ({ onChange, value }) => {
    // Your component logic here...
};

export default asEditorWidget(MyComponent);