import React from 'react';
import { FaGithub } from 'react-icons/fa'; 
import Link from '@mui/material/Link';
import ScrollToTopButton from './ScrollTop'; 
import { Typography } from '@mui/material';

const Footer = () => {
  return (
        <footer style={{ backgroundColor: '#000000', color: 'white', padding: '20px 0' }}>
            <div style={{display:'flex',height:'auto',width:'100%'}}>

                {/* フッターの左半分 CNの画像 */}
                <div style={{flex:'2',paddingLeft:'80px',width:'30%'}}>
                    <img src="/cnicon.png" alt="Description" style={{ width: '80%', height: 'auto' }} />
                </div>

                {/* フッタの右半分　サイト説明 */}
                <div style={{flex:'8'}}>
                    <Typography variant="h6" style={{borderBottom:'2px solid white',display:'inline-block',width:'150px'}}>
                        About
                    </Typography>
                    <p>Delivering the latest news on cryptcurrency.<br/>
                        The news we provide is within the last 24 hours.
                    </p>
                    <Link href="https://github.com/D1nast" target="_blank" rel="noopener noreferrer" marginTop={'10px'}>
                     <FaGithub size={24} color="#ffffff" />
                    </Link>
                    <Link>
                    </Link>
                </div>
            </div>
            {/* 画面最上部までスクロールする */}
            <ScrollToTopButton />
        </footer>
  );
}

export default Footer;
