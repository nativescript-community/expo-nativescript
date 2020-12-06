export type ProxyNativeModule = {
  [propertyName: string]: any;
  /**
   * @platform ios (stub for Android)
   */
  addListener: (eventName: string) => void;
  /**
   * @platform ios (stub for Android)
   */
  removeListeners: (count: number) => void;
};
