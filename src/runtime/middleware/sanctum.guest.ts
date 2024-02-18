import {
    defineNuxtRouteMiddleware,
    navigateTo,
    useRuntimeConfig,
    createError,
} from '#app';
import type { SanctumModuleOptions } from '../../types';
import type { RouteLocationRaw } from 'vue-router';
import { useSanctumUser } from '../composables/useSanctumUser';

export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSanctumUser();
    const options = useRuntimeConfig().public.sanctum as SanctumModuleOptions;

    const isAuthenticated = user.value !== null;

    if (isAuthenticated === false) {
        return;
    }

    const endpoint = options.redirect.onGuestOnly;

    if (endpoint === false) {
        throw createError({ statusCode: 403 });
    }

    if (options.redirect.keepRequestedRoute) {
        if (from.path === options.redirect.onAuthOnly) {
            const actualPath = from.query.redirect as RouteLocationRaw;
            return navigateTo(actualPath, { replace: true });
        }
    }

    return navigateTo(endpoint, { replace: true });
});
