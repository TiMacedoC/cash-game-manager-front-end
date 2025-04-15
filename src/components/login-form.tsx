import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [email, setEmail] = useState('email@email.com');
  const [password, setPassword] = useState('65fgFF00GG%%ffsd00---');
  const [isView, setIsView] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/home');
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl">{t('loginTitle')}</CardTitle>
          <CardDescription>{t('accessYourAccountDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">{t('password')}</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    {t('forgotPassword')}
                  </a>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type={isView ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {isView ? (
                    <Eye
                      className="absolute right-3 top-1.5 z-10 cursor-pointer"
                      onClick={() => {
                        setIsView(!isView);
                      }}
                    />
                  ) : (
                    <EyeOff
                      className="absolute right-3 top-1.5 z-10 cursor-pointer"
                      onClick={() => setIsView(!isView)}
                    />
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full cursor-pointer">
                {t('loginButton')}
              </Button>
              <Button variant="outline" className="w-full cursor-pointer">
                {t('enterWithGoogle')}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              {`${t('doNotHaveAnAccount')}  `}
              <a href="#" className="underline underline-offset-4">
                {t('signUp')}
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
