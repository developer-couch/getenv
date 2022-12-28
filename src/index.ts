/**
 * Gets and environment variable and if not present, returns a default value or throws an error
 * @param key The name of the environment variable to seach for
 * @param defaultValue The default value to return if the environment variable is not present
 * @returns The environment variable default value if not present
 */
export function getenv (name: string, defaultValue?: string): string {
  const value = process.env[name]

  if (value === undefined) {
    if (defaultValue === undefined) {
      throw new Error(`getenv: ${name} not found in environment and no default value was passed`)
    }
    return defaultValue
  }

  return value
}
