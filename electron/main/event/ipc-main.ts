import { initilizeApp } from '../../user-config'
// import settings from 'electron-settings'
import log from 'electron-log/renderer'

export interface AnypointToken {
  grant_type: String
  client_id: String
  client_secret: String
}

export interface GoCDToken {
  domain: String
  token: String
}

export default {
  'INIT-CONFIG': initilizeApp,
  'APP-OPEN-MENU': () => {
    log.log('backend')
  },
  'CHECK-GOCD_HEATH': async (_: Electron.IpcMainInvokeEvent, gocdDomain: string) => {
    try {
      const res = await fetch(`https://${(new URL(gocdDomain)).hostname}/go/api/v1/health`, {
        headers: { 'Content-Type': 'application/vnd.go.cd.v1+json; charset=utf-8' }
      })
      return res.status === 200
    } catch (ex) {
      return false
    }
  },
  'MULESOFT-FETCH': async () => {
    // const oauth = await getAccountMe()
    // await settings.set('mulesoft.account', oauth as any)
  }
}
