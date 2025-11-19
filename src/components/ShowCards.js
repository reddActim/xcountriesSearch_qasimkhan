import React from "react";
import Card from "./Card";
export default function ShowCards({ data }) {
    return (
        <>
            <div style={{display : "flex", gap : "10px", flexWrap : "wrap", margin : "50px", marginTop:"1.5em", justifyContent: "center"}}>
                {data.map((country) => (
                    <Card
                        key={country.common}
                        name={country.common}
                        img={country.png}
                        abbr={country.common}
                    />
                ))}
            </div>
        </>
    );
}
