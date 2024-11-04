import Image from "next/image";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ComponentUseAuth from "../componentUseAuth";
import ComponentUseUser from "../componentUseUser";

export default async function Dashboard() {
  const { userId } = await auth.protect();
  const user = await currentUser();
  console.log(user);

  if (!userId || !user) {
    redirect("/sign-in");
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      <div className="flex items-center justify-between gap-8 bg-gray-100 dark:bg-gray-900 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5">
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl as string}
            alt={user.username as string}
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <div className="w-full">
          <h2 className="text-gray-600 dark:text-gray-200 text-lg">
            Pseudo :{" "}
            <span className="text-sky-500">
              {user.username as string}
            </span>
          </h2>

          <div className="flex flex-col gap-1 mt-4">
            <p className="text-lg">
              Prénom :{" "}
              <span className="text-sky-500">
                {user.firstName as string}
              </span>
            </p>
            <p className="text-lg">
              Nom :{" "}
              <span className="text-sky-500">
                {user.lastName as string}
              </span>
            </p>
            <p className="text-lg">
              Email :{" "}
              <span className="text-sky-500">
                {user.emailAddresses[0].emailAddress as string}
            </span>
          </p>
          <p className="text-lg">
            Date de création :{" "}
            <span className="text-sky-500">
              {new Date(user.createdAt).toLocaleDateString() as string}
            </span>
          </p>
          <p className="text-lg">
            Date de dernière connexion :{" "}
            <span className="text-sky-500">
              {new Date(user.lastSignInAt as unknown as string).toLocaleDateString() as string}
            </span>
            </p>
          </div>
        </div>
      </div>

      <ComponentUseAuth />
      <ComponentUseUser />
    </section>
  );
}
