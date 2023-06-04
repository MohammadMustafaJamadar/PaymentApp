import { IProducts } from "@/app/interfaces/interfaces";
import { BehaviorSubject, map } from "rxjs";
import axios from "axios";

export const products$ = new BehaviorSubject<IProducts[]>([]);

export const fetureAddedProducts$ = products$.pipe(
  map((products) =>
    products.map((product) => ({
      ...product,
      productPriceDrop: product.productPrice * 0.3,
    }))
  )
);

axios.get("http://localhost:8000/products").then((res) => {
  const data = res.data;
  products$.next(data);
});
