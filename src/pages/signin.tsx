import { LoginForm } from '@/components/login-form';

export function SignInPage() {
  return (
    <div className="flex sm:min-h-[85svh] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
