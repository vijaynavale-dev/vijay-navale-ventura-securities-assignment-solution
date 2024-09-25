import { useNavigate } from 'react-router-dom';

const IpoListItem = ({ companyDetails }) => {
  const navigate = useNavigate();

  const onGetDetails = () => {
    navigate("/ipo-detail");
  };

  const {
    companyName,
    issueDate,
    companyLogo,
    issueSize,
    priceRange,
    minInvest,
    quantity,
  } = companyDetails || {}
  
  return (
    <div className="ipo__list-item" key={companyName}>
      <div className="ipo__comp-name-wrapper">
        <img src={companyLogo} alt="Company logo" />
        <div>
          <span className="ipo__item-text">{companyName}</span>
          <br />
          <span className="ipo__item-sub-text">{issueDate}</span>
        </div>
      </div>
      <span className="ipo__item-text">{issueSize}</span>
      <span className="ipo__item-text">{priceRange}</span>
      <div>
        <span className="ipo__item-text">{minInvest}</span> <br />
        <span className="ipo__item-sub-text">{quantity}</span>
      </div>
      <button className="ipo__item-btn" onClick={onGetDetails}>
        Get Details
      </button>
    </div>
  )
}

export default IpoListItem