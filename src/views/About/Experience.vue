<template>
  <v-flex xs12>
    <v-card color="white" class="">
      <v-card-title primary-title>
        <div>
          <div class="headline">インターン経験</div>
          <div>いろんなところへインターンさせてもらいました</div>
        </div>
      </v-card-title>
      <v-divider light></v-divider>
      <v-card-actions class="pa-3">
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :key="i"
            :color="year.color"
            small
          >
            <template v-slot:opposite>
              <span
                :class="`headline ${year.color}--text`"
                v-text="year.year"
              ></span>
            </template>
            <div class="py-3">
              <h2 :class="`headline font-weight-light small mb-3 ${year.color}--text`">{{ year.text }}</h2>
              <div　>
                {{ year.detail }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '2017年8月 ~ ',
          text: "TECH::CAMP",
          detail: "初めてのWeb用の言語を触らせてもらいました"
        },
        {
          color: 'green',
          year: '2018年9月 ~',
          text: "NOVASTO",
          detail: "初めての業務開発に従事しました"
        },
        {
          color: 'amber',
          year: '2019年3月',
          text: "CyberAgent",
          detail: "二日間のkubernetesマスターインターンに参加しました"
        },
        {
          color: 'pink',
          year: '2019年3月 ~ 4月',
          text: "チームラボ",
          detail: "二週間の中期インターンに参加しました"
        }
      ]
    })
  }
</script>
