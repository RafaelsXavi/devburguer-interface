import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe.js has not yet loaded.');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'accordion',
  };

  return (
    <>
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
          className="button"
        >
          <span id="button-text">
            {isLoading ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              'Pay now'
            )}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
      <div id="dpm-annotation">
        <p>
          Payment methods are dynamically displayed based on the customer's
          location and other factors. If you don't see your preferred payment
          method, please check back later or try a different one.&nbsp;
          <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer">
            Preview payment methods by transaction
          </a>
        </p>
      </div>
    </>
  );
}
