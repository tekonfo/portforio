<template>
  <div>
    <v-card
      class="mt-5"
    >
      <v-img
        class="white--text "
        height="300px"
        v-bind:src="remark_url"
      >
        <v-container fill-height>
          <v-layout fill-height row wrap>
            <v-flex xs12 align-self-center
              class="text-xs-center"
            >
              <transition-group appear>
                <span v-bind:key="1" class=" display-3 font-weight-bold font-italic">{{ remark.text }}</span>
                <span v-bind:key="2" class="font-italic">   -{{ remark.author }}</span>
              </transition-group>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title>
        <div>
          <span>自分の好きな名言がランダムで現れます。</span>
        </div>
      </v-card-title>
    </v-card>

    <v-container
      class="pa-0 mt-5"
    >
      <v-layout row>
        <v-flex xs4>
          <v-img
            height="250"
            v-bind:src="myself_image"
          ></v-img>
        </v-flex>
        <v-flex xs8
          class="ml-2 mr-0"
        >
          <v-card
            color="blue-grey darken-2"
            class="white--text"
            height="250"
          >
            <v-card-title primary-title>
              <div>
                <div class="headline">自己紹介</div>
              </div>
            </v-card-title>
            <v-card-text style="height:125px; white-space:pre-line;">{{ introduction }}</v-card-text>
            <v-card-actions>
              <v-btn to="About" flat dark>もっと知る</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="pr-0 pl-0 pt-4 mt-5">
      <v-layout row wrap>
        <v-flex
          v-for="(item, i) in items"
          :key="i"
          xs6
          class="pr-2 pl-2 pb-4"
        >
          <Work
            v-bind:title="item.title"
            v-bind:detail="item.detail"
            v-bind:link="item.link"
            v-bind:id="item.id"
            v-bind:image_url="item.image_url"
          >
          </Work>
        </v-flex>
      </v-layout>
    </v-container>
    <div
      class="pt-3 pr-2 pl-2 mb-5"
    >
      <v-btn block color="deep-purple lighten-2" dark to="Portforio">もっと見る</v-btn>
    </div>



  </div>
</template>

<style scoped>
  /* 1秒かけて透明度を遷移 */
  .v-enter-active, .v-leave-active {
  transition: opacity 1s;
  }
  /* 見えなくなるときの透明度 */
  .v-enter{
  opacity: 1;
  }
</style>

<script>
  import Work from "@/views/Templates/Work.vue";
  export default {
    components: {
      Work
    },
    created: function(){
      const tmp = Math.floor( Math.random() * 3 );
      this.remark.text = this.remarks[tmp].text
      this.remark.author = this.remarks[tmp].author
    },
    data () {
      return {
        myself_image: require("../assets/myself.png"),
        introduction:
        `学生エンジニアの近藤大翔のポートフォリオサイトです。
        大学の専攻が情報系で授業でコンピューターサイエンスを学んでいます。
        それ以外にも様々なインターンや独学でスキルを磨いています。
        このポートフォリオサイトはエンジニアとしての活動、スキルをまとめたものになります。
        是非色々みていってください!
        `,
        remark_url: require("../assets/purple.png"),
        remark: {
          text: "",
          author: ""
        },
        remarks: [
          {
            text: "楽観主義は意思によるものである",
            author: "アラン"
          },
          {
            text: "モチベーションはあらゆる仕事術に勝る",
            author: "前田裕二"
          },
          {
            text: "自分を破壊する一歩手前の負荷が、自分を強くしてくれる",
            author: "ニーチェ"
          }
        ],
        items: [
          {
            title: "WillPower",
            detail: "意志力形成のためのwebアプリ",
            image_url: require("../assets/WillPower.png"),
            link: "https://limitless-wave-46311.herokuapp.com",
            id: "0"
          },
          {
            title: "Portforio",
            detail: "このサイト",
            image_url: require("../assets/Portforio.png"),
            link: "#",
            id: "1"
          }
        ]
      }
    }
  }
</script>
