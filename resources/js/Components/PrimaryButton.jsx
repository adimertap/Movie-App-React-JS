import React from 'react';
import PropTypes from 'prop-types';
import "/resources/css/button.css"; 

PrimaryButton.prototypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'warning', 'danger','light-outline','white-outline']),
    process: PropTypes.bool,
    children: PropTypes.node,
}

export default function PrimaryButton({ type = 'submit', className = '', processing, children, variant = "primary" }) {
    return (
        <button
            type={type}
            className={
                `rounded-2xl py-[13px] text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
