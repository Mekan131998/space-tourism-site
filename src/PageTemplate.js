import { MainMenu } from "./MainMenu";
import React from "react";

const PageTemplate=({children})=>
    <div className="page">
        <MainMenu/>
        {children}
    </div>

export default PageTemplate;