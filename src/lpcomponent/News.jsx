import { React,useEffect,useState } from "react";
import axios from 'axios';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from "@mui/material";

//Material UI
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}{...other}>
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}  
CustomTabPanel.propTypes = {children: PropTypes.node,index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,};

    function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
};
}

export default function NewsAPI(){

    const [news,setNews]=useState([]);
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    useEffect(()=>{
        const fetchNews = async ()=>{
            const url = `${process.env.REACT_APP_API}/news`;
            const request = await axios.get(url);
            const response = await request.data.articles
            setNews(response);

        };
        fetchNews(); 
    },[]);
    return(
        <Box sx={{backgroundColor:'#000000',maxWidth:'100%'}}>
        {/* 上部はニュース切り替えタブ */}
        <Box sx={{marginTop:'40px',paddingTop:'20px',textAlign:'center'}}>
            <Typography sx={{display:{xs:'none',sm:'block'}}} variant="h4" color='#FFFFFF' margin="15px">News</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Tabs value={value} sx={{'& .MuiTabs-indicator':{backgroundColor:'white'}}} onChange={handleChange} centered>
            <Tab label="1" sx={{color:'white','&.Mui-selected':{color:'white'}}} {...a11yProps(0)} />
            <Tab label="2" sx={{color:'white','&.Mui-selected':{color:'white'}}} {...a11yProps(1)} />
            <Tab label="3" sx={{color:'white','&.Mui-selected':{color:'white'}}} {...a11yProps(2)} />
            <Tab label="4" sx={{color:'white','&.Mui-selected':{color:'white'}}} {...a11yProps(3)} />
            </Tabs>
        </Box>
        {/* 下部はニュース部分 */}
        <Box sx={{display:'flex',flexDirection:'row',flexWrap:'wrap',paddingTop:{xs:'5px',sm:'30px'}, justifyContent: 'center'}}>
        {/*　配列左は記事取得開始位置、右はページのインデックス  */}
        {[[0,0],[8,1],[16,2],[24,3]].map(( Articles )=>{
            return news.slice( Articles[0],Articles[0]+8 ).map((res,key) => {
                return(
                    <>
                    {/* PCの場合はこっち */}
                    <CustomTabPanel key={Articles} value={value} index={Articles[1]}>
                    <Card key={key} sx={{ maxWidth: 260,maxHeight:400,marginBottom:2,display:{xs:'none',sm:'block'}}}>
                        {/* サムネイル */}
                        <a href={res.url} target="_blank" rel="noopener noreferrer" sx={{ display:{xs:'none',sm:'block'}, textDecoration: 'none' }}>
                            <CardMedia sx={{height:160,objectFit:'cover',}} image={res.urlToImage}/>
                        </a>
                        {/* 記事 */}
                        <CardContent sx={{paddingTop:'1px'}}>
                            <Typography variant="h7" sx={{display:{xs:'none',sm:'block'},fontWeight:'bold',marginBottom:2}}>{res.title}</Typography>
                            <Typography>{res.description}</Typography>
                        </CardContent>
                    </Card> 

                    {/* スマホの場合はこっち */}
                    <Card key={key} sx={{ maxWidth:'100%',maxHeight:200,display:{xs:'flex',sm:'none'}}}>
                        {/* 記事 */}
                        <CardContent>
                            <Typography variant="h7" sx={{display:{xs:'block',sm:'none'},fontWeight:'bold',fontSize:'12px'}}>{res.title}</Typography>
                            <Typography sx={{fontSize:'12px'}}>{res.description}</Typography>
                        </CardContent>
                        {/* サムネイル */}
                        <a href={res.url} target="_blank" rel="noopener noreferrer" sx={{ display:{xs:'block',sm:'none'},flex:'0 0 200px',textDecoration:'none'}}>
                            <CardMedia sx={{height:'100%',width:150,objectFit:'fill',}} image={res.urlToImage}/>
                        </a>
                    </Card> 
                    </CustomTabPanel>
                    </>
                );
            })
        })
        }
        </Box>
        </Box>
    )
}

