# Orbit · Consumer Intelligence Laboratory

React / TypeScript / Vite / D3. Public application code, private browser-local analysis. No backend, analytics, external AI calls, or persistent record storage.

## Student connection

1. Open the deployed GitHub Pages dashboard.
2. Click **Connect data**, download the extension ZIP and extract it. In Chrome, open `chrome://extensions`, enable Developer mode, **Load unpacked**, choose the extracted folder. This is a temporary test workflow; no Chrome Web Store listing exists.
3. Refresh the dashboard, open the Orbit extension popup and click **Approve history access**. Chrome asks for optional history permission. Select a period in the dashboard and click **Analyze my history**.

The extension is scoped to `https://ashleyvallila.github.io/Consumer-Profile-Dashboard/`. Local preview supports file imports but deliberately cannot request history. No browser history has been accessed by the developer agent.

## Imports

Drop CSV / JSON or ZIP containing `conversations.json`, `BrowserHistory.json` / `Browser History.json`, or `MyActivity.json`. CSV headers: `url,title,time`; JSON arrays or `Browser History`, `history`, `records`, `orders`, `activity` wrappers. Accept ISO dates, epoch seconds/milliseconds and Takeout microseconds. Unknown dates stay unknown. Re-imports are deduplicated by sanitized URL, title, timestamp and kind. URL queries/fragments and credential-bearing URLs are excluded.

ChatGPT mapping exports: only user text messages; assistant/tool/system messages excluded. Basic quotation removal cannot identify all quotations, pasted third-party text or paraphrases. Review evidence before relying on inferences. Takeout HTML and arbitrary retailer-specific export schemas are not supported; supply CSV/JSON with documented fields. Maximum file size 30 MB, extracted ZIP total 60 MB.

Products: JSON array with `type: "product"`, `name`, `url`, optional `category`, `price`, ISO `currency`, `verifiedAt`, and optional data-URI `image`. There is a blank schema download in Product discovery. Prices are source-reported, not independently verified; check the retailer. Remote images are intentionally blocked to prevent third-party requests. Product URLs can be added manually; the extension has no product-page permission and does not scrape retailers.

## Analysis & limits

Rules are disclosed in `src/engine.ts`. First matching non-sensitive keyword category wins. Interest threshold: three supporting records. Score: category records / classified records × 100. This is deterministic explainable inference, not a trained AI model or a validated personality inventory. Visits do not establish purchases, preferences or willingness to pay. Shopping domains are proxies, not verified brands. Negative self-report removes the category from segments and product matching; raw observations remain visible. Uncertain feedback remains explicitly uncertain.

The force network combines keyword categories, shared observed domains, recognizable search-result page titles, and supplied products. Weighted label propagation detects communities in the non-hub graph; it is deterministic and capped at 20 rounds. Shared domains can connect multiple interests. Search recognition is limited to explicit Google/Bing result-title formats; raw URL queries are never retained. Product category links represent inferred affinity. Up to 12 domains per category, 30 search-title nodes and 60 supplied products appear. Product brands are not independently verified. Missing evidence is shown as INSUFFICIENT DATA. No sensitive-trait predictions are made; conservative filtering cannot recognize every sensitive page.

Chrome imports use `history.search` then `history.getVisits`, filtered to selected period. Lifetime visit counts are not mistaken for period activity. Caps: 10,000 matching URLs / 50,000 visits, with partial-coverage disclosure. Chrome history retention/sync limitations still apply.

## Privacy

All personal records, feedback, products and profiles live in React memory. Refresh/close clears them. Delete all clears the session; remove individual records or sources in Privacy. Disconnect removes Chrome records and requests revocation of optional history permission. Uninstall or revoke from the popup to independently confirm revocation. Never commit exports, private data or browser profiles. `.gitignore` excludes common private-data locations. GitHub Actions deploys only `dist/`.

## Development & deployment

Node 24 recommended. `npm ci`, `npm test`, `npm run build`, `npm run dev`. Preview at `http://127.0.0.1:5173/Consumer-Profile-Dashboard/`. The Pages workflow tests/builds and deploys on pushes to main. Repository Settings → Pages must use GitHub Actions. Expected URL is not proof of a successful deployment: verify the actual workflow and HTTP response.

See `docs/STORE-SUBMISSION.md` for extension submission disclosures and remaining publisher steps. Automated mocked Chrome tests do not replace a user-approved real installation test.
