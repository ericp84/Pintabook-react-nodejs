
// eslint-disable-next-line import/no-anonymous-default-export
export default function (pseudo='', action) {
    if(action.type === 'addPseudo') {
        return action.pseudo
    } else {
        return pseudo
    }
}