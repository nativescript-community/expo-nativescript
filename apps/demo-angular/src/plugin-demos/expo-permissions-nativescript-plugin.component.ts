import { Component, NgZone } from '@angular/core';
import { DemoSharedExpoPermissionsNativescriptPlugin } from '@demo/shared';
import {} from '@nativescript-community/expo-permissions-nativescript-plugin';

@Component({
	selector: 'demo-expo-permissions-nativescript-plugin',
	templateUrl: 'expo-permissions-nativescript-plugin.component.html',
})
export class ExpoPermissionsNativescriptPluginComponent {
	demoShared: DemoSharedExpoPermissionsNativescriptPlugin;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedExpoPermissionsNativescriptPlugin();
	}
}
