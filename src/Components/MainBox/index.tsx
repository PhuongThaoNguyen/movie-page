import { Button } from '@Components/Button';
import { Col, Row } from 'antd';
import Image from 'next/image';
import MainImg from '../../../assets/svg/image1.svg';
import {
  LikeOutlined,
  MoreOutlined,
  ReadOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { Layout } from '@Components/Layout';
import { useContext } from 'react';
import { AppContext } from '../../../pages/index';

export const MainBox = () => {
  const titleData = useContext(AppContext);
  const { name, publisher, type, chapterNum, readNum, likeNum, types } =
    titleData;
  return (
    <Layout>
      <div className='mainBox'>
        <Row>
          <Col span='6'>
            <Image src={MainImg} alt='mainImg' width={180} height={272} />
          </Col>
          <Col span='16'>
            <div style={{ padding: '0 16px' }}>
              <div className='name'>{name}</div>
              <div className='publisher'>{`By ${publisher}`}</div>
              <div className='type'> {`${type} • ${chapterNum} Chapters`}</div>
              <div className='like'>
                <ReadOutlined style={{ marginRight: 8 }} />
                <div>{readNum}</div>
                <LikeOutlined style={{ margin: '0 8px' }} />
                <div>{likeNum}</div>
              </div>
              <div style={{ display: 'flex', padding: '25px 0' }}>
                {types.map((type) => (
                  <Button key={type}>{type}</Button>
                ))}
              </div>
              <Button
                style={{
                  backgroundColor: '#FFD60A',
                  borderRadius: 8,
                  color: '#000',
                  padding: 6,
                  fontSize: 14,
                  width: 205,
                }}
              >
                Read First Chapter for FREE
              </Button>
            </div>
          </Col>
          <Col span='2'>
            <div style={{ display: 'flex' }}>
              <Button>
                <ShareAltOutlined />
              </Button>
              <Button>
                <MoreOutlined />
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};
