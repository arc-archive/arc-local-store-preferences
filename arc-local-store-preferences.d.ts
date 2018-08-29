/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   arc-local-store-preferences.html
 */

/// <reference path="../polymer/types/polymer-element.d.ts" />

declare namespace LogicElements {

  /**
   * `arc-local-store-preferences`
   *
   * An element that works with local storage to store ARC preferences.
   *
   * It can be used by any application. Remember to change `dataPrefix` to something
   * unique to your application.
   *
   * Keys are a combination of prefix and passed `key`,
   * Values in local storage are wrapped into JS object with `value` property.
   * This ensures data type when restoring the value without guessing the type.
   *
   * To ensure compatibility with other storage methods in ARC this handles
   * all operations asynchronous.
   *
   * The element offers an event API by handling `settings-read` and
   * `settings-changed` custom events.
   * Both events must be cancelable in order to be handled.
   *
   * ## settings-read
   *
   * The detail object can contain optional `settings` property with array of
   * key names to return with the query.
   *
   * Example:
   *
   * ```javascript
   * const e = new CustomEvent('settings-changed', {
   *  detail: {
   *    settings: ['key1', 'key2']
   *  },
   *  bubbles: true,
   *  composed: true,
   *  cancelable: true
   * });
   * this.dispatchEvent(e);
   * if (e.defaultPrevented) {
   *  e.detail.result.then((data) => console.log(data));
   * }
   * ```
   *
   * ## settings-changed
   *
   * Example:
   *
   * ```javascript
   * const e = new CustomEvent('settings-changed', {
   *  detail: {
   *    name: 'my-key',
   *    value: true
   *  },
   *  bubbles: true,
   *  composed: true,
   *  cancelable: true
   * });
   * this.dispatchEvent(e);
   * if (e.defaultPrevented) {
   *  e.detail.result.then(() => console.log('Settings saved'));
   * }
   * ```
   */
  class ArcLocalStorePreferences extends Polymer.Element {

    /**
     * Storage preference key prefix
     */
    dataPrefix: string|null|undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;

    /**
     * Handler for the `settings-read` custom event. Reads current settings.
     * It set's the `result` property on event's detail object with the
     * promise from calling `load()` function.
     *
     * @param e Custom event
     */
    _readHandler(e: CustomEvent|null): void;

    /**
     * A handler for window `settings-changed` custom event.
     * Sends the intent to the main proces to update preferences.
     */
    _changeHandler(e: CustomEvent|null): void;

    /**
     * Loads all stored settings in the local storage
     *
     * @param scope Optional list of key names to return.
     * @returns A promise resolved to the settings object
     */
    load(scope: Array<String|null>|null): Promise<any>|null;

    /**
     * Stores value in local store using `dataPrefix` to construct the key.
     *
     * @param key Setting name
     * @param value A value to store
     */
    store(key: String|null, value: any|null): Promise<any>|null;

    /**
     * Removes all stored preferences.
     * If `dataPrefix` is not set then it removes all items.
     */
    clear(): void;

    /**
     * Creates a JSON wrapper for storage value. This ensures data types when
     * restorring values from local storage
     *
     * @param value Restored value
     * @returns Previously stored value.
     */
    _wrap(value: String|null): any|null;

    /**
     * Unwraps value from local storage data.
     *
     * @param value Read value
     * @returns originally stored value.
     */
    _unwrap(value: String|null): any|null;

    /**
     * Handler for the `storage` event. Dispateched when other window updated
     * value in the storage area.
     */
    _winSettingsHandler(e: StorageEvent|null): void;

    /**
     * Dispatches non cancelable `settings-changed` event with changed value.
     *
     * @param name Setting key
     * @param value Setting value
     */
    _informChanged(name: String|null, value: Any|null): void;
  }
}

interface HTMLElementTagNameMap {
  "arc-local-store-preferences": LogicElements.ArcLocalStorePreferences;
}
