// Create objects for each customer with their prescription, price per refill, refills, subscription status, and coupon status.
const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
  };
  
  
  // Create objects for each customer with their prescription, price per refill, refills, subscription status, and coupon status.
  const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
  };
  
  
  // Create objects for each customer with their prescription, price per refill, refills, subscription status, and coupon status.
  const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
  };
  
  
  // Create a function that calculates customers' total refill price.
  function calculateRefillTotal(customer) {
    return customer.pricePerRefill * customer.refills;
  }
  
  
  // Create a function to calculate 25% discount per customers' subscription.
  function calculateSubscriptionDiscount(customer, total) {
    if (customer.subscription) {
      return total - total * 0.25;
    } else {
      return total;
    }
  }
  
  
  // Create a function to calculate $10 discount per customers' subscription.
  function calculateCouponDiscount(customer, discountedCost) {
    if (customer.coupon) {
      return discountedCost - 10;
    } else {
      return discountedCost;
    }
  }
  
  
  // Creat a function to calculate total discount provided.
  function calculateGrandTotal(customer) {
    const refillTotal = calculateRefillTotal(customer);
    const subscriptionDiscountedTotal = calculateSubscriptionDiscount(
      customer,
      refillTotal
    );
    const couponDiscountedTotal = calculateCouponDiscount(
      customer,
      subscriptionDiscountedTotal
    );
    return couponDiscountedTotal;
  }
  
  
  // Create a function to calculate grandtotal for all customers.
  function newFunction() {
    const timmyGrandTotal = calculateGrandTotal(timmy);
    const sarahGrandTotal = calculateGrandTotal(sarah);
    const rockyGrandTotal = calculateGrandTotal(rocky);
    return { timmyGrandTotal, sarahGrandTotal, rockyGrandTotal };
  }


// Get grand totals for all customers
const grandTotals = newFunction();


// Print results
console.log(`Timmy => "Your grand total is $${grandTotals.timmyGrandTotal}".`);
console.log(`Sarah => "Your grand total is $${grandTotals.sarahGrandTotal}".`);
console.log(`Rocky => "Your grand total is $${grandTotals.rockyGrandTotal}".`);
