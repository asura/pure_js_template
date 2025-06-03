describe("Dogクラス", () => {
  let sut;

  beforeEach(() => {
    sut = new Dog("ポチ", "柴犬");
  });

  it("オブジェクトは空でない", () => {
    expect(sut).not.toBeNull();
  });

  it("Animalクラスを継承している", () => {
    expect(sut instanceof Animal).toBe(true);
  });

  it("speakメソッドを呼ぶと吠える", () => {
    expect(sut.speak()).toEqual("ポチ「ワンワン！」");
  });

  it("sleepメソッドを呼ぶと寝る（継承）", () => {
    expect(sut.sleep()).toEqual("ポチ「zzz」");
  });

  it("wagTailメソッドを呼ぶとしっぽを振る", () => {
    expect(sut.wagTail()).toEqual("ポチがしっぽを振っています");
  });

  it("getBreedメソッドで犬種を取得できる", () => {
    expect(sut.getBreed()).toEqual("柴犬");
  });
});
