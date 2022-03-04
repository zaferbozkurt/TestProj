import moment from 'moment';

const has = Object.prototype.hasOwnProperty;

const encodeQueryString = (obj) => {
  const str = [];
  Object.entries(obj).forEach(([key, value]) => {
    if (has.call(obj, key)) {
      str.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
  });
  return str.join('&');
};

const decodeQueryString = (queryString) => {
  try {
    const query = {};
    const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (let i = 0; i < pairs.length; i += 1) {
      const pair = pairs[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
  } catch (error) {
    return {};
  }
};

const toCapitalize = (value) => {
  if (value) {
    return value
      .toLocaleLowerCase('tr-TR')
      .split(' ')
      .map((s) => s.charAt(0).toLocaleUpperCase('tr-TR') + s.substring(1))
      .join(' ');
  }
  return '';
};

const generateYearList = (count) => {
  const years = [];
  const dateStart = moment();
  const dateEnd = moment().add(count, 'y');
  while (dateEnd.diff(dateStart, 'years') >= 0) {
    years.push(dateStart.format('YYYY'));
    dateStart.add(1, 'year');
  }
  return years.map((x) => {
    return {
      key: x,
      name: x
    };
  });
};

const formatNumber = (value) => {
  if (value) {
    try {
      const amount = Number(value);
      const formattedAmount = amount
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

      return `${formattedAmount} ₺`;
    } catch (error) {
      return value;
    }
  }

  return 0;
};

export default {
  toCapitalize,
  encodeQueryString,
  decodeQueryString,
  generateYearList,
  formatNumber
};
