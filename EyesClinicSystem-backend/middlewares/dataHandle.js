const CONFIG_STATUS = require('../config/status.json');
const dataHandle = async (data, req, res) => {
  let dataName = Object.getOwnPropertyNames(data)[0];
  let resData = Object.values(data)[0];
  if (resData == undefined) {
    res.status(500).send({
      status: CONFIG_STATUS.DATA_NOT_FOUND,
      message: 'Data is not found. Please try again.',
    });
  } else if (Object.keys(resData).length === 0) {
    res.status(500).send({
      status: CONFIG_STATUS.DATA_NOT_FOUND,
      message: 'Data is not found. Please try again.',
    });
  } else if (resData.length === 0) {
    res.status(500).send({
      status: CONFIG_STATUS.DATA_NOT_FOUND,
      message: 'Data is not found. Please try again.',
    });
  } else {
    res.status(200).send({
      status: CONFIG_STATUS.SUCCESS,
      message: `Get ${dataName} data successful.`,
      data,
    });
  }
};
const multiDataHandle = async (data, subData, req, res) => {
  const desData = { ...data };
  let dataName = Object.getOwnPropertyNames(desData)[0];
  let resData = Object.values(desData)[0];
  if (resData == undefined) {
    res.status(500).send({
      status: CONFIG_STATUS.DATA_NOT_FOUND,
      message: 'Data is not found. Please try again.',
    });
  } else if (Object.keys(resData).length === 0) {
    res.status(500).send({
      status: CONFIG_STATUS.DATA_NOT_FOUND,
      message: 'Data is not found. Please try again.',
    });
  } else if (resData.length === 0) {
    res.status(500).send({
      status: CONFIG_STATUS.DATA_NOT_FOUND,
      message: 'Data is not found. Please try again.',
    });
  } else {
    res.status(200).send({
      status: CONFIG_STATUS.SUCCESS,
      message: `Get ${dataName} data successful.`,
      data: {
        ...subData,
        ...data,
      },
    });
  }
};
module.exports = {
  dataHandle,
  multiDataHandle,
};
