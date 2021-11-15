import { createContext } from 'react';
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { Row, Col } from 'antd';
import { LeftContent, RightContent } from '@Components';
import { data, IData } from '../src/const';

export const AppContext = createContext<IData>(data);

const Home: NextPage = () => {
  return (
    <AppContext.Provider value={data}>
      <div className={styles.container}>
        <Row>
          <Col span={16} style={{ paddingRight: 20 }}>
            <LeftContent />
          </Col>
          <Col span={8}>
            <RightContent />
          </Col>
        </Row>
      </div>
    </AppContext.Provider>
  );
};

export default Home;
