import React, { useState } from 'react'

const HighOrderFunction = () => {
    return (
        <div>
            <div className="HighOrderFunction">
                <h2>What is High Order Function (HOC) ?</h2>

                <div className="container">
                    <HighOrderFunctionCard1 data={Counter} />
                    <HighOrderFunctionCard2 data={Counter} />
                    <HighOrderFunctionCard3 data={Counter} />
                </div>

                <div className="content">
                    <p>A Higher-Order Function (HOC) is a concept from functional programming that refers to a function that takes one or more functions as arguments and/or returns a function as its result. In other words, it's a function that operates on other functions. <br />

                        Higher-order functions are a fundamental concept in functional programming languages and are also widely used in languages that support functional programming paradigms. They enable you to write more reusable and modular code by abstracting common patterns and behaviors into functions.</p>
                </div>
            </div>
        </div>
    )
}



function HighOrderFunctionCard1(props) {
    return (
        <h3 className="card">
            Card 1
            <props.data />
        </h3>
    );
}
function HighOrderFunctionCard2(props) {
    return (
        <h3 className="card">
            Card2
            <props.data />
        </h3>
    );
}
function HighOrderFunctionCard3(props) {
    return (
        <h3 className="card">
            Card 3 <props.data />
        </h3>
    );
}
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Update</button>
        </div>
    );
}

export default HighOrderFunction
