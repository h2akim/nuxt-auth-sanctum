---
description: Minimum required version of Nuxt - ^3.9.0.
---

# Installation

### Install package

Add `nuxt-auth-sanctum` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-auth-sanctum

# Using yarn
yarn add --dev nuxt-auth-sanctum

# Using npm
npm install --save-dev nuxt-auth-sanctum
```

### Register module

Add `nuxt-auth-sanctum` to the `modules` section of `nuxt.config.ts`

```typescript
export default defineNuxtConfig({
    modules: ['nuxt-auth-sanctum'],

    // nuxt-auth-sanctum options (also configurable via environment variables)
    sanctum: {
        baseUrl: 'http://localhost:80', // Laravel API
    },
});
```

That's it! You can now use Nuxt Auth Sanctum in your Nuxt app ✨
