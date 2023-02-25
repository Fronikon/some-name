import { AddProduct, GetProducts } from '@/services/API';
import { FC } from 'react';
import styles from './AddButton.module.css';

interface PropsType {
  id: number
}

const AddButton: FC<PropsType> = ({id}) => {
  return (
    <button
      onClick={async () => {
        await AddProduct(id).then((data: any) => console.log('add', data));
        await GetProducts().then((data: any) => console.log('get', data));
      }}
      className={styles.add}
    >
      Add {id}
    </button>
  );
};

export default AddButton;
