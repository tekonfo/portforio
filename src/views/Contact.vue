<template>
  <v-card class="mt-3" >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    >
    </v-img>
    <v-card-title primary-title>
      <form style="width: 100%;">
        <label class="ml-3 mr-3">
          何か御用ありましたらなんでもおしらせください！
        </label>
         <v-text-field
           v-model="name"
           :error-messages="nameErrors"
           :counter="10"
           label="Name"
           required
           @input="$v.name.$touch()"
           @blur="$v.name.$touch()"
           class="ml-3 mr-3"
         ></v-text-field>
         <v-text-field
           v-model="email"
           :error-messages="emailErrors"
           label="E-mail"
           required
           @input="$v.email.$touch()"
           @blur="$v.email.$touch()"
           class="ml-3 mr-3"
         ></v-text-field>
         <v-textarea
           v-model="message"
           label="お好きなメッセージをどうぞ！"
           auto-grow
           rows="3"
           class="ml-3 mr-3"
         ></v-textarea>
        <div class="text-xs-center pb-3 pt-5 ">
          <v-btn @click="submit" color="primary" large>送信する</v-btn>
        </div>
      </form>
    </v-card-title>
  </v-card>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import { functions } from '@/plugins/firebase'

  export default {
    mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(10) },
      email: { required, email },
      select: { required },
      checkbox: {
        checked (val) {
          return val
        }
      }
    },

    data: () => ({
      contactForm: {
        name: ''
      },
      name: '',
      email: '',
      message: '',
      show: null
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      }
    },
    methods: {
      submit: function () {
        const mailer = functions.httpsCallable('sendMail')
        mailer(this.contactForm)
          .then(() => {
            this.formReset()
            this.showSnackBar(
              'success',
              'お問い合わせありがとうございます。送信完了しました'
            )
          })
          .catch(err => {
            this.showSnackBar(
              'error',
              '送信に失敗しました。時間をおいて再度お試しください'
            )
            console.log(err)
          })
          .finally(() => {
            this.contactForm.loading = false
          })
      },
      clear() {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.message = ''
      }
    }
  }
</script>
