import { useContext } from 'react';
import { BellOutlined, SortAscendingOutlined } from '@ant-design/icons';
import { Button } from '@Components/Button';
import { Layout } from '@Components/Layout';
import Image from 'next/image';
import Chapter from '../../../assets/svg/chapter.svg';
import Icon from '../../../assets/svg/icon-wrapper.svg';
import Locked from '../../../assets/svg/lock.svg';
import { AppContext } from 'pages';

export const Chapters = () => {
  const titleData = useContext(AppContext);
  const { chapters } = titleData;
  return (
    <Layout>
      <div className='chapter-wrapper'>
        <div className='title'>Last read</div>
        <div className='chapter'>
          <div>
            <Image src={Chapter} alt='chapter' />
          </div>
          <div className='chapter-name'>
            <div className='chapter-title'>Chapter 1</div>
            <div className='sub-title'>Last read 2 days ago </div>
          </div>
        </div>
        <div className='chapters'>
          <div className='filter'>
            <div style={{ width: '90%' }}>
              <div className='title'>10 chapters </div>
              <div className='new-chapter'>New chapter every Thursday </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button>
                <BellOutlined />
              </Button>
              <Button>
                <SortAscendingOutlined />
              </Button>
            </div>
          </div>
        </div>
        {chapters.map((chapter) => (
          <div
            key={chapter.name}
            className='chapter'
            style={{ backgroundColor: '#141414' }}
          >
            <div style={{ position: 'relative' }}>
              <Image src={Chapter} alt='chapter' />
              {/* <div>
     <Image src={Locked} className='locked' />
   </div> */}
            </div>
            <div className='chapter-name'>
              <div className='chapter-title'>{chapter.name}</div>
            </div>
            {chapter.status === 'free' ? (
              <div className='free'>FREE</div>
            ) : (
              <div className='lock'>
                <Image src={Icon} alt='iconLock' />5
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
};
