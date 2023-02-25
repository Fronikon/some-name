import { FC } from 'react';
import styles from './List.module.css';

interface PropsType {
  products: any[]
}

const List: FC<PropsType> = ({products}) => {
  return (
    <>
      {products.map((product: any, i: number) => (
        <div key={i} className={styles.product_wrapper}>
          <p className={styles.product}>{product.name}</p>
          <p className={styles.count}>{product.count}</p>
        </div>
      ))}
    </>
  );
}

export default List;