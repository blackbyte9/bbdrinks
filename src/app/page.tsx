
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const requestHeaders = await headers();

  const session = await auth.api.getSession({
    headers: requestHeaders,
  });
  if (!session) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold underline">Willkommen bei BBDrinks</h1>
      <Link href="/shoppinglist">Einkaufsliste</Link>
      <Link href="/inventory/2">Inventur</Link>
    </div>
  );
}
