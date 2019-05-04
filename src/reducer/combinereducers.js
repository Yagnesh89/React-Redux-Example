import { combineReducers } from "redux"
import initialstatereducer from "./basereducer"
import commonreducer from "./commonreducer"
const parentreducer = combineReducers({ initialstate: initialstatereducer, commonreducer: commonreducer });
export default parentreducer