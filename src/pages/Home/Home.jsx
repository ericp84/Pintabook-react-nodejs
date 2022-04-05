import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Layout from '../../Layouts/Layout';

const Home = (props) => {
const [Pins, setPins] = useState([]);
useEffect(()=> {
     const pini = async() => {
        const pinstart = await fetch ('http://192.168.1.105:3000/recuppin')
        const displayPins = await pinstart.json();
        console.log(displayPins.recuppin)
        setPins(displayPins.recuppin)
    }
    pini()
}, [])
let pin = Pins.map((p, i) => {
    return (
                <article className="pin bg-white rounded shadow-lg m-5" key={i}>
                    <div className="mw-100 rounded-top overflow-hidden ">
                        <img src="#" alt="" />
                            <h1 className="h5 p-3 text-secondary text-decoration-none">{p.title}</h1>
                            <p className="text-muted p-3">
                                <small>submitted by</small>
                            </p>
                            <p className="text-break p-3">
                                {p.description}
                            </p>
                    </div>
                </article>
    )
})
    return (
        <>
            <h1 className='text-center m-5'>Découvrez les meilleurs pins du monde {props.pseudo} ! 🌎</h1>
                <div className="row mb-5 bg-light d-flex justify-content-center overflow-hidden">
                    <div className="col-md-8 d-flex flex-wrap justify-content-center boverflow-hidden">
                        {pin}
                    </div>
                </div>
        </>
    );
};

function mapStateToProps(state) {
    return {pseudo: state.pseudo}
}
export default connect (
    mapStateToProps,
    null
)(Home);


