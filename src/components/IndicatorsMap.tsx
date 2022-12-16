import * as React from 'react';
import {useState} from 'react';

export default function IndicatorsMap() {

    return (
    <div id="indicators-container">
        <div id="letters-indicator-map">
            <div><h3>Letters indicators map</h3></div>
            <div id="empty" className="indicator"></div>
            <div id="cow" className="indicator"></div>
            <div id="bull" className="indicator"></div>
        </div>
    </div>
    );
  }

