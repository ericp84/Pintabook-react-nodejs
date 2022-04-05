/* eslint-disable import/no-anonymous-default-export */

export default function (pseudo='', action) {
    if(action.type === 'addPseudo') {
        console.log("pseudo reducers", action.pseudo)
        return action.pseudo
    } else {
        return pseudo
    }
}