import React from 'react'

const PureComponent = () => {
    return (
        <div>
            <div className="PureComponent">
                <h2>What is Pure Component ?</h2>

                <div className="content">
                    <p>
                        A pure component, in the context of software development, refers to a specific concept within the React JavaScript library. React is commonly used for building user interfaces, and pure components are a fundamental part of its optimization strategy. <br />

                        A pure component is a type of React component that ensures a consistent rendering behavior. It only re-renders when its props or state change. In other words, if a pure component receives the same props and has the same state as before, it won't re-render, which helps in improving the performance of your application.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default PureComponent
