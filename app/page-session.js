import { redirect } from "next/navigation";
import { getSession, login, logout } from "@/lib/helper";

export default async function Home() {
  const session = await getSession();
  return (
    <section>
      <form
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/");
        }}
      >
        <input type="email" placeholder="Email" />
        <br />
        <button className="py-2 px-3 bg-neutral-400" type="submit">
          Login
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button className="py-2 px-3 bg-neutral-400" type="submit">
          Logout
        </button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
}
