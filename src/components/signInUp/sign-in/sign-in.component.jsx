import React from 'react';

import FormInput from "../form-input/form-input.component"
import CustomButton from "../../shop/custom-button/custom-button.component"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import { auth, signInWithGoogle } from "../firebase/firebase.utils"

import "./sign-in.styles.scss"

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

  }



  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;


    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2 className="have-account">Ya tienes una cuenta</h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="Correo"
            required />


          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Contraseña"
            required
          />


          <CustomButton type="submit" >Iniciar sesión</CustomButton>
          <div className="google-button" onClick={signInWithGoogle}>Inicio con Google{" "}
            <FontAwesomeIcon icon={faGoogle} className="google-style" />
          </div>


          {/* <form className="google-button" type="button" onClick={signInWithGoogle}>
            {" "}
            Inicio con Google {" "}
          </form> */}
        </form>
      </div >
    )
  }

}

export default SignIn;