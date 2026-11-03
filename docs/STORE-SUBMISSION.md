# Extension distribution preparation

Status: packaged for unpacked testing. Not submitted to or approved by Chrome Web Store. Do not show a store installation URL until a real listing is verified.

Name: Orbit · Private Consumer Intelligence

Single purpose: voluntarily share a selected period of browsing visits with the exact authorized Orbit dashboard for transparent browser-local consumer-interest analysis.

Optional permission justification — `history`: read visited page URLs, page titles and visit timestamps after explicit Chrome permission approval and a dashboard Analyze action. Actual visits are retrieved to honor the selected period. No continuous collection. Permission may be revoked from the popup or dashboard.

Content script scope: only `https://ashleyvallila.github.io/Consumer-Profile-Dashboard/*`, top frame only. Validates same-window/same-origin messages, message type and allowed period. Service worker independently checks sender origin, path, frame and history grant. No all-sites permission, activeTab, scripting, storage, cookies, identity, password or credential access. No remote code.

Privacy policy draft (publish an accessible final policy before submission):

Orbit reads browsing URLs, titles and visit times only after you approve Chrome's optional history permission and request analysis. Data passes locally to the authorized dashboard tab. It is not sent to the developer, external AI APIs, analytics, advertisers or other third parties. The extension does not persist browsing records. The dashboard keeps voluntarily supplied records in tab memory; refreshing, closing or deleting clears them. The extension never accesses passwords, cookies or tokens. Revoke history permission in the extension popup; remove the extension in Chrome to uninstall it. Visiting a product/evidence source through an explicit link sends a normal browser navigation to that site.

Disclosure category: web history. Declare local processing and temporary use accurately in the store's current privacy form. No sale, advertising use, creditworthiness determination or unrelated purpose.

Included: MV3 manifest, 16/48/128 PNG icons, worker, narrow bridge, permission popup, privacy/disclosure draft, distribution ZIP. Publisher must supply an accountable support contact, final hosted privacy-policy URL, genuine screenshots from an authorized test, store assets and any required developer registration/payment; review Chrome Web Store's current requirements before submission. Submission/legal attestations and marketplace approval are external publisher steps.

Manual test after permission approval: load unpacked, refresh authorized dashboard, deny permission and verify no records; approve then analyze a short period; inspect visit dates and evidence; disconnect during an import; verify no late data reappears; revoke in popup; verify another origin/path cannot request history; refresh and confirm records disappear. Do not use personal records in store screenshots.
