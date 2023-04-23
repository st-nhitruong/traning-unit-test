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

describe("test cart product", () => {
  describe("test add product", () => {
    const cart = new Cart([]);

    cart.addProduct(prd1);
    test("add product success", () => {
      expect(cart.getCart()).toHaveLength(1);
      expect(cart.getCart()).toContain(prd1);
    });
  });

  describe("test remove product in cart", () => {
    const cart = new Cart([]);
    cart.removeProduct(1);
    test("remove product in order success", () => {
      expect(cart.getCart()).toHaveLength(0);
      expect(cart.getCart()).toEqual([]);
    });
  });

  describe("totalPrice", () => {
    const cart = new Cart([prd1]);
    test("calc otalPrice success", () => {
      expect(cart.totalPrice()).toBe(9.5);
    });
  });
});
