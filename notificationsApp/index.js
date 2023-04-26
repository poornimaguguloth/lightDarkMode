const Notification = (props) => {
  //  Write your code here.
  const { className, name, src } = props;
  return (
    <div className={`card ${className}`}>
      <img src={src} className="icon" />
      <p className="heading">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="main-heading">Notifications</h1>
    <Notification
      className="card-blue"
      name="Information Message"
      src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="card-green"
      name="Success Message"
      src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="card-yellow"
      name="Warning Message"
      src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="card-red"
      name="Error Message"
      src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
