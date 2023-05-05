import React from 'react';

const Button = ({text}) => {
    const buttonStyle = {
        backgroundColor: "#60B058",
        borderRadius: "50px",
        color: "#FFFFFF",
        fontSize: "14px",
        cursor: "pointer",
        padding: "5px 10px",
        outline: "none",
        border: "none",
    };

    return (
        <button style={buttonStyle}>
            {text}
        </button>
    );
};

export default Button;