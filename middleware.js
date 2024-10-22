import { createSession, updateSession, resetSession } from "@/lib/helper";

const sessionKeyName = "samoja-session";

export async function middleware(request) {
  // console.log("executed dari middleware:", request.nextUrl.pathname);
  // await resetSession();

  let session = request.cookies.get(sessionKeyName)?.value;
  if (!session) {
    session = await createSession(request);
  } else {
    session = await updateSession(request);
  }
  return session;
}

export const config = {
  matcher: [
    "/",
    "/produk/:path*",
    "/keranjang/:path*",
    "/cara-pemesanan",
    "/lacak-order",
    "/kontak",
    "/blog",
    "/blog/:path*",
    "/artikel",
    "/konfirmasi-order",
  ],
};
