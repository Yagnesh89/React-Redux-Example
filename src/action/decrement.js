const decrement = (obj) => {
    return {
        type: "DECREMENT",
        payload: obj
    };
}
export default decrement