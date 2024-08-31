 const stripe = Stripe('pk_test_51PtkL2P688iO9GGf6X8l4XPc90m7uDzeJ7xMx0dedEfBFaGXgMWLKiexD7AlZLNnXaysPh9eVErVgPz5hL8X7SFm003DApIjLW');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });
