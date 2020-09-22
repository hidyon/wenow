/**
 * DBの一般ユーザーを登録
 */

const user = {
  user: 'staff',
  pwd: 'staff_password',
  roles: [{
    role: 'readWrite',
    db: 'wenow'
  }]
};

db.createUser(user);


/**
 * 初期データ登録
 * db : wenow 
 */
db.users.insertMany(
[
  {"id":"NXXXXXX1","name":"XXXXXXX1","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX2","name":"XXXXXXX2","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX3","name":"XXXXXXX3","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX4","name":"XXXXXXX4","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX5","name":"XXXXXXX5","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX6","name":"XXXXXXX6","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"午前テレワーク-午後出社","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX7","name":"XXXXXXX7","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX8","name":"XXXXXXX8","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"},{"groupName":"商品プロジェクト"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXXX9","name":"XXXXXXX9","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"},{"groupName":"CM会メンバー"}],"works":[{"date":"2020-09-22","workType":"終日不在（社外）","workStatus":"研修"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX11","name":"XXXXXX11","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX12","name":"XXXXXX12","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX13","name":"XXXXXX13","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX14","name":"XXXXXX14","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX15","name":"XXXXXX15","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"午前テレワーク-午後不在（社外）","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX16","name":"XXXXXX16","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"終了"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX17","name":"XXXXXX17","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"},{"groupName":"商品プロジェクト"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX18","name":"XXXXXX18","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"},{"groupName":"CM会メンバー"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX19","name":"XXXXXX19","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX21","name":"XXXXXX21","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"午前不在（午前休）-午後出社","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX22","name":"XXXXXX22","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"午前不在（社外）-午後テレワーク","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX23","name":"XXXXXX23","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX24","name":"XXXXXX24","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX25","name":"XXXXXX25","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX26","name":"XXXXXX26","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX27","name":"XXXXXX27","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX28","name":"XXXXXX28","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"},{"groupName":"商品プロジェクト"}],"works":[{"date":"2020-09-22","workType":"終日不在（社外）","workStatus":"東京"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX29","name":"XXXXXX29","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"},{"groupName":"CM会メンバー"}],"works":[{"date":"2020-09-22","workType":"午前不在（午前休暇）-午後テレワーク","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX31","name":"XXXXXX31","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"午前不在（午前休）-午後出社","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX32","name":"XXXXXX32","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"午前不在（社外）-午後テレワーク","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX33","name":"XXXXXX33","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX34","name":"XXXXXX34","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX35","name":"XXXXXX35","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX36","name":"XXXXXX36","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX37","name":"XXXXXX37","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX38","name":"XXXXXX38","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"},{"groupName":"商品プロジェクト"}],"works":[{"date":"2020-09-22","workType":"終日不在（社外）","workStatus":"東京"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"NXXXXX39","name":"XXXXXX39","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"},{"groupName":"CM会メンバー"}],"works":[{"date":"2020-09-22","workType":"午前不在（午前休暇）-午後テレワーク","workStatus":"実施中"}],"company":"NIT","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX1","name":"YYYYYYY1","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"コベルコ","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX2","name":"YYYYYYY2","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"},{"groupName":"開発xTECH"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"コベルコ","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX3","name":"YYYYYYY3","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX4","name":"YYYYYYY4","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"コベルコ","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX5","name":"YYYYYYY5","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"システムWEST","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX6","name":"YYYYYYY6","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX7","name":"YYYYYYY7","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"ピュア","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX8","name":"YYYYYYY8","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"チェルト","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXXX9","name":"YYYYYYY9","email":"","phoneNumber":"0800000000","groups":[{"groupName":"数理共通チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"チェルト","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX11","name":"YYYYYY11","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX12","name":"YYYYYY12","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX13","name":"YYYYYY13","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX14","name":"YYYYYY14","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX15","name":"YYYYYY15","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX16","name":"YYYYYY16","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"SCSK","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX17","name":"YYYYYY17","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"SCSK","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX18","name":"YYYYYY18","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"SCSK","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX19","name":"YYYYYY19","email":"","phoneNumber":"0800000000","groups":[{"groupName":"販売支援チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"SCSK","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX21","name":"YYYYYY21","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"コベルコ","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX22","name":"YYYYYY22","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"コベルコ","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX23","name":"YYYYYY23","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX24","name":"YYYYYY24","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX25","name":"YYYYYY25","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"インテック","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX26","name":"YYYYYY26","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"SCSK","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX27","name":"YYYYYY27","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"SCSK","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX28","name":"YYYYYY28","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"BBS","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX29","name":"YYYYYY29","email":"","phoneNumber":"0800000000","groups":[{"groupName":"収納チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"BBS","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX30","name":"YYYYYY31","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"セコム","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX31","name":"YYYYYY32","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"セコム","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX32","name":"YYYYYY33","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"セコム","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX33","name":"YYYYYY34","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"セコム","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX34","name":"YYYYYY35","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"ゼクシス","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX35","name":"YYYYYY36","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"ゼクシス","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX36","name":"YYYYYY37","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"終日テレワーク","workStatus":"実施中"}],"company":"アクティ","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX37","name":"YYYYYY38","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"終日不在（休暇）","workStatus":""}],"company":"アクティ","updatedByUser":{"id":"Admin","name":"Admin"}},
  {"id":"PXXXXX38","name":"YYYYYY39","email":"","phoneNumber":"0800000000","groups":[{"groupName":"契約チーム"}],"works":[{"date":"2020-09-22","workType":"","workStatus":""}],"company":"アクティ","updatedByUser":{"id":"Admin","name":"Admin"}},
]
);

db.defgroups.insertMany(
  [
    {"groupName":"契約チーム"},
    {"groupName":"収納チーム"},
    {"groupName":"数理共通チーム"},
    {"groupName":"販売支援チーム"},
    {"groupName":"支払チーム"},
    {"groupName":"次回WEBチーム"},
    {"groupName":"保全チーム"},
    {"groupName":"サービス開発"},
    {"groupName":"企画総務"},
    {"groupName":"事業部PMO"},
    {"groupName":"開発xTECH"},
    {"groupName":"CM会メンバー"},
    {"groupName":"商品プロジェクト"},
    {"groupName":"配当プロジェクト"},
    {"groupName":"積残プロジェクト"},
  ]
);

db.defcompanies.insertMany(
  [
    {"companyName":"NIT"},
    {"companyName":"インテック"},
    {"companyName":"コベルコ"},
    {"companyName":"SCSK"},
    {"companyName":"日立"},
    {"companyName":"PwC"},
    {"companyName":"Sky"},
    {"companyName":"セコム"},
    {"companyName":"ピュア"},
    {"companyName":"チェルト"},
    {"companyName":"システムWEST"},
    {"companyName":"BBS"},
    {"companyName":"TSol"},
    {"companyName":"アクティ"},
    {"companyName":"ゼクシス"},
    {"companyName":"DTSウエスト"},
  ]
);

db.defworktypes.insertMany(
  [
    {"workType":""},
    {"workType":"終日テレワーク"},
    {"workType":"終日不在（社外）"},
    {"workType":"終日不在（休暇）"},
    {"workType":"午前出社-午後テレワーク"},
    {"workType":"午前出社-午後不在（社外）"},
    {"workType":"午前出社-午後不在（午後休）"},
    {"workType":"午前テレワーク-午後出社"},
    {"workType":"午前テレワーク-午後不在（社外）"},
    {"workType":"午前テレワーク-午後不在（午後休）"},
    {"workType":"午前不在（社外）-午後出社"},
    {"workType":"午前不在（社外）-午後テレワーク"},
    {"workType":"午前不在（社外）-午後不在（午後休）"},
    {"workType":"午前不在（午前休）-午後出社"},
    {"workType":"午前不在（午前休）-午後テレワーク"},
    {"workType":"午前不在（午前休）-午後不在（社外）"},
    {"workType":"その他"},
  ]
);