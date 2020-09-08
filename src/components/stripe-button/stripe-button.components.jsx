import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HOxntCzeAWJ3msc62U1DGjUXIU9XUgrBmYbTli0zeFfyiXs2xg3ysSsitzomTVyu7tZHOh6RKIOx1hwlSffsQtp00QRvZ1tOg'
    
const onToken = token => {
    console.log(token);
    alert('Payment Successful');
}
    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    );
};
export default StripeCheckoutButton;