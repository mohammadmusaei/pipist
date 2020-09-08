import { NgModule } from "@angular/core";

import { ToFixed } from "./to-fixed.pipe";
import { ToPrecision } from "./to-precision.pipe";
import { ToExponential } from "./to-exponential.pipe";

@NgModule({
  declarations: [ToFixed, ToPrecision, ToExponential],
  exports: [ToFixed, ToPrecision, ToExponential],
})
export class NumberModule {}
