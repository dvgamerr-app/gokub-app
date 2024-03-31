<script lang="ts" setup>
// import log from 'electron-log/renderer'
// import { ipcRenderer } from 'electron'
import { useRouter } from 'vue-router'
import { ref, reactive, Ref } from 'vue'

const router = useRouter()

export interface AccessTokenApp {
  anypoint: {
    clientId: Ref<String>
    clientSecret: Ref<String>
    error?: Boolean
  }
  gocd: {
    domain: Ref<String>
    token: Ref<String>
    error?: Boolean
  }
}

const eventAuth = ref(false)
const eventSubmit = ref(false)
const eventBackButton = ref(false)
const accessToken = reactive<AccessTokenApp>({
  anypoint: { clientId: ref(''), clientSecret: ref('') },
  gocd: { domain: ref(''), token: ref('') },
})

const onAuthAnypointConfig = async () => {
//   eventSubmit.value = true
//   accessToken.anypoint.error = !/[a-f0-9]{32,32}/.test(accessToken.anypoint.clientId.toString()) || !/[a-zA-Z0-9]{32,32}/.test(accessToken.anypoint.clientSecret.toString())
//   accessToken.gocd.error = false

//   if (/^(http|https):\/\//.test(accessToken.gocd.domain.toString())) {
//     const validate = await ipcRenderer.invoke('CHECK-GOCD_HEATH', accessToken.gocd.domain.toString())
//     accessToken.gocd.error = !validate || !/[a-f0-9]{40,40}/.test(accessToken.gocd.token.toString())
//   }

//   if (accessToken.anypoint.error || accessToken.gocd.error) {
//     eventSubmit.value = false
//     return
//   }

//   const verify = await ipcRenderer.invoke('MUBU-TOKEN-VERIFY', JSON.stringify(accessToken))
//   accessToken.anypoint.error = verify.anypoint
//   accessToken.gocd.error = verify.gocd

//   if (accessToken.anypoint.error || accessToken.gocd.error) {
//     eventSubmit.value = false
//     return
//   }
//   eventAuth.value = true
//   await ipcRenderer.invoke('MULESOFT-FETCH')
//   router.replace('/')
}


// ipcRenderer.invoke('MUBU-TOKEN-GET').then(token => {
//   if (token) { eventBackButton.value = true }
//   accessToken.anypoint.clientId = token.anypoint.client_id
//   accessToken.anypoint.clientSecret = token.anypoint.client_secret

//   accessToken.gocd = token.gocd
// })
</script>

<template>
  <section class="d-flex justify-content-center align-items-center" style="height: 90vh;">
    <div class="card" style="width: 50em;">
      <div v-if="!eventAuth" class="card-body">
        <h2 class="card-title mt-0">Settings</h2>
        <form>
          <h4 class="card-subtitle mb-2 text-muted">Anypoint Platform</h4>
          <div class="form-group row">
            <label for="inputClientID" class="col-3 col-form-label col-form-label-sm">Client ID</label>
            <div class="col-9 pr-2">
              <input v-model="accessToken.anypoint.clientId" :readonly="eventSubmit" :type="eventBackButton ? 'password' : 'text'" class="form-control form-control-sm" :class="{ 'is-invalid': accessToken.anypoint.error }" id="inputClientID" placeholder="Client ID" maxlength="32">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputClientSecret" class="col-3 col-form-label col-form-label-sm">Client Secret ID</label>
            <div class="col-9 pr-2">
              <input v-model="accessToken.anypoint.clientSecret" :readonly="eventSubmit" :type="eventBackButton ? 'password' : 'text'" class="form-control form-control-sm" :class="{ 'is-invalid': accessToken.anypoint.error }" id="inputClientSecret" placeholder="Client Secret" maxlength="32">
            </div>
          </div>
          <h4 class="card-subtitle mb-2 mt-3 text-muted">GoCD <small>(Optional)</small></h4>
          <div class="form-group row">
            <label for="inputGoCDURL" class="col-3 col-form-label col-form-label-sm">Domain</label>
            <div class="col-9 pr-2">
              <input v-model="accessToken.gocd.domain" :readonly="eventSubmit" type="text" class="form-control form-control-sm" :class="{ 'is-invalid': accessToken.gocd.error }" id="inputGoCDURL" placeholder="Domain" maxlength="100">
            </div>
          </div>
          <div class="form-group row">
            <label for="inputGoCDToken" class="col-3 col-form-label col-form-label-sm">Access Tokens</label>
            <div class="col-9 pr-2">
              <input v-model="accessToken.gocd.token" :readonly="eventSubmit" :type="eventBackButton ? 'password' : 'text'" class="form-control form-control-sm" :class="{ 'is-invalid': accessToken.gocd.error }" id="inputGoCDToken" placeholder="Personal Access Tokens" maxlength="40">
            </div>
          </div>
          <div class="form-group row justify-content-end mt-5">
            <div class="col-auto" style="column-gap: 0.5em;">
              <button type="button" class="btn btn-primary" :disabled="eventSubmit" @click.prevent="onAuthAnypointConfig">
                <fa v-show="eventSubmit" icon="fa-circle-notch" spin />
                Authication
              </button>
              <button v-if="eventBackButton" type="button" class="btn btn-secondary" :disabled="eventSubmit" @click.prevent="router.push('/')">
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
      <div v-else class="card-body">
        <h2 class="card-title mt-0">Downloading...</h2>
        <h4 class="card-subtitle mb-2 text-muted">Getting Data from anypoint platfrom</h4>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card {
  animation: card 15s infinite forwards cubic-bezier(0.65, 0.05, 0.36, 1);
  background: rgba(32,33,34,0.8);
  border: 1px solid rgba(0,0,0,0.15);
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: block;
}

@supports (backdrop-filter: blur(6px)) {
  .card {
    background:rgba(0,0,0,0.1);
    backdrop-filter: blur(6px)
  }
}

@media (max-width: 920px) {
  .card {
    max-width:400px
  }
}

</style>
