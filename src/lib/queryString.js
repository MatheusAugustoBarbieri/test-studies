const keyValue = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please check you params');
  }
  return `${key}=${value}`;
};

const queryString = obj => {
  return Object.entries(obj).map(keyValue).join('&');
};

const parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }
      return [key, value];
    }),
  );

export { queryString, parse };
