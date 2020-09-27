/**
 App.vue
 アプリのメイン 各描画コンポーネントを配置する
 */

<template>
  <v-app>
    <!-- 左側のナビゲーション -->
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-container>
        <v-list dense>
          <v-list-item-title align="left" @click="toWorkToday('all')" >
            <v-icon>mdi-github</v-icon>
              Today all
            </v-list-item-title>
          <v-list-item v-for="group in groups" :key="group.groupId">
            <v-list-item-content>
              <v-list-item-title align="left" @click="toWorkToday(group.groupName)" >
                <v-icon>mdi-github</v-icon>
                {{ group.groupName }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <!-- 上側 -->
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        We Now
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            depressed
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-github</v-icon>
            {{ selectedGroup == '' ? "チームを選択": selectedGroup}}
          </v-btn>
        </template>
        <v-list >
          <v-list-item
            v-for="(group, index) in groups"
            :key="index"
            dense
            @click="toWorkToday(group.groupName)"
          >
            <v-list-item-title align="left">
              <v-icon>mdi-github</v-icon>
              {{ group.groupName }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>   
    </v-app-bar>
     
    <!-- 中央 -->
    <v-main>
      <router-view/>
    </v-main>

    <!-- 下側 -->
    <v-footer color="primary" dark app>
      xtech 2020
    </v-footer>

  </v-app>
</template>

<script>
import backendApi from '@/lib/backendApi'

export default {
  name: 'App',
  data () {
    return {

      // 左側のナビゲーションの表示コントロール
      drawer : null,
      // グループ定義データ
      groups : [],
      // 表示選択された所属グループ
      selectedGroup : ''

    }
  },

  created: function (){
    this.getDefGroups()
  },

  methods: {
      // グループ定義情報を取得
      async getDefGroups(){
        this.groups = await backendApi.getDefGroups()
      },
      // 指定のグループに属する勤務者情報を表示する
      toWorkToday(groupName){
        this.selectedGroup = groupName
        const path = '/works/today/' + groupName
        if(path != this.$route.path){
          this.$router.push({path : path})
        }
      },
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
