import React from 'react';

const Login = () => {
    return (
        <>
        <h1 className='text-center mt-5'>Connectez vous 😀</h1>
        <div className="row">
            <div className="col-md-6 mx-auto m-5">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Adresse mail</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse mail"/>
                    </div>
                    <div class="form-group mt-5">
                        <label for="exampleInputPassword1">Mot de passe</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="form-group mb-3 mt-3">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="remember_me" id="remember_me"/>
                                <label for="remember_me" class="form-check-label">Souvenez vous de moi</label>
                            </div>
                        </div>
                        <a href="/">Mot de passe oublié ?</a>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" class="btn btn-primary mt-5">Connexion</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default Login;