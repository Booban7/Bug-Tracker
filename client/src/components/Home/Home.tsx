import React, { FC } from 'react';
import styles from './Home.module.scss';

//Bootstrap
import ActionAreaCard from "../Card/Card";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
<div className={styles.mainContainer}>
          <div className={styles.mainContainer__chart}>
        <ActionAreaCard />
          </div>
          <div className={styles.mainContainer__chart}>
          <ActionAreaCard />
          </div>
          <div className={styles.mainContainer__chart}>
          <ActionAreaCard />
          </div>
          <div className={styles.mainContainer__chart}>
          <h5>Tickets by type</h5>
          <ActionAreaCard />
          </div>
        </div>
);

export default Home;
