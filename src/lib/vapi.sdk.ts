import Vapi from "@vapi-ai/web";
import { env } from "@/env";

export const vapi = new Vapi(env.NEXT_PUBLIC_VAPI_WEB_TOKEN);
