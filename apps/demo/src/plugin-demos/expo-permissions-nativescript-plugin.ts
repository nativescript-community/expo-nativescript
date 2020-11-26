import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedExpoPermissionsNativescriptPlugin } from '@demo/shared';
import {} from '@nativescript-community/expo-permissions-nativescript-plugin';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedExpoPermissionsNativescriptPlugin {}
