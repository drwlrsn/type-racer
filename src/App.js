import React, { useState, useRef, useEffect } from 'react';
import { TypeInput } from './TypeInput';
import './button.css';

function App() {
    const [started, setStarted] = useState(false);
    const [countDown, setCountDown] = useState(3);
    const [showCountDown, setShowCountDown] = useState(false);
    const interval = useRef(null);

    useEffect(() => {
        if (countDown <= 0) {
            clearInterval(interval.current);
            setStarted(true);
        }
    }, [interval, countDown, setStarted]);

    const onStartHandler = () => {
        setShowCountDown(true);
        interval.current = setInterval(() => {
            setCountDown((v) => v - 1);
        }, 1000);
    };

    
    return (
        <main
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                flexDirection: 'column',
            }}
        >
            <TypeInput started={started} />
            <div>
                <button
                    onClick={onStartHandler}
                    className="btn-grad"
                    style={{
                        display: 'block',
                        padding: '20px 60px',
                        fontSize: '18px',
                        marginTop: '20px',
                        color: 'white',
                        textTransform: 'uppercase',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    {showCountDown && countDown > 0
                        ? `Starting in ${countDown}`
                        : 'Start'}
                </button>
            </div>
        </main>
    );
}

export default App;
