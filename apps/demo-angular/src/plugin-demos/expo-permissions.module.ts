import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ExpoPermissionsComponent } from './expo-permissions.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ExpoPermissionsComponent }])],
	declarations: [ExpoPermissionsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ExpoPermissionsModule {}
