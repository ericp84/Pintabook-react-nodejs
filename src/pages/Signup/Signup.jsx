import React from 'react';

const Signup = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6 mx-auto m-5">
                    <h1 className='text-center mb-5'>Créez votre compte 🗝️</h1>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <label for="exampleInputEmail1">Prénom 📛</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Prénom"/>
                            </div>
                            <div className="col-md-6">
                                <label for="exampleInputEmail1">Nom 📛</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nom"/>
                            </div>
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Adresse mail 📧</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse mail"/>
                        </div>
                        <div class="form-group mt-3">
                            <label for="exampleInputPassword1">Mot de passe 🔐</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" class="btn btn-primary mt-5">Créer le compte</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;