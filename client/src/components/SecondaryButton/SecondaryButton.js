import React from 'react';

const SecondaryButton = ({children}) => {
    return (
        <button className="btn rounded-full w-full mt-12 btn-primary normal-case m-0 text-lg py-3 shadow-sm pb-10 text-white">
           {children}
          </button>
    );
};

export default SecondaryButton;