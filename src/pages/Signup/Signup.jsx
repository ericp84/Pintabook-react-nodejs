import React, {useState} from 'react';
import {Badge} from 'reactstrap';

const Signup = () => {
    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[errors, setErrors] = useState([]);

    let handleRegister = async () => {
        const user = await fetch('http://192.168.1.105:3000/signup', {
            method: "POST",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: `firstname=${firstname}&lastname=${lastname}&email=${email}&password=${password}`
        })
        const userUp = await user.json();

        if(!userUp.result) {
            setErrors(userUp.error)
        }
    }
    let errorsUp = errors.map((err, i)=> {
        return <Badge className="text-center mt-5" color="danger" key={i}>{err}</Badge>
    })
console.log(firstname, lastname, password, email)
    return (
        <>
            <div className="row">
                <div className="col-md-6 mx-auto m-5">
                    <h1 className='text-center mb-5'>Créez votre compte 🗝️</h1>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="firstname">Prénom 📛</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="firstname" 
                                    name="firstname"  
                                    placeholder="Prénom"
                                    onChange={(e)=>setFirstname(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastname">Nom 📛</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="lastname" 
                                    name="lastname" 
                                    placeholder="Nom"
                                    onChange={(e)=>setLastname(e.target.value)}
                                    />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="email">Adresse mail 📧</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                name="email" 
                                placeholder="Adresse mail" 
                                autoComplete='username'
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="password">Mot de passe 🔐</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password" 
                                placeholder="Mot de passe" 
                                autoComplete='current-password'
                                onChange={(e)=>setPassword(e.target.value)}
                                />
                        </div>
                        <div className="d-grid gap-2">
                        {errorsUp}

                            <button type="submit" className="btn btn-primary mt-5" onClick={()=>handleRegister()}>Créer le compte</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;