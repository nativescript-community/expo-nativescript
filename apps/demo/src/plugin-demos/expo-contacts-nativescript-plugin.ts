import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedExpoContactsNativescriptPlugin } from '@demo/shared';
import {} from '@nativescript-community/expo-contacts-nativescript-plugin';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedExpoContactsNativescriptPlugin {}
