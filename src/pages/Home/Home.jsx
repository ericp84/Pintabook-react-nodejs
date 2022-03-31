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
    <Card key={i} >
        <CardBody>
            <CardImg src={p.URL}/>
            <CardTitle>{p.title}</CardTitle>
            <CardText>{p.description}</CardText>
        </CardBody>
    </Card>
    )
})
    return (
        <>
        {pin}
        </>
    );
};

export default Home;