import { useState } from 'react';
import styles from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div>
            <h2>{count}</h2>
            <button className={styles.button} onClick={increment}>
                increment
            </button>
        </div>
    );
};

export default Counter;
