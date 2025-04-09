import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';

export function LoginCard() {
  const { t } = useTranslation();

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{t('accessYourAccount')}</CardTitle>
        <CardDescription>{t('accessYourAccountDesc')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Login</Label>
              <Input id="name" placeholder="Email, Telefone" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">{t('password')}</Label>
              <Input id="password" placeholder="Senha" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
