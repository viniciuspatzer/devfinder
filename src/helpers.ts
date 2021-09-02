export const getJSON = function (url: string, errorMsg: string) {
  return fetch(url).then(res => {
      if (!res.ok)
          throw new Error(`${errorMsg} (${res.status})`);
      return res.json()
  });
};