import { Cart, LineProduct } from "./../lib/product.cart";

const prd1: LineProduct = {
  product: {
    id: 1,
    name: "socola",
    price: 10,
    discount: [
      {
        percent: 5,
        quatity: 1,
      },
      {
        percent: 10,
        quatity: 5,
      },
    ],
  },
  quantity: 1,
};

const prd2: LineProduct = {
  product: {
    id: 2,
    name: "mango",
    price: 5,
    discount: [
      {
        percent: 5,
        quatity: 2,
      },
      {
        percent: 10,
        quatity: 5,
      },
    ],
  },
  quantity: 2,
};

describe("test cart product", () => {
  describe("test crud product when cart empty", () => {
    let cart;
    beforeEach(() => {
      cart = new Cart([]);
      cart.addProduct(prd1);
    });

    afterEach(() => {
      cart.removeProduct();
    });

    test("check the number of products in the cart is equal to 1 ", () => {
      expect(cart.getCart()).toHaveLength(1);
      expect(cart.getCart()).toContain(prd1);
    });

    test("Check the total is equal to 9.5", () => {
      expect(cart.totalPrice()).toBe(9.5);
    });

    test("remove product in cart success", () => {
      cart.removeProduct(1);
      expect(cart.getCart()).toHaveLength(0);
      expect(cart.getCart()).toEqual([]);
    });

    test("Check total after removing products in cart is equal to 0", () => {
      cart.removeProduct(1);
      expect(cart.totalPrice()).toBe(0);
    });
  });

  describe("test crud product when cart have 1 product", () => {
    let cart;
    beforeEach(() => {
      cart = new Cart([]);
      cart.addProduct(prd1);
    });

    afterEach(() => {
      cart.removeProduct();
    });

    test("check the number of products in the cart is equal to 2 ", () => {
      cart.addProduct(prd2);
      expect(cart.getCart()).toHaveLength(2);
      expect(cart.getCart()).toContain(prd2);
    });

    test("Check the total is equal to 19", () => {
      cart.addProduct(prd2);
      expect(cart.totalPrice()).toBe(19);
    });

    test("remove 1 product in cart success", () => {
      cart.addProduct(prd2);
      cart.removeProduct(1);
      expect(cart.getCart()).toHaveLength(1);
      expect(cart.getCart()).toEqual([
        {
          product: {
            id: 2,
            name: "mango",
            price: 5,
            discount: [
              {
                percent: 5,
                quatity: 2,
              },
              {
                percent: 10,
                quatity: 5,
              },
            ],
          },
          quantity: 2,
        },
      ]);
    });

    test("remove all product in order success", () => {
      cart.addProduct(prd2);
      expect(cart.getCart()).toHaveLength(2);
      cart.removeProduct(1);
      cart.removeProduct(2);
      expect(cart.getCart()).toHaveLength(0);
      expect(cart.getCart()).toEqual([]);
    });

    test("Check total after removing 1 products in cart is equal to 9.5", () => {
      cart.addProduct(prd2);
      expect(cart.getCart()).toHaveLength(2);
      cart.removeProduct(1);
      expect(cart.totalPrice()).toBe(9.5);
    });

    test("Check total after removing all products in cart is equal to 0", () => {
      cart.addProduct(prd2);
      expect(cart.getCart()).toHaveLength(2);
      cart.removeProduct(1);
      cart.removeProduct(2);
      expect(cart.totalPrice()).toBe(0);
    });
  });
});
