import type { BeforeFetchContext, MaybeRefOrGetter, UseFetchOptions } from '@vueuse/core'
import { createFetch } from '@vueuse/core'

// TODO: Use real service
const getUserToken = async () => 'jwt token'

export async function injectToken({ options }: BeforeFetchContext) {
  const userToken = await getUserToken()
  if (userToken) {
    const authOpts = {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
    if (options) {
      if (options.headers)
        options.headers = { ...options.headers, ...authOpts.headers }
      else
        options.headers = authOpts.headers
    }
    else {
      options = authOpts
    }
  }

  return { options }
}

export default function useAppFetch(url: MaybeRefOrGetter<string>, useFetchOptions: UseFetchOptions) {
  const newFetch = createFetch({
    baseUrl: 'https://api.coingecko.com/api/v3/',
    // combination: 'overwrite',
    options: {
      beforeFetch: injectToken,
    },
    fetchOptions: {
      mode: 'cors',
    },
  })

  return newFetch(url, useFetchOptions)
}
