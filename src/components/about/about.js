import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">
        <div className="row">
          <div className="column large-3 tab-12">
            <img className="s-about__pic" src="images/avatars/user-06.jpg" alt="" />
          </div>
          <div className="column large-9 tab-12 s-about__content">
            <h3>About Me</h3>
            <p>
            An enthusiastic fresher with highly motivated and leadership skills having bachelors of engineering degree in Computer Science and Engineering.
            </p>
            <hr />
            <div className="row s-about__content-bottom">
              <div className="column w-1000-stack">
                <h3>Contact Details</h3>
                <p>
                  Sumit Agrawal <br />
                  Durga Vastaraya, Simrahi Bazar <br />
                  Ward No:05, Pin Code:852111, Bihar, India <br />
                  <a href="tel:+917808787907">+91 7808787907 </a> <br />
                  <a href="mailto:#0">1805351@kiit.ac.in</a>
                </p>
              </div>
              <div className="column w-1000-stack">
                <a href="https://drive.google.com/file/d/1AnV1__BKmSxSWQxEzuFfDOwFJHKtcSWG/view?usp=sharing" className="btn btn--download">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" style={{fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: ''}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z" /><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z" /></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div> 
      </section>
     
    );
  }
}