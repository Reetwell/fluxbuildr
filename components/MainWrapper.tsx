'use client';

import { usePathname } from 'next/navigation';

export default function MainWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDemo = pathname.startsWith('/demos');

  return (
    <main className={isDemo ? '' : 'pt-16 pb-24 md:pb-0'}>
      {children}
    </main>
  );
}
