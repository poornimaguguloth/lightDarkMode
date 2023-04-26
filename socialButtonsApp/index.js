const Button = (props) => {
  //  Write your code here.
  const { className, content } = props;
  return <button className={className}> {content} </button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="social-buttons-heading">Social Buttons</h1>
    <div className="three-buttons">
      <Button className="like-button" content="like" />
      <Button className="comment-button" content="comment" />
      <Button className="share-button" content="share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
