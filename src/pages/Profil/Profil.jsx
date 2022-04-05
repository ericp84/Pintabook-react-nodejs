import React, {useState} from 'react';

import {connect} from 'react-redux'

const Profil = (props) => {
    console.log(props.pseudo)
    return (
        <div>
            <h1>Hello {props.pseudo}</h1>
        </div>
    );
};

function mapStateToProps(state) {
    return {pseudo: state.pseudo}
}
export default connect (
    mapStateToProps,
    null
)(Profil);

