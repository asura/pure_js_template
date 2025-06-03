/**
 * 犬クラス
 * @extends Animal
 */
class Dog extends Animal {
  /**
   * 犬のインスタンスを構築する
   * @param {String} name 名称
   * @param {String} breed 犬種
   */
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  /**
   * 話す（吠える）
   * @override
   */
  speak() {
    return this.name + "「ワンワン！」";
  }

  /**
   * しっぽを振る
   */
  wagTail() {
    return this.name + "がしっぽを振っています";
  }

  /**
   * 犬種を取得する
   * @returns {String} 犬種
   */
  getBreed() {
    return this.breed;
  }
}
