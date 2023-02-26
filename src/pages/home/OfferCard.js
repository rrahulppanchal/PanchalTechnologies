import React from "react";

export default function OfferCard() {
  return (
    <div>
      <div className="o-card">
        <div className="o-header"></div>
        <div className="o-info">
          <p className="o-title">Still don't have website for your business</p>
          <p>
            In today's business world, you don't have a website that is front
            face digitally. It's obvious that you are missing so many potential
            customers.
          </p>
        </div>
        <div className="o-footer">
          <p className="o-tag">For more service related enquiry contact on: </p>
          <button type="button" className="o-action">
            +91 6392758956
          </button>
        </div>
      </div>
    </div>
  );
}
