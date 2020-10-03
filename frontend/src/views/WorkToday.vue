/** 

 WorkToday.veu 
 勤務情報の表示、編集ができる 

*/

<template>
  <div class="WorkToday">

    <!-- グループ表示形式        個人表示形式は表示されない-->
    <v-container v-if="groupView.visible" style="padding: 10px">
      <v-toolbar flat style="margin: 20px 0px">
        <!-- 検索ボックス データテーブルのフィルタに使う-->
        <v-text-field
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        >
        </v-text-field>
        <v-spacer></v-spacer>

        <!-- 表示している勤務日 -->
        <v-dialog
          ref="dialog"
          v-model="pickerModal"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="pickeredDatePlusDDD"
              label="Picker in dialog"
              single-line
              hide-details
              readonly
              prepend-inner-icon="mdi-calendar-month"
              v-bind="attrs"
              v-on="on"
            >
            </v-text-field>
          </template>
          <!-- クリックするとカレンダーピッカーを表示する -->
          <v-date-picker v-model="pickeredDate" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="pickerModal = false">close</v-btn>
          </v-date-picker>
        </v-dialog>

        <!-- 前の日／次の日-->
        <v-btn small text @click="preDay">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn small text @click="nextDay">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <!-- クリックするとバックエンドとデータを同期する-->
        <v-btn color="secondary" fab small dark @click="getDataAndSetDate(group, pickeredDate)">
          <v-icon>mdi-autorenew</v-icon>
        </v-btn>
      </v-toolbar>
      <!--- 勤務情報のデータテーブル表示-->
      <v-data-table
        :headers="headers"
        :items="list"
        :search="search"
        :items-per-page="-1"
      >
        <!-- クリックすると勤務者情報の編集ダイアログを表示 -->
        <template v-slot:item.name="{item}">
          <v-icon @click=userEdit(item.id)>
            mdi-card-account-details-outline
          </v-icon>
          {{ item.name }}
        </template>
        <!-- クリックすると勤務情報の編集ダイアログを表示 -->
        <template v-slot:item.action.editWork="{item}">
          <v-icon @click="workEdit(item.id, pickeredDate)">
            mdi-clipboard-edit-outline
          </v-icon>
        </template>
        <!-- クリックすると個人表示形式へ切替 -->
        <template v-slot:item.action.toPersonalView="{item}">
          <v-icon @click=changeToPersonalView(item)>
            mdi-calendar-text
          </v-icon>
        </template>
      </v-data-table>
    </v-container>


    <!-- 個人表示形式      グループ表示形式は表示されない-->
    <v-container v-if='personalView.visible' style="padding: 10px">
      <v-toolbar flat style="margin: 10px 0px">
        <v-toolbar-title>
          <v-icon @click=userEdit(personalView.id)>
            mdi-card-account-details-outline
          </v-icon>
          {{ personalView.name}}さん
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title>
          <v-icon>mdi-calendar-month</v-icon>
          {{ personalView.pickedMonth}}
        </v-toolbar-title>
        <!-- 前の月／次の月-->
        <v-btn small text @click="$refs.calendar.prev()">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn small text @click="$refs.calendar.next()">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="secondary" tile @click="changeToGroupView">
          back
        </v-btn>
      </v-toolbar>
      <!-- カレンダー形式で勤務情報を表示 -->
      <v-calendar
        ref='calendar'
        v-model='personalViewValue'
        :type="personalView.type"
        :events="personalView.events"
        @click:date="workEditByPersonalView"
        >
      </v-calendar>
    </v-container>

    <!-- 勤務情報編集用のダイアログ -->
    <v-dialog v-model='workEditModal.visible' width="460">
      <v-card style="padding: 25px;">
        <v-card-title> {{ workEditModal.name }} さんの勤務情報を編集
        </v-card-title>
        <v-dialog
          ref="dialog"
          v-model="workEditModal.visiblePicker"
          persistent
          width="290"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="workEditModal.pickeredDate"
              label="Picker in dialog"
              readonly
              prepend-inner-icon="mdi-calendar-month"
              v-bind="attrs"
              v-on="on"
            >
            </v-text-field>
          </template>
          <v-date-picker v-model="workEditModal.pickeredDate" scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="workEditModal.visiblePicker = false">close</v-btn>
          </v-date-picker>
        </v-dialog>

        <v-select
          v-model='workEditModal.workType'
          label="勤務種類" 
          :items="defWorkTypes"
          outlined>
        </v-select>
        <v-text-field v-model='workEditModal.workStatus' label="勤務状況" outlined>
        </v-text-field>
        <v-btn color="primary" block @click="workEditSubmit(workEditModal)"> 編集完了
          <v-icon small> mdi-send </v-icon>
        </v-btn>
      </v-card>
    </v-dialog>

    <!-- 勤務者情報編集用のダイアログ -->
    <v-dialog v-model='userEditModal.visible' width="460">
      <v-card style="padding: 25px;">
        <v-card-title> {{ userEditModal.name }} さん( {{ userEditModal.id }} )を編集
        </v-card-title>
        <v-select
          v-model='userEditModal.company'
          label="所属会社"
          :items="defCompanies"
          outlined>
        </v-select>
        <v-text-field v-model='userEditModal.email' label="e-mail" outlined>
        </v-text-field>
        <v-text-field v-model='userEditModal.phoneNumber' label="連絡先" outlined>
        </v-text-field>
        <v-select
          v-model='userEditModal.groups'
          label="所属グループ"
          :items="defGroups"
          multiple
          >
       <template v-slot:selection="{ item }">
        <v-chip>
          <span>{{ item }}</span>
        </v-chip>
       </template>
        </v-select>
        <v-btn color="primary" block @click="userEditSubmit(userEditModal)"> 編集完了
          <v-icon small> mdi-send </v-icon>
        </v-btn>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import backendApi from '@/lib/backendApi'
