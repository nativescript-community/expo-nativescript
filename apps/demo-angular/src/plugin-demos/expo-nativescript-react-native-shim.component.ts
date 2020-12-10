import { Component, NgZone } from '@angular/core';
import { DemoSharedExpoNativescriptReactNativeShim } from '@demo/shared';
import {} from '@nativescript-community/expo-nativescript-react-native-shim';

@Component({
	selector: 'demo-expo-nativescript-react-native-shim',
	templateUrl: 'expo-nativescript-react-native-shim.component.html',
})
export class ExpoNativescriptReactNativeShimComponent {
	demoShared: DemoSharedExpoNativescriptReactNativeShim;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedExpoNativescriptReactNativeShim();
	}
}
