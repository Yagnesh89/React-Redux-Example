const deletion = (obj) => {
    return {
        type: "DELETE",
        payload: obj
    };
}
export default deletion