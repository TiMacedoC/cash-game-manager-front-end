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
import { useTranslation } from 'react-i18next';

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { t } = useTranslation();

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="">
        <CardHeader>
          <CardTitle className="text-2xl">{t('loginTitle')}</CardTitle>
          <CardDescription>{t('accessYourAccountDesc')}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input
                  id="email"
                  type="email"
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
                <Input id="password" type="password" required />
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
