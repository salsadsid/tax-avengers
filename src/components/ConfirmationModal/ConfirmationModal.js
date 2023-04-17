import React from "react";

const ConfirmationModal = () => {
  return (
    <div className="z-50">
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle z-0">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="confirmation-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
