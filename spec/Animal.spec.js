describe("Animalクラス", () => {
  let sut;

  beforeEach(() => {
    sut = new Animal("NAME");
  });

  it("オブジェクトは空でない", () => {
    expect(sut).not.toBeNull();
  });

  it("speakメソッドを呼ぶと鳴く", () => {
    expect(sut.speak()).toEqual("NAME「鳴き声」");
  });

  it("sleepメソッドを呼ぶと寝る", () => {
    expect(sut.sleep()).toEqual("NAME「zzz」");
  });
});
