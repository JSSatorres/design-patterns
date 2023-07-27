function createSaleContext(strategy) {
  function calculate(amount) {
    return strategy(amount);
  }

  function setStrategy(newStrategy) {
    strategy = newStrategy;
  }

  return {
    setStrategy,
    calculate,
  };
}

function createRegularSaleStrategy(tax) {
  return function calculate(amount) {
    return amount + amount * tax;
  };
}

function createDiscountSaleStrategy(tax, discount) {
  return function calculate(amount) {
    return amount + amount * tax - discount;
  };
}

function createForeignSaleStrategy() {
  function getDollarPrice() {
    return 20;
  }

  return function calculate(amount) {
    return amount * getDollarPrice();
  };
}

const regularSaleStrategy = createRegularSaleStrategy(0.1); // 10% tax
const discountSaleStrategy = createDiscountSaleStrategy(0.1, 50); // 10% tax, $50 discount
const foreignSaleStrategy = createForeignSaleStrategy();

const saleContext = createSaleContext(regularSaleStrategy);
console.log(saleContext.calculate(100)); // Output: 110 (100 + 10% tax)

saleContext.setStrategy(discountSaleStrategy);
console.log(saleContext.calculate(100)); // Output: 60 (100 + 10% tax - $50 discount)

const foreignContext = createSaleContext(foreignSaleStrategy);
console.log(foreignContext.calculate(100)); // Output: 2000 (100 * 20, using fixed dollar price)