import { Component, NgZone } from '@angular/core';
import { DemoSharedExpoContactsNativescriptPlugin } from '@demo/shared';
import {} from '@nativescript-community/expo-contacts-nativescript-plugin';

@Component({
	selector: 'demo-expo-contacts-nativescript-plugin',
	templateUrl: 'expo-contacts-nativescript-plugin.component.html',
})
export class ExpoContactsNativescriptPluginComponent {
	demoShared: DemoSharedExpoContactsNativescriptPlugin;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedExpoContactsNativescriptPlugin();
	}
}
