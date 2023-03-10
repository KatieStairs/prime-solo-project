import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Techonologies used:</h2>
        <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Sagas</li>
        <li>react-speech-recognition</li>
        <li>JavaScript</li>
        <li>Passport</li>
        <li>Postico</li>
        <li>PostgreSQL</li>
        <li>Node</li>
        <li>Express</li>
        <li>Material UI</li>
        <li>Bootstrap</li>
        <li>HTML/CSS</li>
        </ul>
      </div>
      <br/>
      <div>
        <h2>Contact Information:</h2>
        <p><a href="https://www.linkedin.com/in/katie-stairs-695b7780/">LinkedIn</a></p>
        <p><a href="https://github.com/KatieStairs">GitHub</a></p>
      </div>
      <br/>
      <div>
        <h2>Special Thank you:</h2>
        <ul>
          <li>Matt, Dane, Vada and all the instructors here at Prime</li>
          <li>The Vonnegut Cohort</li>
          <li>Mentors</li>
          <li>Wesley, Ryan and all my friends and family</li>
        </ul>
      </div>
      <br/>
      <div>
        <h2>Future Features:</h2>
        <ul>
        <li>Record Audio</li>
        <li>Image Upload</li>
        <li>Pantry Inventory</li>
        <li>Shopping List Generator</li>
        <li>Sharing, liking, and commenting on recipes by other families</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
