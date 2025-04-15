import {
  BarChart2,
  CalendarDays,
  CircleDollarSign,
  Clock,
  DollarSign,
  FileText,
  Home,
  LogOut,
  PlusCircle,
  Settings,
  Trophy,
  UserCog,
  Users,
  Wallet,
} from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { useTranslation } from 'react-i18next';

export function AppSidebar() {
  const { t } = useTranslation();

  const items = [
    {
      title: t('home'),
      url: '#',
      icon: Home,
    },
    {
      title: t('players'),
      url: '#',
      icon: Users,
    },
    {
      title: t('dealers'),
      url: '#',
      icon: UserCog,
    },
    {
      title: t('sessions'),
      url: '#',
      icon: CalendarDays,
    },
    {
      title: t('newSession'),
      url: '#',
      icon: PlusCircle,
    },
    {
      title: t('settings'),
      url: '#',
      icon: Settings,
    },
    {
      title: t('history'),
      url: '#',
      icon: Clock,
    },
    {
      title: t('statistics'),
      url: '#',
      icon: BarChart2,
    },
    {
      title: t('buyIns'),
      url: '#',
      icon: DollarSign,
    },
    {
      title: t('payouts'),
      url: '#',
      icon: Wallet,
    },
    {
      title: t('notes'),
      url: '#',
      icon: FileText,
    },
    {
      title: t('leaderboard'),
      url: '#',
      icon: Trophy,
    },
    {
      title: t('chips'),
      url: '#',
      icon: CircleDollarSign,
    },
  ];

  const logoutItem = {
    title: t('logout'),
    url: '/login',
    icon: LogOut,
  };

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-between  w-full">
          <span className="inline-flex items-center text-sm">{t('menu')}</span>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem key={logoutItem.title}>
            <SidebarMenuButton asChild>
              <a href={logoutItem.url}>
                <logoutItem.icon color="var(--destructive)" />
                <span className="text-[var(--destructive)]">
                  {logoutItem.title}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
