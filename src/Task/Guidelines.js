import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyPage.css';

const Guidelines = () => {
    return (
        <div className="company-page container">
            <div className="row">
            <div className="col-md-6">
          <h2>Welcome to Our Company</h2>
          <p>
            Here at our company, we are committed to delivering high-quality products
            and exceptional services to our customers.
          </p>

          <h3>Company Guidelines</h3>
          <ul>
            <li>Provide excellent customer support.</li>
            <li>Strive for innovation and continuous improvement.</li>
            <li>Respect and value our employees and customers.</li>
          </ul>
        </div>

            </div>
            <div className="row">
                <div className="col-lg-2 ">
                    <h6>Useful Links</h6>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Reference</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                <div className="col-lg-2">
                    <h5>Organization</h5>
                    <ul>
                        <li><a href="#">Organization 1</a></li>
                        <li><a href="#">Organization 2</a></li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-2">
                    <h5>Websites</h5>
                    <ul>
                        <li><a href="#">Website 1</a></li>
                        <li><a href="#">Website 2</a></li>
                    </ul>
                </div>
            </div>

            <div className="row">
                

                
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-2">
                    <h5>Interest</h5>
                    <ul>
                        <li><a href="#">Interest 1</a></li>
                        <li><a href="#">Interest 2</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-2">
                    <h5>Tools</h5>
                    <ul>
                        <li><a href="#">Tool 1</a></li>
                        <li><a href="#">Tool 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Guidelines;
