import { React,useEffect,useState } from "react";
import axios from 'axios';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box';  
export default function Ranking () {
  // APIを取得する配列の初期設定
    const [coins,setCoindata] = useState([]);
    // 値に小数点とカンマを付加する
    const convertNum =( num )=>{
      const convert = (Math.round((num))/100000)
      return convert.toLocaleString();
    };
      // データ取得
      useEffect(() => {
        const fetchCoin = async () => {
          const url =`${process.env.REACT_APP_API}`
            const response = await axios.get(url);
            setCoindata(response.data.data);
        }
        fetchCoin();
        },[]);
        return (
            <Box sx={{ paddingTop:'50px',paddingBottom:'50px',textAlign: 'center', backgroundColor: '#000000' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {coins.map((coin)=>{
                  console.log(coin)
                  return(
                    // ランキング部分
                    <Box  sx={{display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',
                      width:{xs:'100%',sm:'80%'},padding:{xs:'30px',sm:'10px'},borderBottom: '1px solid #ddd'}}>
                        {/* 順位 */}
                      <Box sx={{color:'white'}}>
                        <Typography variant="h5" component="div">{coin.rank}</Typography>
                      </Box>
                      {/* 通称 */}
                      <Box sx={{ flex: 2, textAlign: 'center',color:'white' }}>
                        <Typography variant="h5" component="div" sx={{display:{xs:'none',sm:'block'}}} > {coin.name} ({coin.symbol}) </Typography>
                        <Typography variant="h5" component="div" sx={{display:{xs:'block',sm:'none'}}} > {coin.name} </Typography>
                      </Box>
                      {/* 価格　小数点を出すために、10,000倍して、四捨五入　→ 割り算 */}
                      <Box sx={{ flex: 2, textAlign: 'center',color:'white' }}>
                        <Typography variant="h5" component="div"> ${convertNum(coin.priceUsd*100000)} </Typography>
                      </Box>
                      {/* 時価総額 */}
                      <Box sx={{ flex: 2, textAlign: 'right',color:'white',display:{xs:'none',sm:'block'} }}>
                        <Typography variant="h5">${convertNum(coin.marketCapUsd)}</Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
 }