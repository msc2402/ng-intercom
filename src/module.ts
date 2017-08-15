import { Intercom, IntercomEnvironment } from './intercom';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IntercomBrowser } from './intercom.browser';

@NgModule({
    imports: [CommonModule]
})
export class IntercomModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IntercomModule,
            providers: [
                IntercomBrowser,
                { provide: IntercomEnvironment, useClass: IntercomBrowser },
                Intercom
            ]
        }
    }
}