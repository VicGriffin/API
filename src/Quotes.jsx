import React, { useState, CSSProperties } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

function Quotes() {
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#646cff");

    const getQuote = async (e) => {
        e.preventDefault();
        setLoading(true);
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setQuote(data.slip.advice);
        setLoading(false);
    }

    return (
        <>
            

            <div className="card">
            <h1>&copy; <a href="https://github.com/VicGriffin" target='_blank' rel='noopener noreferrer'>victor griffin</a> </h1>
            <h2>Advice generator</h2>
            <hr />
                <button onClick={getQuote}>Get Quote</button>
                {loading ? (
                    <ClipLoader color={color} loading={loading} cssOverride={override} size={50} />
                ) : (
                    <p>{quote}</p>
                )}
            </div>
        </>
    );
}

export default Quotes;
