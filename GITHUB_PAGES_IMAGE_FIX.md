# GitHub Pages Image Loading Issue - Resolution

## Problem
Images (profile.jpg, review1-3.png) returned 404 on GitHub Pages deployment.

**Initial errors:**
```
Failed to load resource: the server responded with a status of 404 ()
profile.jpg:1  Failed to load resource: the server responded with a status of 404 ()
review3.png:1  Failed to load resource: the server responded with a status of 404 ()
review2.png:1  Failed to load resource: the server responded with a status of 404 ()
```

**After first fix attempt:**
```
GET https://sasyktumoo.github.io/images/profile.jpg 404 (Not Found)
GET https://sasyktumoo.github.io/images/review1.png 404 (Not Found)
GET https://sasyktumoo.github.io/images/review2.png 404 (Not Found)
GET https://sasyktumoo.github.io/images/review3.png 404 (Not Found)
```

## Root Cause
GitHub Pages project sites have a basePath (e.g., `/zhyldyz`), but hardcoded image paths like `/images/profile.jpg` don't include this prefix. Browser requests `https://sasyktumoo.github.io/images/profile.jpg` instead of `https://sasyktumoo.github.io/zhyldyz/images/profile.jpg`.

## Solution Steps

### 1. Configure Next.js for Static Export with basePath
**File:** `next.config.ts`
```typescript
const nextConfig: NextConfig = {
  output: 'export',           // Enable static HTML export
  images: {
    unoptimized: true,        // Required for static hosting
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zhyldyz' : '',
};
```

### 2. Create Asset Path Helper
**File:** `lib/utils.ts`
```typescript
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/zhyldyz' : '';
  return `${basePath}${path}`;
}
```

### 3. Update Image References
**Before:**
```tsx
<img src="/images/profile.jpg" />
<img src={`/images/review${testimonial.id.split('-')[1]}.png`} />
```

**After:**
```tsx
import { getAssetPath } from '@/lib/utils';

<img src={getAssetPath('/images/profile.jpg')} />
<img src={getAssetPath(`/images/review${testimonial.id.split('-')[1]}.png`)} />
```

### 4. Verify Build Output
```bash
npm run build
grep -o 'src="[^"]*profile\.jpg' out/index.html
# Result: src="/zhyldyz/images/profile.jpg ✓

ls -la out/images/
# Result: profile.jpg, review1-3.png all present ✓
```

### 5. Deploy and Verify
- Push changes to GitHub
- Wait for GitHub Actions workflow to complete (~2-3 min)
- Hard refresh browser (Cmd+Shift+R) to clear cache
- Images load successfully

## Key Differences from Previous Issue (Icon Fonts)

**Previous issue (Deploy from Branch):**
- Problem: Files in `node_modules` ignored by `.gitignore`
- Solution: Force-add specific files with `git add -f` and subtree split push

**This issue (GitHub Actions):**
- Problem: Wrong path prefix in production build
- Solution: Configure Next.js basePath and use helper function
- No force-add needed - images were in `public/` directory, not `node_modules`

## Files Modified
1. `next.config.ts` - Added basePath configuration
2. `lib/utils.ts` - Created getAssetPath helper (NEW FILE)
3. `components/HeroSection.tsx` - Updated image src
4. `components/TestimonialsSection.tsx` - Updated image src
5. `.github/workflows/deploy.yml` - Created GitHub Actions workflow (NEW FILE)
6. `public/.nojekyll` - Prevent Jekyll processing (NEW FILE)

## Result
✓ All images load correctly on https://sasyktumoo.github.io/zhyldyz
✓ Local development works (no basePath)
✓ Production build includes correct paths
✓ No git force-add or .gitignore modifications needed

