export default function (token='', action) {
    if(action.type === 'addToken') {
        console.log("token reducers", action.token)
        return action.token
    } else {
        return token
    }
}