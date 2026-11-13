import { OpenPanel } from "@openpanel/web"

const isProduction = process.env.NODE_ENV === "production"
const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

export const op = new OpenPanel({
  clientId: clientId || "disabled",
  trackScreenViews: isProduction && !!clientId,
  disabled: !isProduction || !clientId,
})
