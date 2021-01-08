import React from 'react';

import FormInput from "../form-input/form-input.component"
import CustomButton from "../../shop/custom-button/custom-button.component"

import { signInWithGoogle } from "../firebase/firebase.utils"

import "./sign-in.styles.scss"

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

  }

  // handleSubmit = async event => {
  //   event.preventDefault();

  //   const { email, password } = this.state;

  //   try {
  //     await auth.signInWithEmailAndPassword(email, password)
  //     this.state({ email: "", password: "" })
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  // handleChange = event => {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value })
  // }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" })
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        <h2>Ya tienes una cuenta</h2>
        <span>Inicia sesión con tu correo y contraseña</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="correo"
            required />


          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="contraseña"
            required
          />


          <CustomButton type="submit" >Iniciar sesión</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            {" "}
            Inicio con Google {" "}
          </CustomButton>
        </form>
      </div >
    )
  }

}

export default SignIn;