# MVP Release Checklist

This checklist defines the repository MVP release profile: the minimum complete embedding SDK that is usable, documentable, and supportable.

## 1) Core embedding foundation

- [ ] `createEmbeddingContext` is available as a public API.
- [ ] iframe and message-based communication is stable for supported experiences.
- [ ] Public API surface is typed and exported in TypeScript declarations.
- [ ] Basic lifecycle and error events are documented and test-covered.

## 2) Included experiences (MVP)

- [ ] Dashboard embedding is functional.
- [ ] Visual embedding is functional.
- [ ] Console embedding is functional for authoring scenarios.

## 3) Minimum developer actions

- [ ] Load and render each included experience.
- [ ] Receive lifecycle events (for example frame/content events).
- [ ] Set/get parameters where supported.
- [ ] Execute basic navigation/state actions for supported experiences.

## 4) Release-quality packaging

- [ ] Browser bundle is produced (`dist/quicksight-embedding-js-sdk.min.js`).
- [ ] npm package output is produced (`dist/index.cjs.js`, `dist/index.esm.js`).
- [ ] TypeScript declarations are produced (`dist/index.d.ts`).
- [ ] Changelog contains a versioned MVP scope entry.

## 5) Essential documentation

- [ ] Installation instructions are present in `README.md`.
- [ ] Embed URL generation guidance is present in `README.md`.
- [ ] One working example exists for each included experience:
  - [ ] Dashboard: `README.md#dashboard-embedding`
  - [ ] Visual: `README.md#visual-embedding`
  - [ ] Console: `README.md#console-embedding`
- [ ] Permissions and authorization prerequisites are documented.
- [ ] Known limitations and unsupported scenarios are documented.

## 6) Baseline quality gates

- [ ] `npm run lint` passes.
- [ ] `npm run build:prod` passes.
- [ ] `npm run test` passes.
- [ ] `npm run test:mvp` passes.

## 7) Deferred from MVP (future releases)

The following remain out of MVP scope and can be expanded in later releases:

- Q Search Bar embedding
- Generative Q&A embedding
- Quick Chat embedding
- Advanced customization options beyond core workflows
- Authoring enhancements beyond basic console embedding
