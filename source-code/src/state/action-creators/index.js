export const fetchProduct = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'fetchid',
            payload: id
        })
    }
}

// export const withdrawMoney = (amount) => {
//     return (dispatch) => {
//         dispatch({
//             type: 'withdraw',
//             payload: amount
//         })
//     }
// }