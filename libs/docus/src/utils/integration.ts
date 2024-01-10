import type { AstroIntegration } from 'astro';
import svelte from '@astrojs/svelte';

export function docus(): AstroIntegration[] {
	return [svelte({})];
}
