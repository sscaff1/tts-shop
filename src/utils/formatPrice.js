function formatPrice(price) {
  return parseFloat(price).toLocaleString('en-US', {
    currency: 'USD',
    minimumFractionDigits: 2,
    style: 'currency',
  });
}

export default formatPrice;
