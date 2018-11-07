export const setData = (collection, someKey, value) => {
    return {
        type: "SET_DATA",
        collection: collection,
        someKey: someKey,
        value: value
    }
}