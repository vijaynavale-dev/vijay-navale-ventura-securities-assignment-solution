import { useNavigate } from "react-router-dom";
import "./style.css";
import React from "react";

const IpoDetail = () => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate("/");
  };

  return (
    <section className="my-container ipoDetail">
      <div className="ipoDetail__breadcrumb">
        <span onClick={onBack} style={{cursor: 'pointer'}}>Home {">"}</span>
        <span>{" "}Market Watch</span>
      </div>
      <div className="ipoDetail__header">
        <div className="ipoDetail__company-name-wrapper">
          <img width="30" height="30" src="https://img.icons8.com/ios/50/circled-left--v1.png" alt="Back" onClick={onBack} style={{cursor: 'pointer'}}/>
          <img width="50" height="50" src="https://placehold.jp/40x40" alt="Company logo" className="ipoDetail__company-logo" />
          <div>
            <h1 className="ipoDetail__company-name">OYO</h1>
            <span className="ipoDetail__company-subtext">OYO Private Limited</span>
          </div>
        </div>
        <div className="ipoDetail__btn-wrapper">
          <img width="30" height="30" src="https://img.icons8.com/ios/50/download--v1.png" alt="download--v1" style={{ marginRight: '2rem' }} />
          <button className="ipo__item-btn">
            Apply now
          </button>
        </div>
      </div>
      <div className="ipoDetail__details-wrapper">
        <h4 className="card--title">IPO details</h4>
        <div className="ipoDetail__details-category-wrapper">
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Issue size</span>
            <span className="ipoDetail__category-desc">₹3600 - 3700 Cr</span>
          </div>
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Price range</span>
            <span className="ipoDetail__category-desc">₹100 - 200 Cr</span>
          </div>
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Minimum amount</span>
            <span className="ipoDetail__category-desc">₹ 50,000</span>
          </div>
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Lot size</span>
            <span className="ipoDetail__category-desc">150 shares/lots</span>
          </div>
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Issue date</span>
            <span className="ipoDetail__category-desc">12 dec - 15 dec 2022</span>
          </div>
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Listed on</span>
            <span className="ipoDetail__category-desc">15 Dec 2022</span>
          </div>
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Listed Price</span>
            <span className="ipoDetail__category-desc">₹150</span>
          </div>
          <div className="ipoDetail__category-item">
            <span className="ipoDetail__category-title">Listed gains</span>
            <span className="ipoDetail__category-desc">₹10 <span>(10.0%)</span></span>
          </div>
        </div>
      </div>
      <div className="ipoDetail__timeline">
        <h4 className="card--title">IPO details</h4>
        <div className="ipoDetail__timeline-wrapper">
          <div className="ipoDetail__timeline-item">
            <span className="ipoDetail__timeline-tick"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/50/FFFFFF/checkmark.png" alt="checkmark" /></span>
            <div>

              <h5>Bidding starts</h5>
              <p>12 Dec 2023</p>
            </div>
          </div>
          <div className="ipoDetail__timeline-item">
            <span className="ipoDetail__timeline-tick"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/50/FFFFFF/checkmark.png" alt="checkmark" /></span>
            <div>

              <h5>Bidding ends</h5>
              <p>12 Dec 2023</p>
            </div>
          </div>
          <div className="ipoDetail__timeline-item">
            <span className="ipoDetail__timeline-tick"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/50/FFFFFF/checkmark.png" alt="checkmark" /></span>
            <div>

              <h5>Allootment finalization</h5>
              <p>12 Dec 2023</p>
            </div>
          </div>
          <div className="ipoDetail__timeline-item">
            <span className="ipoDetail__timeline-tick"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/50/FFFFFF/checkmark.png" alt="checkmark" /></span>
            <div>

              <h5>Refund initialization</h5>
              <p>12 Dec 2023</p>
            </div>
          </div>
          <div className="ipoDetail__timeline-item">
            <span className="ipoDetail__timeline-tick"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/50/FFFFFF/checkmark.png" alt="checkmark" /></span>
            <div>
              <h5>Demat transfer</h5>
              <p>12 Dec 2023</p>
            </div>
          </div>
          <div className="ipoDetail__timeline-item">
            <span className="ipoDetail__timeline-tick"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/50/FFFFFF/checkmark.png" alt="checkmark" /></span>
            <div>

              <h5>listing date</h5>
              <p>12 Dec 2023</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ipoDetail__about">
        <h4 className="card--title" style={{marginBottom: '1rem'}}>About the company</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolores, placeat ipsa deleniti soluta error excepturi voluptatibus odit debitis repellat perspiciatis eligendi! Eius sunt amet magni voluptatum, sequi similique consequuntur dolores repellat quia sapiente, vero corrupti cumque, eaque quas minus doloremque. Quaerat maiores autem in a assumenda mollitia explicabo quibusdam?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolores, placeat ipsa deleniti soluta error excepturi voluptatibus odit debitis repellat perspiciatis eligendi! Eius sunt amet magni voluptatum, sequi similique consequuntur dolores repellat quia sapiente, vero corrupti cumque, eaque quas minus doloremque. Quaerat maiores autem in a assumenda mollitia explicabo quibusdam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nobis illum enim, modi eos neque.</p>
      </div>
    </section>
  )
};

export default IpoDetail;
