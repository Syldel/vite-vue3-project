interface IObjectOfAny { [key: string]: any }

export function mapObject(obj: IObjectOfAny, fn: Function): IObjectOfAny {
  const newObj = {}
  Object.keys(obj).forEach((k) => {
    newObj[k] = fn(obj[k])
  })
  return newObj
}
