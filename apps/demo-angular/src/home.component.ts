import { Component } from '@angular/core';

@Component({
	selector: 'demo-home',
	templateUrl: 'home.component.html',
})
export class HomeComponent {
	demos = [
		{
			name: 'expo-contacts-nativescript-plugin',
		},
		{
			name: 'expo-nativescript-adapter',
		},
		{
			name: 'expo-nativescript-react-native-shim',
		},
		{
			name: 'expo-permissions',
		},
		{
			name: 'expo-permissions-nativescript-plugin',
		},
	];
}
