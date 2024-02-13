<template>
  <h1 v-if="Account">Hello {{ Account.username }}!</h1>
  <hr>

  <button class="btn btn-danger" @click="logout">Logout</button>

  <hr>

  <div v-if="Account?.role == 'admin'">
    <select name="" id="" class="form-select">
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
    </select>
  </div>


</template>

<script>
export default {
  data() {
    return {
      Account: null
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token_login')
      this.$router.push('/login')
    }
  },
  async created() {

    const token = localStorage.getItem('token_login')

    if (token) {
      let res = await fetch('http://localhost:5000/check-login', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({token})
      })

      let res_data = await res.json()

      if (res_data.status == 'ok')
        this.Account = res_data.body
      else
        this.logout()
    } else
      this.logout()


  }

}
</script>



