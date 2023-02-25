import Add from "@/components/Add/Add";
import List from "@/components/List/List";
import { useState } from "react";
import styles from "../styles/App.module.css";

function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [sid, setSid] = useState(null);

  return (
    <div className={styles.App}>
      <Add />
      <List products={products} />
    </div>
  );
}

export default Home