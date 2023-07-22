import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className=" btn md:btn-lg btn-md rounded-full md:p-8 md:px-12 md:pb-12 btn-primary normal-case m-0 mr-8 text-white">
           {children}
          </button>
    );
};

export default PrimaryButton;