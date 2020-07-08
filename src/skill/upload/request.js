function getError (action, xhr) {
  let errorText = '配置错误'
  if (xhr.response) {
    errorText = `${xhr.response.error || xhr.response}`
  } else if (xhr.responseText) {
    errorText = `${xhr.responseText}`
  }
  const err = new Error(errorText)
  err.status = xhr.status
  err.method = 'post'
  err.url = action
  return err
}
function getBody (xhr) {
  const text = xhr.responseText || xhr.response
  try {
    return JSON.parse(text)
  } catch (e) {
    return text
  }
}
export default ({
  action = '',
  name = 'file',
  file = [],
  headers = {},
  data = {},
  onerror = null,
  onsuccess = null,
  onprogress = null
}) => {
  let xhr = new XMLHttpRequest()
  let formData = new FormData()

  for (let k in headers) {
    if (headers.hasOwnProperty(k)) {
      xhr.setRequestHeader(k, headers[k])
    }
  }

  if (data) {
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    })
  }
  formData.append(name, file, file.name)

  if (xhr.upload) {
    xhr.upload.onprogress = e => {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100
      }
      onprogress && onprogress(e)
    };
  }

  xhr.onerror = (e) => {
    let err = getError(action, xhr)
    onerror && onerror(err)
  }

  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      let err = getBody(xhr)
      onerror && onerror(err)
    } else {
      let res = getBody(xhr)
      onsuccess && onsuccess(res)
    }
  }

  xhr.open('post', action, true)
  xhr.send(formData)
  return xhr
}