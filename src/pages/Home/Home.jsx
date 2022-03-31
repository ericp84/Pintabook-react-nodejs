import React, {useState, useEffect} from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardImg } from 'reactstrap';

const Home = () => {
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
                <article className="pin bg-white rounded shadow-lg m-5">
                    <div className="mw-100 rounded-top overflow-hidden ">
                        <img src="#" alt="" />
                            <h1 className="h5 p-3 text-secondary text-decoration-none">{p.title}</h1>
                            <p className="text-muted p-3">
                                <small>submitted by</small>
                            </p>
                            <p className="text-break">
                                {p.description}
                            </p>
                    </div>
                </article>


    // <Card key={i}  style={{width: 400}}>
    //     <CardBody>
    //         <CardImg src="#"/>
    //         <CardTitle>{p.title}</CardTitle>
    //         <CardText>{p.description}</CardText>
    //     </CardBody>
    // </Card>
    )
})
    return (
        <>
            <h1 className='text-center m-5'>Découvrez les meilleurs pins du monde ! 🌎</h1>
                <div className="row mb-5 bg-light d-flex justify-content-center">
                    <div className="col-md-6 d-flex">
                        {pin}
                    </div>
                </div>
        </>
    );
};

export default Home;