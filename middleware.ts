/*
<ai_context>
Contains middleware for protecting routes, checking user authentication, and redirecting as needed.
</ai_context>
*/

import { clerkMiddleware } from "@clerk/nextjs/server"

export default clerkMiddleware()

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}
