import { Component, NgZone } from '@angular/core';
import { DemoSharedExpoNativescriptAdapter } from '@demo/shared';
import {} from '@nativescript-community/expo-nativescript-adapter';

@Component({
	selector: 'demo-expo-nativescript-adapter',
	templateUrl: 'expo-nativescript-adapter.component.html',
})
export class ExpoNativescriptAdapterComponent {
	demoShared: DemoSharedExpoNativescriptAdapter;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedExpoNativescriptAdapter();
	}
}
