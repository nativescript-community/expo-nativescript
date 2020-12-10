import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ExpoNativescriptReactNativeShimComponent } from './expo-nativescript-react-native-shim.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ExpoNativescriptReactNativeShimComponent }])],
	declarations: [ExpoNativescriptReactNativeShimComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ExpoNativescriptReactNativeShimModule {}
