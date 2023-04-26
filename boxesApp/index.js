const Box = (props) => {
  //  Write your code here.
  const { head, para, name } = props;
  return (
    <div className={head}>
      <p className={para}>{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="boxes-heading">Boxes</h1>
    <div className="container">
      <Box head="box" para="yellow-content" name="small" />
      <Box head="box" para="blue-content" name="medium" />
      <Box head="box" para="pink-content" name="large" />
    </div>
  </div>
);
//    <div className="box">
//       <p className="blue-content">Medium</p>
//     </div>
//     <div className="box">
//       <p className="pink-content">Large</p>
//     </div>

ReactDOM.render(element, document.getElementById("root"));
