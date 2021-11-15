import { AppContext } from 'pages';
import { useContext, useState } from 'react';
import { Button } from '@Components/Button';
import { Layout } from '@Components/Layout';
import Image from 'next/image';
import Image2 from '../../../assets/svg/image2.svg';
import Image3 from '../../../assets/svg/image3.svg';
import Image4 from '../../../assets/svg/image4.svg';
import { ICredit, credits, otherFacts } from 'src/const';
import { Col, Row } from 'antd';

export const About = () => {
  const [showMore, setShowMore] = useState(false);
  const titleData = useContext(AppContext);
  const { sumary, genres } = titleData;

  return (
    <Layout>
      <div className='about_wrapper'>
        <div className='title'>About This</div>
        <div className='genres'>Genres</div>
        <div style={{ display: 'flex' }}>
          {genres.map((genre) => (
            <Button key={genre}>{genre}</Button>
          ))}
        </div>

        <div className='sumary_title'>Summary</div>
        {!showMore && (
          <div className='sumary'>
            Kasane is an ugly girl who is severely bullied by her classmates
            because of her appearance; making things worse, Kasane's mother was
            a beautiful actress to whom Kasane is a dark contrast, even though
            she is as talented as her mother. Howe...
          </div>
        )}
        {!showMore && (
          <div className='show_more' onClick={() => setShowMore(true)}>
            Show more
          </div>
        )}
        {showMore && (
          <>
            <div className='sumary'>{sumary}</div>
            <div style={{ display: 'flex' }}>
              <Image src={Image2} />
              <Image src={Image2} />
              <Image src={Image3} />
              <Image src={Image4} />
            </div>
            <div className='sumary_title'>Credits</div>

            {credits.map((credit: ICredit) => (
              <div className='credits' key={credit.type}>
                <div className='avatar'>
                  <Image src={credit.avatar} alt={credit.type} />
                </div>
                <div className='content'>
                  <div className='name'>{credit.name}</div>
                  <div className='type'>{credit.type}</div>
                </div>
              </div>
            ))}

            <div className='sumary_title'>Other Facts</div>
            {otherFacts.map((fact) => (
              <div className='facts' key={fact.type}>
                <Row>
                  <Col span='8'>
                    <div style={{ color: 'rgba(255, 255, 255, 0.45)' }}>
                      {fact.type}
                    </div>
                  </Col>
                  <Col span='16'>
                    <div style={{ color: 'rgba(255, 255, 255, 0.85)' }}>
                      {` :  ${fact.content}`}
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </>
        )}
      </div>
    </Layout>
  );
};
