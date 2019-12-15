import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            {/* <img src={profile.user.avatar} alt="" className="rounded-circle" /> */}
            <img src="/img/germany.png" alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            {/* <h3>{profile.user.name}</h3> */}
            <h3>{profile.ManufacturerName}</h3>
            <p>
              {profile.status}{' '}
              {isEmpty(profile.CountryName) ? null : (
                <span>at {profile.CountryName}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.CountryCode}</span>
              )}
            </p>
            <Link to={`/profile/${profile.ManufacturerID}`} className="btn btn-info">
              View Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Details</h4>
            <ul className="list-group">
              {/* {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))} */}
                <li className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  ManufactureID: {profile.ManufacturerUID}
                </li>
                <li className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  CountryCodeISO: {profile.CountryCodeISO}
                </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
