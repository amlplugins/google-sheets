/**
 * @amlplugins/google-sheets
 *
 * Thin namespaced re-export of the native @googleapis/sheets SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Google Sheets (sheets_v4).
 */

import * as _sdk from "@googleapis/sheets";
export * from "@googleapis/sheets";
export { _sdk as sdk };
export default _sdk;
