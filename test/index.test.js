import process from "node:process";
import isTermux from "../dist/index.js";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

(async () => {
	await test('Must Return \"true\" If You In Termux', () => {
		// Manipulating
		process.env["TERMUX_MAIN_PACKAGE_FORMAT"] = "debian";
		// Asserting
		assert.strictEqual(isTermux(), true);
	});
	await test('Must Return \"false\" If You NOT In Termux', () => {
		// Manipulating
		const newEnv = {};
		const envKeys = Object.keys(process.env).filter((env) => !/^TERMUX/.test(env));
		envKeys.forEach((env) => {
			newEnv[env] = process.env[env];
		});
		process.env = newEnv;
		// Asserting
		assert.strictEqual(isTermux(), false);
	});
})();
