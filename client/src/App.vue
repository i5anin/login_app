<template>
  <div class="container py-3">
    <h1>Login app</h1>

    <hr>

    <router-view />
  </div>


</template>

<script>

import AboutView from './views/AboutView.vue'

export default {
    data()
    {
      return {
        Account: null
      }
    },
    async created()
    {
      const token = localStorage.getItem('token_login')

      if(token)
      {
        let res = await fetch('http://localhost:5000/check-login', {
          method: 'post',
          headers: {'Content-type': 'application/json'},
          body: JSON.stringify({ token })
        })

        let res_data = await res.json()

        if(res_data.status == 'ok')
        {
          console.log(res_data)

          console.log(this.$router)

          this.Account = res_data.body

        }
      }

     },
    watch: {
      Account() {

        if (this.Account.role == 'admin')
        {
          console.log('updated watch')
          this.$router.addRoute('home', {path: '/about', component: AboutView})
        }
      }
    }

}



</script>

