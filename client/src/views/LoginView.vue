<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form @submit.prevent="loginApp">
        <h2>Login</h2>
        <div class="py-1">
          <label for="" class="form-label">Login</label>
          <input type="text" class="form-control" v-model="Form.login">
        </div>
        <div class="py-1">
          <label for="" class="form-label">Password</label>
          <input type="text" class="form-control" v-model="Form.pass">
        </div>
        <div class="py-1">
          <button class="btn btn-success">Login</button>
        </div>

        <p class="text-danger">{{ err }}</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Form: {
        login: '',
        pass: ''
      },
      err: ''
    }
  },
  methods: {
    async loginApp() {
      console.log(this.Form)

      let res = await fetch('http://localhost:5000/login', {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(this.Form)
      })

      let res_data = await res.json()

      if (res_data.status == 'ok') {
        localStorage.setItem('token_login', res_data.token)
        this.$router.push('/')
      }

      this.err = 'Incorrect login or password'
      console.log(res_data)

    }
  }
}
</script>



