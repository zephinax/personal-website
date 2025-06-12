import type { MetadataJson } from "libphonenumber-js/core";
import { formatIncompletePhoneNumber as _formatIncompletePhoneNumber } from "libphonenumber-js/core";

import metadataJson from "@/assets/libphonenumber.metadata.json";

const metadata = metadataJson as MetadataJson;

export function formatIncompletePhoneNumber(phone: string) {
  return _formatIncompletePhoneNumber(phone, metadata);
}
