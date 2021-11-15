import { About } from '@Components/About';
import { Comments } from '@Components/Comments';
import { QrCode } from '@Components/QrCode';
import { RelateTitle } from '@Components/RelateTitle';

export const RightContent = () => {
  return (
    <div className='wrapper_right_content'>
      <About />
      <RelateTitle />
      <Comments />
      <QrCode />
    </div>
  );
};
