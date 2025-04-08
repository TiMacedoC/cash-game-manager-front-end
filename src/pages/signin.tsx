import { LoginCard } from '@/components/ui/login-card';

export function SignIn() {
  return (
    <main className="h-screen flex w-full">
      <div className="bg-primary-foreground w-full h-full flex p-16"> </div>
      <section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
        <LoginCard />
      </section>
    </main>
  );
}
