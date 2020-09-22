/** 

 WorkToday.veu 
 勤務情報の表示、編集ができる 

*/

<template>
  <div class="WorkToday">

    <!--- 勤務者のグループを表示-->
    <v-card>
      <v-card-title> 
        {{ group }}
      </v-card-title>
    </v-card>
    
    <!--- 勤務情報のリスト表示-->
    <v-data-table
      :headers="headers"
      :items="list"
      :items-per-page="-1"
    >
      <template v-slot:item.name="{item}">
        <v-icon small @click=toDo(item)>>
          mdi-account
        </v-icon>
        {{ item.name }}
      </template>
      <template v-slot:item.action.editWork="{item}">
        <v-icon small @click=edit(item)>>
          mdi-pencil
        </v-icon>
      </template>
    </v-data-table>

    <!-- 勤務情報編集用のダイアログ -->
    <v-dialog v-model='visibleEditDialog'>
      <v-card style="padding: 25px;">
        <v-card-title> 編集用のダイアログ（仮） 
        </v-card-title>
        <v-card-subtitle> {{ dialogName}} さんの勤務情報を編集します
        </v-card-subtitle>
        <v-text-field v-model='dialogWorkType' label="勤務タイプ" outlined>
        </v-text-field>
        <v-text-field v-model='dialogWorkStatus' label="勤務状況" outlined>
        </v-text-field>
        <v-btn color="primary" block @click="editSubmit"> 編集完了
          <v-icon small> mdi-send </v-icon>
        </v-btn>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import backendApi from '@/lib/backendApi'

export default {
  
  name: 'WorkToday',
  
  props: ['group'],

  data: () => {

    return {

      // グループの定義データ
      defGroups: [],

      // 勤務情報のデータ
      list: [],
      // v-table-data のヘッダー
      headers: [
        { text: "氏名", value: "name" },
        { text: "会社", value: "company" },
        { text: "連絡先", value: "phoneNumber" },
        { text: "勤務形態", value: "today.workType" },
        { text: "状況", value: "today.workStatus" },
        { text: "編集", value: "action.editWork" },
      ],

      // 勤務情報編集用ダイアログの表示コントロール
      visibleEditDialog : false,
      // 勤務情報編集用ダイアログでの勤務タイプデータ
      dialogWorkType : "",
      // 勤務情報編集用ダイアログでの勤務状況データ
      dialogWorkStatus : "",
      // 勤務情報編集用ダイアログで編集される勤務者名
      dialogName : "",

    }
 },

  created: function ()  {
    this.getData(this.group)
  },

  watch: {
    '$route' (to, from) {
      console.log("to:" + to)
      console.log("from:" + from)
      this.getData(to.params.group)
    }
  },

  methods: {
    // 指定したグループの勤務データを取得する
    async getData(group){

      const data = await backendApi.getWork(group)

      // 今日のデータの抽出
      // TODO: 2020-09-22以外日付データに対応する
      const todayString = "2020-09-22"
      data.forEach( d => {
        d.today =  d.works.find( e1 => e1.date == todayString )
      })
      this.list = data
    },
    // デバッグ用
    toDo(item){
      console.log("toDo: " + JSON.stringify(item))
    },

    // 勤務データを編集するダイアグを表示する
    edit(item){
      this.dialogName = item.name
      this.dialogWorkType = item.today.workType
      this.dialogWorkStatus = item.today.workStatus
      this.visibleEditDialog = true
    },
    // 勤務データの編集を完了しダイアログを閉じる
    // TODO: 入力されたデータでバックエンドのデータを更新する
    editSubmit(){
      this.visibleEditDialog = false
    }
  }
}
</script>
