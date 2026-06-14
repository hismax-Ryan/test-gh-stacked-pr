# test-gh-stacked-pr

Small **React + TypeScript** demo repo for trying [stack-pr](https://github.com/modular/stack-pr) stacked pull requests.

## Setup

```bash
npm install
npm run dev
```

## Try stack-pr

You should be on branch `demo-stack` with three commits on top of `main`.

```bash
# Safe preview — no push
stack-pr view

# Create/update the PR stack (draft by default via .stack-pr.cfg)
stack-pr submit

# Merge bottom PR and rebase the rest
stack-pr land
```

## Stack layout

| Order | Commit theme              | PR contains                    |
|-------|---------------------------|--------------------------------|
| 1     | Add greeting utility      | `src/utils/greeting.ts`        |
| 2     | Add GreetingCard component| `src/components/GreetingCard.tsx` |
| 3     | Wire UI in App            | `src/App.tsx`                  |

Each PR builds on the previous one so reviewers see one logical change at a time.
