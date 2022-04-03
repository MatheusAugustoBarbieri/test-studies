class Cart {
  itens = [];

  add(item) {
    const func = x => x.product == item.product;

    if (this.itens.find(func)) {
      this.itens.splice(this.itens.find(func), 1);
    }
    this.itens.push(item);
  }
  remove(product) {
    this.itens.splice(
      this.itens.indexOf(this.itens.find(x => x.product == product)),
      1,
    );
  }
  getTotal() {
    return this.itens.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }

  summary() {
    const total = this.getTotal();
    const itens = this.itens;
    return {
      total,
      itens,
    };
  }

  checkout() {
    const { total, itens } = this.summary();
    this.itens = [];
    return {
      total,
      itens,
    };
  }
}

export default Cart;
