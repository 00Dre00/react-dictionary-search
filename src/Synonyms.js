import React from "react";
import "./Synonyms.css";

export default function Synonyms(props){
    if (props.synonym){
        return(
            <ul className="Synonyms">
                {props.synonym.map(function (synonym, index){
                    return<li key={index}>{synonym}</li>;
                })}
            </ul>
        );}
        else{
            return null
        }
    }