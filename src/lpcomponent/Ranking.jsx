import { React,useEffect,useState } from "react";
import axios from 'axios';
import Typography from '@mui/material/Typography'

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
            <div style={{ paddingTop:'50px',paddingBottom:'50px',textAlign: 'center', backgroundColor: '#000000' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                {coins.map((coin)=>{
                  console.log(coin)
                  return(
                    <div  style={{display: 'flex',flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',
                      width: '80%',padding: '10px',borderBottom: '1px solid #ddd'}}>
                      <div style={{color:'white'}}>
                        <Typography variant="h5" component="div">{coin.rank}</Typography>
                      </div>
                      <div style={{ flex: 2, textAlign: 'center',color:'white' }}>
                        <Typography variant="h5" component="div"> {coin.name} ({coin.symbol}) </Typography>
                      </div>
                      <div style={{ flex: 2, textAlign: 'center',color:'white' }}>
                        {/* 小数点を出すために、10,000倍して、四捨五入　→ 割り算 */}
                        <Typography variant="h5" component="div"> ${convertNum(coin.priceUsd*100000)} </Typography>
                      </div>
                      <div style={{ flex: 2, textAlign: 'right',color:'white' }}>
                        <Typography variant="h5">${convertNum(coin.marketCapUsd)}</Typography>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
 }