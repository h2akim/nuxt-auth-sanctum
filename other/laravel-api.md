# Laravel API

### How-to

The current module expects your Laravel API to be already configured to work with Sanctum-based authentication, [here you can check official documentation](https://laravel.com/docs/10.x/sanctum#spa-authentication) and find all necessary configurations.

**We do not support token-based authentication!** You have to configure a cookie-based stateful authentication method.

### Checklist

Here is a quick checklist for your Laravel backend:

* [ ] Laravel has Sanctum installed (usually via [Breeze Kit](https://laravel.com/docs/10.x/sanctum#installation)) and [middleware](https://laravel.com/docs/10.x/sanctum#sanctum-middleware) is registered
* [ ] Nuxt and Laravel apps share the same top-level domain (e.g. `example.net`)
* [ ] Nuxt domain is registered in `SANCTUM_STATEFUL_DOMAINS`
* [ ] Laravel has a proper domain in `SESSION_DOMAIN`, for example: `.example.net` (not applicable for `localhost`)

If you notice incorrect behavior of the module or authentication flow, feel free to [raise an issue](https://github.com/manchenkoff/nuxt-auth-sanctum/issues/new/choose)!
