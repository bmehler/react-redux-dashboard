import React from 'react';
import DemoAlert from './components/DemoAlert';
import MainSection from './components/MainSection'

const App = () => {
    return (
        <div className="container-fluid demo">
            <div className="container text-center">
                <DemoAlert />
            </div>
            <div className="main-section">
                <MainSection/>
            </div>
        </div>
    )
}

export default App