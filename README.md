---
description: >-
  This module provides a simple way to use Laravel Sanctum with Nuxt by
  leveraging cookies-based authentication. SSR-ready!
---

# Introduction

### Features

* `useSanctumAuth` composable for easy access to the current user and authentication methods
* Automated `CSRF` token header and cookie management
* Both `CSR` and `SSR` modes support
* Pre-configured middleware for pages that require authentication
* Cast current user information to any class you want
* Compatible with default Nuxt `ofetch` client
* TypeScript support

**Note:** Before using this module, please make sure that you have already configured Laravel Sanctum on your backend. You can find more information about Laravel Sanctum [here](https://laravel.com/docs/10.x/sanctum#spa-authentication).
