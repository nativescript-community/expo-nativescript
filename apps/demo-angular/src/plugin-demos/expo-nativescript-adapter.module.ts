import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ExpoNativescriptAdapterComponent } from './expo-nativescript-adapter.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ExpoNativescriptAdapterComponent }])],
	declarations: [ExpoNativescriptAdapterComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ExpoNativescriptAdapterModule {}
