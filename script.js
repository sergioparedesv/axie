class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 3 };

    this.Turn = this.Turn.bind(this);
    this.Click = this.Click.bind(this);
    this.Decrease = this.Decrease.bind(this);
    this.Restart = this.Restart.bind(this);
  }

  Turn() {
    this.setState(state => ({
      count: state.count + 2 }));

  }


  Click() {
    this.setState(state => ({
      count: state.count + 1 }));
  }

  Decrease() {
    this.setState(state => ({
      count: state.count - 1 }));

  }
  Restart() {
    this.setState(state => ({
      count: 3 }));

  }


  render() {
    let count = this.state.count;
    return /*#__PURE__*/React.createElement("div", { className: "container-fluid" }, /*#__PURE__*/
    React.createElement("h1", null, "Energias contrincante: ", count,), /*#__PURE__*/
    React.createElement("hr", null), /*#__PURE__*/
    React.createElement("div", { className: "well" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col-md-3 col-xs-6" }, /*#__PURE__*/React.createElement("button", { className: "btn btn-block btn-primary", onClick: this.Turn }, " Turn ")), /*#__PURE__*/
    React.createElement("div", { className: "col-md-3 col-xs-6" }, /*#__PURE__*/React.createElement("button", { className: "btn btn-block btn-success", onClick: this.Click }, " + ")), /*#__PURE__*/
    React.createElement("div", { className: "col-md-3" }, /*#__PURE__*/React.createElement("button", { class: "btn btn-block btn-danger", onClick: this.Decrease }, " - ")), /*#__PURE__*/
    React.createElement("div", { className: "col-md-3 col-xs-6" }, /*#__PURE__*/React.createElement("button", { className: "btn btn-block btn-primary", onClick: this.Restart }, "Reset")))));



  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 6 };

    this.Turn = this.Turn.bind(this);
    this.Click = this.Click.bind(this);
    this.Decrease = this.Decrease.bind(this);
    this.Restart = this.Restart.bind(this);
  }

  Turn() {
    this.setState(state => ({
      count: state.count + 3 }));

  }

  Click() {
    this.setState(state => ({
      count: state.count + 1 }));

  }
  Decrease() {
    this.setState(state => ({
      count: state.count - 1 }));

  }



 
  Restart() {
    this.setState(state => ({
      count: 6 }));

  }


  render() {
    let count = this.state.count;
    return /*#__PURE__*/React.createElement("div", { className: "container-fluid" }, /*#__PURE__*/
    React.createElement("h1", null, "Cartas contrincante: ", count), /*#__PURE__*/
    React.createElement("hr", null), /*#__PURE__*/
    React.createElement("div", { className: "well" }, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("div", { className: "col-md-3 col-xs-6" }, /*#__PURE__*/React.createElement("button", { className: "btn btn-block btn-primary", onClick: this.Turn }, " Turn ")), /*#__PURE__*/
    React.createElement("div", { className: "col-md-3 col-xs-6" }, /*#__PURE__*/React.createElement("button", { className: "btn btn-block btn-success", onClick: this.Click }, " + ")), /*#__PURE__*/
    React.createElement("div", { className: "col-md-3" }, /*#__PURE__*/React.createElement("button", { class: "btn btn-block btn-danger", onClick: this.Decrease }, " - ")), /*#__PURE__*/
    React.createElement("div", { className: "col-md-3 col-xs-6" }, /*#__PURE__*/React.createElement("button", { className: "btn btn-block btn-primary", onClick: this.Restart }, "Reset")))));



  }}

ReactDOM.render( /*#__PURE__*/React.createElement(Card, null), document.getElementById("card"));