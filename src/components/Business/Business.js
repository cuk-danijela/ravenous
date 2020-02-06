import React from 'react';
import './Business.css';
import { MdLocationOn, MdLocationCity, MdLocationSearching } from "react-icons/md";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <a target='_blank' rel="noopener" href={this.props.business.siteUrl}><img src={this.props.business.imageSrc} alt={this.props.business.name} /></a>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p><MdLocationOn /> {this.props.business.address}</p>
            <p><MdLocationCity/> {this.props.business.city}</p>
            <p><MdLocationSearching/> {`${this.props.business.state} | ${this.props.business.zipCode}`}</p>
          </div>
          <hr/>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;