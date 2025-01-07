import React from "react";
import FeaturedCurrency from "./FeaturedCurrency"
import Ranking from "./Ranking";
import Tester from "./Tester";
import News from "./News";
export default function LP(){
    return(
        <React.Fragment>
            <Tester />
            <News/>
            <Ranking />
            <FeaturedCurrency />
        </React.Fragment>
    );
};
