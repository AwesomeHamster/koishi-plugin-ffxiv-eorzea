import mock from '@koishijs/plugin-mock'
import { App } from 'koishi'

import * as eorzea from '../src'

describe('eorzea', async () => {
  const app = new App()
  app.plugin(mock)
  app.plugin(eorzea)

  before(async () => app.start())
  after(async () => app.stop())

  const client = app.mock.client('123')

  app.i18n.define('zh', {
    'commands.eorzea.time.messages.eorzea_time_now': '{0}',
  })

  it('eorzea time', async () => {
    await client.shouldReply('eorzea.time', /^\d+:\d+:\d+$/)
  })
})
