type Discount = {
  quatity: number;
  percent: number;
};
export type Product = {
  id: number;
  name: string;
  price: number;
  discount: Discount[];
};

export type LineProduct = {
  product: Product;
  quantity: number;
};

interface ListProduct {
  listProduct: LineProduct[];
}
[];
export class Cart implements ListProduct {
  listProduct: LineProduct[] = [];
  constructor(data: LineProduct[]) {
    this.listProduct = data;
  }

  getCart() {
    return this.listProduct;
  }

  // addProduct = (prd: Product) => {
  //   let index = this.listProduct.findIndex(
  //     (item) => item.product.id === prd.id
  //   );
  //   if (index !== -1) {
  //     return this.listProduct[index].quantity = +1;
  //   } else {
  //     return this.listProduct.push({
  //       product: prd,
  //       quantity: 1,
  //     });
  //   }
  // };

  addProduct(prd: LineProduct) {
    let index = this.listProduct.findIndex(
      (item) => item.product.id === prd.product.id
    );
    if (index !== -1) {
      return (this.listProduct[index].quantity = +1);
    } else {
      return this.listProduct.push(prd);
    }
  }

  removeProduct(id: number) {
    this.listProduct = this.listProduct.filter(
      (item) => item.product.id !== id
    );
  }

  clearProductList() {
    this.listProduct = [];
  }

  totalPrice() {
    let calcDiscount = 0;
    return this.listProduct.reduce((total, lineProduct: LineProduct) => {
      lineProduct.product.discount.forEach((discount: Discount) => {
        if (lineProduct.quantity >= discount.quatity) {
          calcDiscount = discount.percent;
        }
      });
      return (
        total +
        (lineProduct.product.price *
          lineProduct.quantity *
          (100 - calcDiscount)) /
          100
      );
    }, 0);
  }
}
