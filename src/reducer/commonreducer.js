import initialstatereducer from "./basereducer"
export default function (state = initialstatereducer(), action) {
    switch (action.type) {
        case "INCREMENT": {
            if (Object.keys(action.payload).length !== 0) {
                console.log("state", state)
                console.log("action", action)
                const localObj = [...state];
                const index = localObj.map(function (e) { return e.id }).indexOf(action.payload.id);
                console.log("index", localObj[index])
                localObj[index].incrementcounter++;
                state = localObj;
            }
            else {
                state = action.payload;
                console.log(action.payload);
            }
            break;
        }
        case "DECREMENT":
            {
                if (Object.keys(action.payload).length !== 0) {
                    const localObj = [...state];
                    const index = localObj.map(x => x.id).indexOf(action.payload.id);
                    console.log("index", localObj[index]);
                    localObj[index].incrementcounter--;
                    state = localObj;
                }
                else {
                    state = action.payload;
                    console.log(action.payload);
                }
                break;
            }
        case "DELETE": {
            if (Object.keys(action.payload).length !== 0) {
                const localstate = [...state];
                console.log("localstate", filteredData);
                const filteredData = localstate.filter(x => x.id !== action.payload.id);
                console.log("filterdata", filteredData);
                state = filteredData;
            }
            else {
                state = action.payload;
                console.log(action.payload);
            }
            break;
        }
        case "RESET": {
            state = initialstatereducer();
        }

        default: state = state
    }
    return state;
}