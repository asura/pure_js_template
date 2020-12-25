/**
 * 動物クラス
 */
class Animal {
  /**
   * 与えられた名称のインスタンスを構築する
   * @param {String} name 名称
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * 話す
   */
  speak() {
    return this.name + "「鳴き声」";
  }

  /**
   * 寝る
   */
  sleep() {
    return this.name + "「zzz」";
  }
}
