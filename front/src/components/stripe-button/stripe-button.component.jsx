import React from 'react'
import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {
  // Stripe caveat: it wants price in cents. We multiply our values by 100:

  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51HPlXzHxByj872W2bzkhRijlDaplUfusmkkP8X9hwtYa8UYKxdQKQ9XkWIr04jrBJq1wR36v5rKMfe1baloo2elJ00UMykkhsK"

  const onToken = token => {
    console.log("This is the token you would pass to your back for the charge : ", token)
    alert("Pago de prueba realizada con éxito")
  }


  return (
    //Check out https://github.com/azmenak/react-stripe-checkout for more configurable tabs.
    <StripeCheckout

      label="Paga ahora"
      name="Ingrávida"
      billingAddress=""
      shippingAddress
      currency="EUR"
      image="https://res.cloudinary.com/djkhnzte2/image/upload/q_auto/v1604150486/_IGB2881_1_ibl8zv.jpg"
      description={`Tú total es de ${price} €`}
      amount={priceForStripe}
      panelLabe="Pago"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
