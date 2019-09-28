export const { format: formatPrice } = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
});
