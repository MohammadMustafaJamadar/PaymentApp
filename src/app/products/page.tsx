'use client'
import { useEffect, useState } from 'react';
import { IProducts } from '../interfaces/interfaces';
import { fetureAddedProducts$ } from '../Services/Store_RxJs/store';
import { Subscription } from 'rxjs';

export default function Products() {
  const [p, setP] = useState<IProducts[]>([])
  useEffect(() => {
    let ValueNotChange: boolean = true
    let sub: Subscription
    if (ValueNotChange === true) {
      sub = fetureAddedProducts$.subscribe(setP)
    }

    return () => {
      ValueNotChange = false
      sub.unsubscribe();
    }
  }, [])


  return (
    <div style={{ marginTop: "70px" }}>
      {
        p.map((element) => (
          <div key={element.productID}>{element.productID}</div>
        ))
      }
    </div>
  )
}
