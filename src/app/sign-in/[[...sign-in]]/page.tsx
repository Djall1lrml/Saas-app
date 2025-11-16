import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/80",
            footerActionLink: "text-primary hover:text-primary/80",
          },
        }}
      />
    </main>
  );
}
