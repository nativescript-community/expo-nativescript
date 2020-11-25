import type { RNSStyle } from "react-nativescript";

/**
 * We'll carry this convenience function around until RNS itself provides something like it.
 */
type RNSStyleSheet<T extends {}> = {
    [P in keyof T]: RNSStyle;
}
export const createStyleSheet = <T extends {}>(arg: RNSStyleSheet<T>): RNSStyleSheet<T> => arg;
