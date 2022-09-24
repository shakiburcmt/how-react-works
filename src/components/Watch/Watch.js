import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    // ekhane componentDidMount() function kaj kore
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const previousSteps = steps + 1;
        setSteps(previousSteps)
        // console.log(steps);
    }
// empty array dewa mane dependencies nai [], console.log korle ekbar chalay bondho hoye jabe,, userEffect e dependency set kore dewa jay, [] er moddhe value set kore dile oi value er jonno dependency hobe
    useEffect(() => {
        // ekhane componentWillMount() function kaj kore
        console.log(steps)
    },[steps])

    return (
        <div style={{border:'2px solid green',margin:'5px'}}>
            <h2>Smart Watch</h2>
            <h3>current steps: {steps}</h3>
            <button onClick={increaseSteps}>Vaag....</button>
            <Display name="ekka" steps={steps}></Display>
        </div>
    );
};

export default Watch;