import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ExpoContactsNativescriptPluginComponent } from './expo-contacts-nativescript-plugin.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ExpoContactsNativescriptPluginComponent }])],
	declarations: [ExpoContactsNativescriptPluginComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ExpoContactsNativescriptPluginModule {}
