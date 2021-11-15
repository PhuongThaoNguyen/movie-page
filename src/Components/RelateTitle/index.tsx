import Image from 'next/image';
import RelateImg from '../../../assets/svg/relateImage.svg';
import Union from '../../../assets/svg/Union.svg';
export const RelateTitle = () => {
  const relatedTitles: string[] = [
    'Title Name 1',
    'Title Name 2',
    'Title Name 3',
  ];
  return (
    <div className='relate_wrapper'>
      <div className='title' style={{ padding: '0 16px' }}>
        Related Titles
      </div>
      {relatedTitles.map((title) => (
        <div key={title}>
          <div className='relate_titles'>
            <div className='relate_left'>
              <Image src={RelateImg} alt='relate' width={110} height={120} />
            </div>
            <div className='relate_right'>
              <div className='title_name'> {title}</div>
              <div className='excluse'>
                <Image src={Union} alt='union' />
                EXCLUSIVE
              </div>
              <div className='prequel'>PREQUEL</div>
              <div className='prequel'>45.6K reads</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
