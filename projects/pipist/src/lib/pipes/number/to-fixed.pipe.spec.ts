import { ToFixed } from "./to-fixed.pipe";

describe("ToFixedPipe", () => {
  let pipe: ToFixed;

  beforeEach(() => {
    pipe = new ToFixed();
  });

  it("Fix number with assigned value", () => {
    const value = 4.55331;
    expect(pipe.transform(value)).toBe("5");
    expect(pipe.transform(4.3)).toBe("4");
    expect(pipe.transform(value, 2)).toBe("4.55");
    expect(pipe.transform(4.3, 2)).toBe("4.30");
  });
});
