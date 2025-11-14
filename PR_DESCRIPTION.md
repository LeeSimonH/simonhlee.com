# Remove unused dependencies and files

## Summary

This PR removes unused dependencies, exports, and files from the codebase to reduce bundle size and improve maintainability.

## Changes

### Dependencies Removed (5)
- `antd` - Not imported anywhere
- `react-social-media-embed` - Not imported anywhere  
- `@hookform/resolvers` - Not imported (form components were unused)
- `@radix-ui/react-dialog` - Not imported anywhere
- `react-hook-form` - Not imported anywhere (only used in deleted form.tsx)

### Exports Removed from `app/data.ts` (3)
- `PROJECTS` - Exported but never imported
- `EMAIL` - Exported but never imported (hardcoded where needed)
- `BASE_URL` - Exported but never imported (hardcoded in sitemap.ts)

### Files Deleted (6)
- `hooks/useClickOutside.tsx` - Hook never imported
- `components/ui/form.tsx` - Form components never imported
- `components/ui/button.tsx` - Button component never imported
- `components/ui/card.tsx` - Card components never imported
- `components/ui/input.tsx` - Input component never imported
- `components/ui/textarea.tsx` - Textarea component never imported

## Verification

All removed items were verified through comprehensive codebase search to have:
- No imports or references
- No usage in any files
- No transitive dependencies that would break

## Impact

- **Bundle size**: Reduced by removing unused dependencies
- **Maintainability**: Cleaner codebase with only actively used code
- **Dependencies**: 5 fewer runtime dependencies

## Testing

- [x] Type checking passes (`pnpm typecheck`)
- [x] Linting passes (`pnpm lint`)
- [x] No breaking changes (all removed items were unused)
- [ ] Run `pnpm install` to update lockfile after merge

## Next Steps

After merging, run `pnpm install` to update `node_modules` and ensure the lockfile reflects the removed dependencies.

