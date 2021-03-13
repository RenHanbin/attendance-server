module.exports = class Result {
  /**
   * @description: 包装返回对象
   * @param {*} mainData 真实data
   * @param {*} msg 想要展示的提示信息
   */
  constructor(mainData, msg) {
    this.mainData = mainData;
    this.msg = msg;
  }
};
