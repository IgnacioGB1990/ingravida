import React from 'react';

// import FormInput from "../form-input/form-input.component"
// import CustomButton from "../custom-button/custom-button.component"

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils"

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
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required />
          <label>Correo</label>

          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Contraseña</label>

          <input type="submit" value="Submit Form" />
        </form>
      </div >
    )
  }

}

export default SignIn;