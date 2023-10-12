// App.js
import React from 'react';
import data from './data.json'; // Your JSON data here
import './team.css';

const Card = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2><br></br>
      <div className="card-container">
        {items.map(item => (
          <div className="col-sm-6 col-lg-3 my-auto" key={item.id}>
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
              </div>
              <div className="box-desc">
                <b><h4>{item.name}</h4></b>
                <h5>{item.vertical}</h5>

                <ul id="ul" className="social">
                  <li><a href={item.facebook} target="_blank" rel="noopener noreferrer" ><i className="fa fa-facebook"></i></a></li>
                  &nbsp;&nbsp;<li><a href={item.instagram} target="_blank" rel="noopener noreferrer" ><i className="fa fa-instagram"></i></a></li>
                  &nbsp;&nbsp;<li><a href={item.email} target="_blank" rel="noopener noreferrer" ><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <><br></br>
      <div className="card bg-light mb-3 mx-auto rounded-4 w-180" style={{ maxWidth: "80%" }}>
        <div className="card-body">
          <h3 className="card-title"><b>Meet Our Team</b></h3>
          <p className="card-text">
            You can access information about the current members of the Public Policy and Opinion Cell team through the below links. From these links, you can find contact information for each team member, allowing you to reach out to the appropriate person based on your needs. This information can be helpful in connecting with the Public Policy and Opinion Cell team and accessing their resources and support.
          </p>
        </div>
      </div>
<br></br>
      <div className="center-content"><br></br>
        <div>
          <h2>FACULTY ADVISOR</h2><br></br>
          <div className="card-container">

            <div className="col-sm-6 col-lg-3 my-auto">
              <div className="box shadow-sm p-4">
                <div className="image-wrapper mb-3">
                  <img className="img-fluid" src="faculty.jpg" alt="..." />
                </div>
                <div className="box-desc">
                  <b><h4>Dr. Pradeep Swarnakar</h4></b>


                  <ul id="ul" className="social">
                    <li><a href="https://www.linkedin.com/in/pradip-swarnakar-168b9115/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-linkedin"></i></a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card title="Coordinators" items={data.coordi} /><br></br><br></br><br></br>
      <Card title="Managers" items={data.manager} />
    </>
      );
}

export default App;
