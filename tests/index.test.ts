import { fn } from '@/index';
import { expect, test } from 'vite-plus/test';

test('fn', () => {
	expect(fn()).toBe('Hello, tsdown!');
});
