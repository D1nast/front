import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link}  from '@mui/material';

const drawerWidth = 240;
// タブのリンク
const navItems = [
    { name: 'Home', href: '/' },
    { name: 'News', href: '/news' },
    { name: 'distribute', href: '/signup' },
    { name: 'GitHub', href: 'https://github.com/D1nast' }
  ];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor:'hsla(0, 0%, 7%, 0.94)'}}>
        {/* ツールバーのフレックスはどうするかまだ決めていない */}
        <Toolbar style={{display:'flex'}}>
          <div style={{fontSize:'30px',fontWeight:'100',fontFamily:'Poppins,Arial,sans-serif',flex:'0 0 900px'}}>
            CRYPT PORTAL
            </div>
          <Box sx={{ display: { xs: 'none', sm: 'block',flex:'auto'} }}>
            {navItems.map((item) => (
              <Button key={item.name} component={Link} href={item.href} sx={{ color: '#FFFFFF' }}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
        {/*  */}
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
        </Drawer>
      </nav>
    </Box>
  );
}



export default Header;
