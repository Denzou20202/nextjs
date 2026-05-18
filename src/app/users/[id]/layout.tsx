import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'User Layout',
};

type Props = {children: React.ReactNode};

const UserLayout = ({ children }:Props) => {
  return <>{children}</>;
}

export default UserLayout;