import { Layout } from '@Components/Layout';
import Image from 'next/image';
import IconW from '../../../assets/svg/icon-wrapper.svg';
import Union from '../../../assets/svg/Union.svg';

export const PricingAndPromote = () => {
  return (
    <Layout>
      <div className='promote_container'>
        <div className='title_promote'>Pricing & Promotion</div>
        <div className='promote_wrapper'>
          <div className='first_row'>
            <div className='free_chapter'>
              <div className='sub_title'>FREE</div>
              <div className='chapter'>3 chapters</div>
            </div>
            <div className='lock_chapter'>
              <div className='sub_title'>LOCKED</div>
              <div className='chapter'>
                <div> 7 chapters</div>
                <div className='sub_chapter'>
                  (<Image src={IconW} alt='IconW' />5 / chapter)
                </div>
              </div>
            </div>
          </div>
          <div className='second_row'>
            <div className='left_col'>
              <div className='total'>Total Price</div>
              <div className='sub_title'>
                Instant access to all chapters • No Ad{' '}
              </div>
            </div>
            <div className='right_col'>
              <div className='box'>
                <Image src={IconW} alt='IconW1' />
                <div style={{ marginLeft: 4, fontWeight: 'bold' }}>35</div>
              </div>
            </div>
          </div>
          <div className='third_row'>
            <div className='save_money'>
              <div className='title'>
                Save money with INKR Extra
                <Image src={Union} alt='uni' />
              </div>
              <div className='sub_title'>
                Instant access to all chapters • No Ad • Extra saving
              </div>
            </div>
            <div className='saving_box'>
              <div style={{ display: 'flex' }}>
                <div className='percent'>-50%</div>
                <div className='save_percent'>
                  <Image src={IconW} alt='IconW1' />
                  <div className='number'>35</div>
                  <div className='number_rate'>18</div>
                </div>
              </div>
              <div className='rate'>Saving rates may vary</div>
            </div>
          </div>
        </div>
        <div className='load_more'>Want to read for free? Learn more </div>
      </div>
    </Layout>
  );
};
