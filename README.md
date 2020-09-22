# What's this ?

 職場で働く人の勤務情報を共有できるアプリケーション

# 特徴

 職場で働く人の勤務情報を共有できる

 - 今日の勤務情報を共有できる
   - どこで勤務しているか
   - 連絡先はどこか
 - 今日の勤務情報を編集できる
 - グループに属する勤務者ごとに共有できる
   - 所属するチーム
   - 参加しているプロジェクト
   - 特別なコミュニティ
 - 搭載情報は公開可能なものに限定し開示範囲制限はしない
 - TODO 今日の勤務情報の編集
 - TODO 勤務情報予定の共有と編集
 - TODO データダウンロード
 - TODO (最終)office365/Teamsと連携できる

# Setup & Usage

```
 $ git clone <this application repositry>
 $ cd wenow 
 $ docker-compose build 
 $ docker-compose up -d
 
 起動後に http://localhost/ にアクセス
```

localhost以外から利用する場合は以下のファイルを修正しdockerimageをbuild
- frontend/app/src/config.json // frontend,backend のドメインをlocalhostから変更

question-frontコンテナの以下のファイルを修正してもOK
- /usr/share/nginx/html/js/app*.js // frontend,backendのドメインをlocalhostから変更

- アプリ(コンテナ）の廃棄
```
 $ docker-compose down
```

# Development

- 開発環境は以下の手順で起動
```
 $ git clone <this application repository>
 $ cd wenow
 $ docker-compose -f docker-compose.dev.yml up -d
 $ docker exec wenow-back npm install
 $ docker exec -d wenow-back npm start
 $ docker exec wenow-front npm install
 $ docker exec -d wenow-front npm run serve

 起動後に http://localhost:8080/ にアクセス
```
 - データベースのデータを手動で操作したい場合は http://localhost:8081/ にアクセス
 - db: wenow  
 - collection: users // 勤務者および勤務情報
 - collection: defGroups // グループ定義 (ex. XXチーム)
 - collection: defWorkTypes // 勤務タイプ定義 (ex. 終日テレワーク)
 - collection: defWorkTypes // 勤務状況定義 (ex. 実施中)
 - collection: defCompanies // 勤務状況定義 (ex. XX社)
 - see the files in backend/models


