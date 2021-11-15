import { Layout } from '@Components/Layout';
import Image from 'next/image';
import QrCodeImg from '../../../assets/svg/qacode.svg';

export const QrCode = () => {
  return (
    <Layout>
      <div className='qrcode-wrapper'>
        <div className='qrcode'>
          <div className='title'>Get The App</div>
          <div className='descript'>
            Love this title? Scan the QR code to continue reading right on your
            mobile devices.
          </div>
        </div>
        <div>
          <Image src={QrCodeImg} alt='qrcode' />
        </div>
      </div>
    </Layout>
  );
};
