import { Component, NgZone } from '@angular/core';
import { DemoSharedExpoPermissions } from '@demo/shared';
import {} from '@nativescript-community/expo-permissions';

@Component({
	selector: 'demo-expo-permissions',
	templateUrl: 'expo-permissions.component.html',
})
export class ExpoPermissionsComponent {
	demoShared: DemoSharedExpoPermissions;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedExpoPermissions();
	}
}
