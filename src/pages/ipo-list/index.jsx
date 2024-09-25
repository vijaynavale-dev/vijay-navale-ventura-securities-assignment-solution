import "./style.css";
import ipoList from "./data";
import IpoListItem from "../../components/ipo-list-item";

const IpoList = () => {
  

  return (
    <section className="my-container ipo">
      <div className="ipo__header-wrapper">
        <span className="ipo__header-text">Company/Issue date</span>
        <span className="ipo__header-text">Issue size</span>
        <span className="ipo__header-text">Price range</span>
        <span className="ipo__header-text">Min invest/qty</span>
        <span className="ipo__header-text"></span>
      </div>
      {ipoList.map(
        (companyDetails) => (
          <IpoListItem key={companyDetails?.companyName} companyDetails={companyDetails}/>
        )
      )}
    </section>
  );
};

export default IpoList;
