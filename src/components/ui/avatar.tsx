import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
}
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  const possibleColors = [
    { light: `bg-red-400`, dark: `dark:bg-red-800` },
    { light: `bg-blue-400`, dark: `dark:bg-blue-800` },
    { light: `bg-green-400`, dark: `dark:bg-green-800` },
    { light: `bg-yellow-400`, dark: `dark:bg-yellow-800` },
    { light: `bg-purple-400`, dark: `dark:bg-purple-800` },
    { light: `bg-pink-400`, dark: `dark:bg-pink-800` },
    { light: `bg-orange-400`, dark: `dark:bg-orange-800` },
    { light: `bg-teal-400`, dark: `dark:bg-teal-800` },
    { light: `bg-indigo-400`, dark: `dark:bg-indigo-800` },
    { light: `bg-rose-400`, dark: `dark:bg-rose-800` },
    { light: `bg-emerald-400`, dark: `dark:bg-emerald-800` },
  ];

  const randomBg =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];

  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full',
        randomBg.dark,
        randomBg.light,
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarFallback, AvatarImage };
