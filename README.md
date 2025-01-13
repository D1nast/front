# 概要
ご覧いただきありがとうございます。</br>
仮想通貨関連のニュースを配信するWEBサイトです</br> 
登録いただいたユーザーには、毎朝７時に仮想通貨に関するニュースをメールでお届けします。</br>
本サイト上段にはNews APIから取得したニュースを、中段には時価総額ランキングを表示します。</br>

## 目次
- [フロントエンド](#フロントエンド)
- [バックエンド](#バックエンド)
- [インフラ](#インフラ)
- [API](#API)
- [開発にあたり注意した点](#開発にあたり注意した点)
- [ページ画面](#ページ画面)
  
## フロントエンド
- React v18.3.1
- Material-UI
## バックエンド
- Ruby v3.1.2
- Rails v6.1.7.8
## インフラ 
インフラ図は以下の通りです。</br>
HTTP通信はHTTPSにリダイレクトされるよう制御をかけています</br>
<img width="465" alt="Crypt Portalインフラ" src="https://github.com/user-attachments/assets/5b410645-9adb-4e10-a68b-c0ed893b1892" />
## APIについて
- CoinCap API2.0
- NewsAPI
  
## 開発にあたり注意した点
- なるべくコードを書かない  
  業務で開発をするとなると、他の人間が見ても理解しやすいようにすなコーディングが求められると考えたため  
  短く、簡潔に描くことを意識しました
- 既存技術(Material-UI) の利用  
  以下２点のメリットがあると考え上記技術を利用しました</br>
  &#9675; 業務を意識した開発ができる</br>
  &#9675; 閲覧者が見て違和感のないサイトを作れる</br>
0からのコーディングでは、どこかでコードが複雑になってしまったり、</br>
要素の配置を後から見直しにくなってしまったりと不都合が生じやすいと考えました。</br>
以上の理由から、コードの修正をしやすく、見た目も良くなるMaterial-UIを利用しました

## ページ画面
![ニュース](https://github.com/user-attachments/assets/f86c83e3-0b58-42ec-bad1-77183d1dc60f)
![時価総額](https://github.com/user-attachments/assets/d667941c-5146-4434-ac86-160e3ab7a567)
![ユーザー登録](https://github.com/user-attachments/assets/29f02d31-6e7d-44ed-9cd8-d9b09c8410f3)



