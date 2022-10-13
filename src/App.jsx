import React from "react";
import Greet from "./components/Greet";
import Quiz from "./components/Quiz";
import './index.css';

export default function App(){
    return(
        <div>
        <Greet />
        <Quiz />
        </div>
    )
}