import moment from 'moment-timezone'

export default {
  
  name: 'WorkToday',
  
  props: ['group'],

  data: () => {

    return {

      // 勤務情報のデータ
      //   基本的にはバックエンドから取得したデータと同じ形式
      //   ただし、バックエンドでは１レコード（１人の勤務者）の中にすべての日の勤務データを保持している
      //   効率よく表示をおこなうため、表示させたい勤務日の項目をlist.workとし必要に応じて設定する
      //   list.workの形式は
      //   {date:'YYYY-MM-DD', workType:'*****', workStatus:'*****'}
      //   list.worksは勤務データの勤務日ごとの配列であり、
      //   終日出社の場合は「空」であることに十分注意すること
      list: [],
      // v-table-data のヘッダー
      headers: [
        { text: "氏名", value: "name" },
        { text: "会社", value: "company" },
        { text: "連絡先", value: "phoneNumber" },
        { text: "勤務種類", value: "work.workType" },
        { text: "勤務状況", value: "work.workStatus" },
        { text: "勤務編集", value: "action.editWork" },
        { text: "個人表示", value: "action.toPersonalView" },
      ],
      // 検索ワード
      search: "",
      // 勤務情報を表示する日付 YYYY-MM-DD
      pickeredDate: moment().tz("Asia/Tokyo").format('YYYY-MM-DD'),
      // 勤務情報を表示する日付 YYYY-MM-DD (ddd)
      pickeredDatePlusDDD: moment().tz("Asia/Tokyo").format('YYYY-MM-DD (ddd)'),
      // カレンダーピッカーのモーダル表示コントロール true:表示する
      pickerModal: false,
      // 勤務情報編集ダイアログ用のデータ
      workEditModal : {
      // 表示コントロール
        visible: false,
      // 勤務者名
        name: '',
      // 勤務日
        pickeredDate: '',
      // 勤務タイプ
        workType: '',
      // 勤務状況
        workStatu: '',
      // カレンダーピッカー表示コントロール
        visiblePicker: false,
      },
      // 勤務者情報ダイアログ用のデータ
      userEditModal:{
        // 表示コントロール
        visible: false,
        // オブジェクトid
        _id: '',
        // 勤務者名
        name: '',
        // 勤務者ID
        id: '',
        // 会社名
        company: '',
        // e-mail adress
        email:'',
        // 連絡先 
        phoneNumber: '',
        // 所属グループ
        groups: [],
      },
      // グループ表示形式の表示コントロール
      groupView : {
        visible: true,
      },
      // 個人表示用のデータ
      personalView : {
        // 個人表示形式の表示コントロール
        visible: false,
        // 勤務者名
        name: '',
        // 勤務者id
        id: '',
        // カレンダーに表示する勤務データ｛ name : 勤務種類, start : 勤務日YYYY-MM-DD形式 }
        events: [],
        // 月間カレンダーで表示
        type: "month",
        // 月間カレンダーの年月 YYYY-MM
        pickedMonth: ''
      },
      // 個人表示用のカレンダーと紐づける日付 YYYY-MM-DD
      personalViewValue : '',
      // 所属グループの定義リスト(配列)
      defGroups: [],
      // 勤務タイプの定義リスト(配列)
      defWorkTypes: [],
      // 会社名の定義リスト（配列）
      defCompanies: [],

    }
 },

  created: function ()  {
    this.getDataAndSetDate(this.group, moment().tz("Asia/Tokyo").format('YYYY-MM-DD'))
    this.getDef()
  },

  watch: {
    // vue-router でpropsを代えて呼び出した際にバックエンドからデータを取得し更新させる
    '$route' (to) {
      this.getDataAndSetDate(to.params.group, moment().tz("Asia/Tokyo").format('YYYY-MM-DD'))
    },
    // 表示したい勤務日が変更されたら表示用data-tableのlistデータを更新させる
    pickeredDate: function (value) {
      this.pickeredDatePlusDDD = moment.tz(this.pickeredDate+'T00:00:00.000Z', 'Asia/Tokyo').format('YYYY-MM-DD (ddd)')
      this.setDay(value)
    },
    // 個人表示形式で表示したい年月日(YYYY-MM-DD)が変更されたらpickedMonth(YYYY-MM)を更新させる
    personalViewValue: function (value) {
      this.personalView.pickedMonth = moment(value).format('YYYY-MM')
    }

  },

  methods: {
    // 各種の定義データリストを取得する
    async getDef(){
      // 所属グループの定義リスト取得
      const g = await backendApi.getDefGroups()
      this.defGroups = g.map(e => e.groupName)
      // 勤務種類の定義リスト取得
      const w = await backendApi.getDefWorkTypes()
      this.defWorkTypes = w.map(e => e.workType)
      // 会社の定義リスト取得
      const c = await backendApi.getDefCompanies()
      this.defCompanies = c.map(e => e.companyName)
    },
    // 指定したグループの勤務データを取得する、指定した表示日用に内部データを設定
    async getDataAndSetDate(group, date){
      this.list = await backendApi.getWork(group)
      this.setDay(date)
    },
    // 指定日(YYYY-MM-DD形式）の勤務管理データを表示用に設定する
    setDay(dateString){
      console.log("setDay " + dateString)
      this.list.forEach( d => {
        const i = d.works.findIndex( e => e.date == dateString )
        if(i != -1){
          d.work = d.works[i] 
        } else{
          d.work = {date:dateString, workType:'', workStatus:''}
        }
      })
      //trick for update data table
      this.list.push({})
      this.list.pop()
    },
    // デバッグ用
    toDo(item){
      console.log("toDo: " + JSON.stringify(item))
    },
    // 勤務データを編集するダイアログを表示する
    // @id   勤務者id 
    // @date YYYY-MM-DD
    workEdit(id, date){
      const item = this.list.find( e => e.id == id)
      this.workEditModal.name = item.name
      this.workEditModal.workType = item.work.workType
      this.workEditModal.workStatus = item.work.workStatus
      this.workEditModal.pickeredDate = date 
      this.workEditModal.pickeredDatePlusDDD = this.pickeredDatePlusDDD
      this.workEditModal.visible = true
    },
    // 勤務者データを編集するダイアログを表示する
    // @id   勤務者id 
    userEdit(id){
      const item = this.list.find( e => e.id == id)
      this.userEditModal._id = item._id
      this.userEditModal.name = item.name
      this.userEditModal.id = item.id
      this.userEditModal.company = item.company
      this.userEditModal.email = item.email
      this.userEditModal.phoneNumber = item.phoneNumber
      this.userEditModal.groups = item.groups.map(e => e.groupName)
      this.userEditModal.visible = true
      console.log("userEdit : " + JSON.stringify(item))
    },
    // 勤務データの編集を完了しダイアログを閉じる
    workEditSubmit(workEditModal){
      // フロントエンド側(Client)のデータ更新
      const newWork = {
        date: workEditModal.pickeredDate,
        workType: workEditModal.workType,
        workStatus: workEditModal.workStatus
      }
      // 該当勤務者のデータを探す
      const i = this.list.findIndex( d => d.name == workEditModal.name )
      const item = this.list[i]
      // list.works, list.workを更新する
      const j = item.works.findIndex ( d => d.date == workEditModal.pickeredDate )
      if(j != -1 ){
        if(newWork.workType != ''){
          // 終日出社以外の場合は修正する
          item.works[j] = newWork
        } else {
          // 終日出社の場合は該当日のデータは削除する
          item.works.splice(j, 1)
        }
      } else {
        // もともと該当日はデータがない（終日出社と同じ）
        if(newWork.workType != ''){
          item.works.push(newWork)
        }
      }
      if( item.work.date == workEditModal.pickeredDate ){
        // item.workは終日出社でも登録する
        item.work = newWork
      }
      this.list[i] = item
      console.log("list[" + i + "] = " + JSON.stringify(this.list[i]))
      //trick for update data table
      this.list.push({})
      this.list.pop()
      //personalViewを表示しているときはpersonalView.eventsを更新する
      if(this.personalView.visible){
        const k = this.personalView.events.findIndex( e => e.start == newWork.date)
        if(k != -1){
          if(newWork.workType != ''){
            this.personalView.events[k] = {name: newWork.workType, start: newWork.date }
          } else {
            this.personalView.events.splice(k, 1)
          }
        } else {
          if(newWork.workType != ''){
            this.personalView.events.push({name: newWork.workType, start: newWork.date})
          }
        }
        console.log("events :" + JSON.stringify(this.personalView.events))
      }
      // バックエンド側のデータ更新
      backendApi.putWorkById(this.list[i])
      // モーダル非表示
      this.workEditModal.visible = false
    },
    // 勤務データの編集を完了しダイアログを閉じる
    userEditSubmit(userEditModal){
      // フロントエンド側(Client)のデータ更新
      const i = this.list.findIndex(e => e.id == userEditModal.id)
      this.list[i].company = this.userEditModal.company
      this.list[i].email = this.userEditModal.email
      this.list[i].phoneNumber = this.userEditModal.phoneNumber
      const g = []
      this.userEditModal.groups.forEach(e => g.push({groupName: e}))
      this.list[i].groups = g
      this.userEditModal.visible = true
      //trick for update data table
      this.list.push({})
      this.list.pop()
      console.log("list[" + i + "] = " + JSON.stringify(this.list[i]))
      // バックエンド側のデータ更新
      backendApi.putWorkById(this.list[i])
      // モーダル非表示
      this.userEditModal.visible = false
    },
    // 表示している勤務日を１日進める
    nextDay(){
      this.pickeredDate = moment.tz(this.pickeredDate+'T00:00:00.000Z', 'Asia/Tokyo').add(1, 'd').format().substr(0,10)
    },
    // 表示している勤務日を１日前にする
    preDay(){
      this.pickeredDate = moment.tz(this.pickeredDate+'T00:00:00.000Z', 'Asia/Tokyo').add(-1, 'd').format().substr(0,10)
    },
    // 個人表示形式へ表示を変更する
    changeToPersonalView(item){
      const events = []
      item.works.forEach( e => {
        events.push({name:e.workType, start:e.date})
      })
      this.personalView.events = events
      this.personalView.name = item.name 
      this.personalView.id = item.id
      this.personalViewValue = this.pickeredDate
      this.personalView.pickedMonth = moment(this.pickeredDate).format('YYYY-MM')
      this.groupView.visible = false
      this.personalView.visible = true
    },
    // グループ表示形式へ表示を変更する
    changeToGroupView(){
      this.personalView.visible = false
      this.groupView.visible = true
    },
    // 個人表示形式から勤務情報編集ダイアログを呼び出す
    workEditByPersonalView({date}){
      this.workEdit(this.personalView.id, date)
    },

  },

}
</script>
