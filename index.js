import process from "node:process";

function isTermux() {
  return Object.keys(process.env).some(env => /^TERMUX/.test(env)) && /^\/data\/data\/com\.termux\//.test(process.execPath)
}

export default isTermux