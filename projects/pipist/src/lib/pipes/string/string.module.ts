import { NgModule } from '@angular/core';
import { AddZeroPipe } from './add-zero.pipe';
import { ReplacePipe } from './replace.pipe';
import { LtrimPipe } from './ltrim.pipe';
import { RtrimPipe } from './rtrim.pipe';
import { TrimPipe } from './trim.pipe';
import { WrapPipe } from './wrap.pipe';
import { ReversePipe } from './reverse.pipe';
import { EncodeURIPipe } from './encode-uri.pipe';
import { EncodeURIComponentPipe } from './encode-uricomponent.pipe';
import { DecodeURIPipe } from './decode-uri.pipe';
import { DecodeURIComponentPipe } from './decode-uricomponent.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { FormatPipe } from './format.pipe';
import { BtoaPipe } from './btoa.pipe';
import { AtobPipe } from './atob.pipe';
import { UnicodePipe } from './unicode.pipe';
import { TruncatePipe } from './truncate.pipe';
import { LeftPadPipe } from './left-pad.pipe';
import { RightPadPipe } from './right-pad.pipe';
import { MatchPipe } from './match.pipe';
import { AnchorPipe } from './anchor.pipe';

@NgModule({
    declarations: [
        AddZeroPipe,
        ReplacePipe,
        LtrimPipe,
        RtrimPipe,
        TrimPipe,
        WrapPipe,
        ReversePipe,
        EncodeURIPipe,
        EncodeURIComponentPipe,
        DecodeURIPipe,
        DecodeURIComponentPipe,
        CapitalizePipe,
        FormatPipe,
        BtoaPipe,
        AtobPipe,
        UnicodePipe,
        TruncatePipe,
        LeftPadPipe,
        RightPadPipe,
        MatchPipe,
        AnchorPipe
    ],
    exports: [
        AddZeroPipe,
        ReplacePipe,
        LtrimPipe,
        RtrimPipe,
        TrimPipe,
        WrapPipe,
        ReversePipe,
        EncodeURIPipe,
        EncodeURIComponentPipe,
        DecodeURIPipe,
        DecodeURIComponentPipe,
        CapitalizePipe,
        FormatPipe,
        BtoaPipe,
        AtobPipe,
        UnicodePipe,
        TruncatePipe,
        LeftPadPipe,
        RightPadPipe,
        MatchPipe,
        AnchorPipe
    ]
})
export class StringModule { }
