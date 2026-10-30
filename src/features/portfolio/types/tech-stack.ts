/**
 * A technology item displayed in the Tech Stack section.
 *
 * Icon resolution:
 * - Direct: `icon` React node / SVG
 * - Default: /public/images/tech-stack-icons/[key].svg
 * - Themed (when `theme === true`):
 *   - Dark:  /public/images/tech-stack-icons/[key]-dark.svg
 *   - Light: /public/images/tech-stack-icons/[key]-light.svg
 */
export type TechStack = {
  /** Unique identifier used to resolve icon files. */
  key: string
  /** Display name of the technology. */
  title: string
  /** Official website URL. */
  href: string
  /** Category tags used for grouping/filtering. */
  categories: string[]
  /** If true, use theme-specific icons for dark/light mode. */
  theme?: boolean
  /** Optional inline JSX icon node */
  icon?: React.ReactNode
}
