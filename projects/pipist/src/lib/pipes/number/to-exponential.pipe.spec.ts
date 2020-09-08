import { ToExponential } from "./to-exponential.pipe";

describe("ToFixedPipe", () => {
  let pipe: ToExponential;

  beforeEach(() => {
    pipe = new ToExponential();
  });

  it("Exponential number with assigned value", () => {
    expect(pipe.transform(44)).toBe("4.4e+1");
    expect(pipe.transform(44, 2)).toBe("4.40e+1");
    expect(pipe.transform(44, null)).toBe("4e+1");
  });
});
