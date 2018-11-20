import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import FormElement from "../../components/FormElement";
import "./style.css";
import axios from "axios";

var style = {
  base: {
    color: "#32325d",
    lineHeight: "18px",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    },
    border: "solid 1px #333333"
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

class CheckoutForm extends Component {
  state = {
    etage: "",
    digicode: "",
    adresse: "",
    codePostal: "",
    ville: "",
    telephone: "",
    instructions: ""
  };
  onChange(event, element) {
    this.setState({
      [element]: event.target.value
    });
  }
  handleSubmit = event => {
    // On empêche le formulaire d'être envoyé grâce à `event.preventDefault();`
    event.preventDefault();
    console.log("coucou");
    // On utilise la fonction createToken pour envoyer la demande de Tokenization à Stripe
    this.props.stripe
      .createToken({
        name: "Xavier Colombel",
        address_line1: "42, rue des Orteaux"
      })
      .then(({ token }) => {
        console.log("Token:", token);
        // On poste l'objet Token à notre back-end
        axios
          .post("https://560b129f.ngrok.io/api", {
            token: token,
            total: this.props.total.toFixed(2) * 100
          })
          .then(function(response) {
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
  };

  render() {
    return (
      <form
        className="checkout-form"
        onSubmit={event => this.handleSubmit(event)}
      >
        <div className="checkout-elements-group">
          <FormElement
            label="Etage et numéro d'appartement"
            placeholder="ex: Aptn°15"
            element="input"
            type="text"
            onChange={event => this.onChange(event, "etage")}
          />
          <FormElement
            label="Digicode"
            placeholder="ex: 8123"
            element="input"
            type="text"
            onChange={event => this.onChange(event, "digicode")}
          />
        </div>
        <div className="checkout-elements-group">
          <FormElement
            label="Adresse"
            placeholder="ex: 100 rue de Rivoli"
            element="input"
            type="text"
            hint="inclus le nom de votre rue et de votre bâtiment."
            onChange={event => this.onChange(event, "adresse")}
          />
        </div>
        <div className="checkout-elements-group">
          <FormElement
            label="Code postal"
            placeholder="ex: 55001"
            element="input"
            type="text"
            onChange={event => this.onChange(event, "codePostal")}
          />
          <FormElement
            label="Ville"
            placeholder="ex: Paris"
            element="input"
            type="text"
            onChange={event => this.onChange(event, "ville")}
          />
        </div>
        <div className="checkout-elements-group">
          <FormElement
            label="Téléphone"
            placeholder="ex: 09 77 54 54 34"
            element="input"
            type="text"
            onChange={event => this.onChange(event, "telephone")}
          />
        </div>
        <div className="checkout-elements-group">
          <FormElement
            label="Instructions pour votre livreur"
            placeholder="ex: C'est la porte noire près de l'animalerie."
            element="textarea"
            onChange={event => this.onChange(event, "instructions")}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div
            style={{
              border: "solid 1px #333333",
              padding: 10,
              borderRadius: 3
            }}
          >
            <CardElement style={style} />
          </div>
        </div>
        <button
          className="submit-button"
          type="submit"
          style={{
            margin: "20px",
            lineHeight: "20px"
          }}
        >
          Confirmer la commande
        </button>
      </form>
    );
  }
}
// On injecte les fonctionnalités de Stripe dans CheckoutForm grâce à la logique de High Order Component (HOC)
export default injectStripe(CheckoutForm);
