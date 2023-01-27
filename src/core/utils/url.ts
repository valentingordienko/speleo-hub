type TUrlObject = {
  path: string[]
}

export function getUrlObject(urlString: string): TUrlObject {
  let [path, search] = urlString.split('?', 2)

  while (path.startsWith('/')) {
    path = path.substring(1, path.length)
  }
  while (path.endsWith('/')) {
    path = path.substring(0, path.length - 1)
  }

  return {
    path: path ? path.split('/') : []
  }
}

export function checkUrl(template: string[], url: string[]): boolean {
  return template.every((templateValue, index) => {
    const urlValue = url[index]
    if (templateValue && urlValue) {
      return templateValue.startsWith(':') ? true : templateValue === urlValue
    }
    return false
  })
}

export function getUrlParams<T extends string>(template: T): Partial<Record<string, string>> {
  const {path: templatePath} = getUrlObject(template)
  const {path: urlPath} = getUrlObject(window.location.pathname)

  return templatePath.reduce<ReturnType<typeof getUrlParams>>((result, urlPart, index)=>{
    if (urlPart.startsWith(':')) {
      result[urlPart.substring(1)] = urlPath[index]
    }
    return result
  }, {})
}

export function isUrl<T extends string>(template: T, url: string, exec = true): boolean {
  const {path: templatePath} = getUrlObject(template)
  const {path: urlPath} = getUrlObject(url)
  const checkResult = checkUrl(templatePath, urlPath)
  return exec ? templatePath.length === urlPath.length && checkResult : checkResult
}
