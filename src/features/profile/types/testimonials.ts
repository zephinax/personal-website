export type Testimonial = {
  /** Unique identifier or username (e.g., @username or social media handle) */
  handle: string;
  /** URL to the person's profile picture or avatar image */
  avatar: string;
  /** Full display name of the person giving the testimonial */
  displayName: string;
  /** Short biography or professional title of the person */
  bio: string;
  /** Link to the person's profile, website, or social media page */
  url: string;
  /** The testimonial text content or recommendation message */
  content: string;
};
