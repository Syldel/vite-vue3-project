import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { BeforeFetchContext } from '@vueuse/core'
import useAppFetch, { injectToken } from './app-fetch'

describe('useAppFetch', () => {
  describe('injectToken function', () => {
    let fetchContext: BeforeFetchContext
    let result: {
      options: RequestInit
    }

    beforeEach(() => {
      fetchContext = {
        url: 'ping',
        options: {
          method: 'GET',
          headers: { Origin: 'http://localhost:5173' },
          mode: 'cors',
        },
        cancel: vi.fn(),
      }
    })

    it('ajoute Authorization dans le headers quand headers est défini et possède déjà des données', async () => {
      result = await injectToken(fetchContext)

      expect(result.options.headers).toEqual({ Origin: 'http://localhost:5173', Authorization: 'Bearer jwt token' })
    })

    it('ajoute Authorization dans le headers quand headers est non défini', async () => {
      fetchContext.options.headers = undefined
      result = await injectToken(fetchContext)

      expect(result.options.headers).toEqual({ Authorization: 'Bearer jwt token' })
    })

    it('ajoute Authorization dans le headers quand options est non défini', async () => {
      const emptyContext = {} as BeforeFetchContext
      result = await injectToken(emptyContext)

      expect(result.options.headers).toEqual({ Authorization: 'Bearer jwt token' })
    })
  })

  describe('useAppFetch function', () => {
    it('retourne les bonnes clefs', () => {
      const fetchResult = useAppFetch('ping', {
        refetch: false,
        immediate: false,
      })

      expect(fetchResult).toHaveProperty('data')
      expect(fetchResult).toHaveProperty('error')
      expect(fetchResult).toHaveProperty('abort')
      expect(fetchResult).toHaveProperty('statusCode')
      expect(fetchResult).toHaveProperty('isFetching')
      expect(fetchResult).toHaveProperty('isFinished')
      expect(fetchResult).toHaveProperty('canAbort')
      expect(fetchResult).toHaveProperty('execute')
    })
  })
})
