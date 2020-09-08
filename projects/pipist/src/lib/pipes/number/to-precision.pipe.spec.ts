import { ToPrecision } from "./to-precision.pipe";

describe("ToFixedPipe", () => {
  let pipe: ToPrecision;

  beforeEach(() => {
    pipe = new ToPrecision();
  });

  it("Precision number with assigned value", () => {
    const value = 4.55331;
    expect(pipe.transform(value)).toBe("5");
    expect(pipe.transform(4.3)).toBe("4");
    expect(pipe.transform(value, 2)).toBe("4.6");
    expect(pipe.transform(4.3, 2)).toBe("4.3");
  });
});
