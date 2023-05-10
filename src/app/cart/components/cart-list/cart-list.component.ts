import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product-model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
   constructor(private cartService: CartService) {}

  onQuantityIncrease(product: ProductModel) {
    this.cartService.addProduct(product)
  }
  onDeleteItem(product: ProductModel) {
    this.cartService.removeProduct(product, true)
  }
  onQuantityDecrease(product: ProductModel) {
    this.cartService.removeProduct(product)
  }

  getItems(): {product: ProductModel, quantity: number}[] {
    return this.cartService.getProducts()
  }
  getTotalCost(): Number {
    return this.cartService.getTotalCost()
  }
  getTotalQuantity(): Number {
    return this.cartService.getTotalQuantity()
  }
  isEmpty(): boolean {
    return this.cartService.isEmpty()
  }
}
