const dayjs = require('dayjs');

export const formatData = (data, format) => dayjs(data).format(format);
