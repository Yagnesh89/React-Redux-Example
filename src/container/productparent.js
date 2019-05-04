import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProductChild from "../component/productchild";
import { connect } from "react-redux"
import incrementaction from "../action/increment"
import deletion from "../action/delete"
import reset from "../action/reset"
import { bindActionCreators } from "redux";

// const initialState = {
//   objprod: [
//     { id: 0, incrementcounter: 0 },
//     { id: 1, incrementcounter: 0 },
//     { id: 2, incrementcounter: 0 }
//   ]
// };

class Productparent extends Component {


  handleIncrementClick = (obj) => {
    this.props.incrementaction(obj);
  }

  handleDelete = (obj) => {
    this.props.deletion(obj);
  }
  handleReset = () => {
    this.props.reset();
  }

  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div className="row">
            <span class="badge m-2 badge-primary">
              {this.props.initialstate.filter(x => x.incrementcounter > 0).length}
            </span>
            <button
              className="btn btn-primary m-2"
              onClick={() => this.handleReset()}
            >
              Reset
            </button>
          </div>
          {this.props.initialstate.map(x => (
            <ProductChild
              key={x.id}
              onIncrement={this.handleIncrementClick}
              incrementcounter={x.incrementcounter}
              deleteprod={this.handleDelete}
              obj={x}
            />
          ))}
          {/* <ProductComp
          onIncrement={this.handleIncrementClick}
          incrementcounter={this.state.incrementcounter}
        /> */}
        </div>
      </React.Fragment>
    );
  }
}

function mapstatetoprops(state) {
  console.log("map state to props", state)
  return { initialstate: state.commonreducer };
}

function mapdispatchtoprops(dispatch) {
  return bindActionCreators(
    {
      incrementaction: incrementaction,
      deletion: deletion,
      reset: reset,
    }, dispatch);
}

export default connect(mapstatetoprops, mapdispatchtoprops)(Productparent);
