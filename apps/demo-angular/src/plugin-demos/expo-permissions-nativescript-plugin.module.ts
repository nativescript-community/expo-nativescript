import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ExpoPermissionsNativescriptPluginComponent } from './expo-permissions-nativescript-plugin.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ExpoPermissionsNativescriptPluginComponent }])],
	declarations: [ExpoPermissionsNativescriptPluginComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ExpoPermissionsNativescriptPluginModule {}
