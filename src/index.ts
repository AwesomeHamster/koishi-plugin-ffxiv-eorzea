import { Context } from 'koishi'

import * as time from './commands/time'

export const name = 'eorzea'

export async function apply(ctx: Context): Promise<void> {
  ctx.plugin(time)
}
