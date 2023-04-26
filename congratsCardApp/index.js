const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="congratulations-heading">congratulations</h1>
    <div className="profile-container">
      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />

      <h1 className="profile-name">Kiran V</h1>
      <p className="content">
        Vishnu Institute of Computer Educational and Technology Bhimavaram
      </p>

      <img
        className="profile-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
