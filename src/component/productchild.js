import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
// class ProductComp extends Component {
//   render() {
function ProductChild(props) {
    const { incrementcounter, obj, onIncrement, deleteprod } = props;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <span class="badge m-2 badge-primary">{incrementcounter}</span>
                    <button
                        class="btn btn-secondary btn-sm m-2"
                        onClick={() => onIncrement(obj)}
                    >
                        Increment
          </button>
                    <button
                        class="btn-danger btn-sm m-2"
                        onClick={() => deleteprod(obj)}
                    >
                        Delete
          </button>
                </div>
            </div>
        </React.Fragment>
    );
}
//   }
// }

export default ProductChild;
