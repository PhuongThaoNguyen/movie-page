import { CommentOutlined, LikeOutlined, SendOutlined } from '@ant-design/icons';
import { Button } from '@Components/Button';
import { Layout } from '@Components/Layout';
import { Input } from 'antd';
import Image from 'next/image';
import icon from '../../../assets/svg/story.svg';

export const Comments = () => {
  return (
    <Layout>
      <div className='comment-wrapper'>
        <div className='title'> 12 Comments</div>
        <div className='comments'>
          <div className='icon-avatar'>
            <Image src={icon} />
          </div>
          <div className='content'>
            <div className='comment-name'>
              <div style={{ fontSize: 12, marginRight: 2 }}>Han Solo</div>
              <div style={{ fontSize: 11, color: '#434343' }}>
                Commented on Chapter 35 • 24 min. ago
              </div>
            </div>
            <div className='comment-content'>
              I had no idea such a sequel was coming as I thought the show had
              ended and Kyoto Animation took a hard hit from the tragedy but
              currently 4 episodes in as of writing this review, and I love
              every second of it.
            </div>
            <div className='like-comment'>
              <LikeOutlined style={{ marginRight: 8 }} />
              61
              <CommentOutlined style={{ margin: '0 8px' }} />
              Reply
            </div>
          </div>
        </div>
        <div className='comments' style={{ paddingTop: 16 }}>
          <div className='icon-avatar'>
            <Image src={icon} />
          </div>
          <div className='content'>
            <Input
              placeholder='Add your comment'
              style={{
                backgroundColor: '#141414',
                borderRadius: 8,
                border: '1px solid #434343',
                fontSize: 14,
              }}
            />
            <Button
              style={{
                backgroundColor: '#FFD60A',
                borderRadius: 8,
                color: '#000',
                padding: 6,
                fontSize: 14,
                width: 144,
                display: 'flex',
                marginTop: 16,
              }}
            >
              <div>
                <SendOutlined />
                Add Comment
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
