import process from "node:process";

/**
 * Check if you run in Termux environment
 *
 * ```js
 * import isTermux from 'is-termux'
 *
 * isTermux() // => "true" if you in Termux
 * ```
 *
 * @returns boolean
 */
function isTermux(): boolean {
	return (
		process.platform === "android" &&
		Object.keys(process.env).some((env) => /^TERMUX/.test(env)) &&
		process.env.PREFIX === "/data/data/com.termux/files/usr"
	);
}

export default isTermux;
