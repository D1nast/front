import React from "react";
import Ranking from "./LpComponent/Ranking";
import News from "./LpComponent/News";
export default function LP(){
    return(
        <React.Fragment>
            <News/>
            <Ranking />
            {/* <FeaturedCurrency /> */}
        </React.Fragment>
    );
};
