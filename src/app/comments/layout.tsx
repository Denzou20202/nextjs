import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Comments page',
};

type Props = {children: React.ReactNode};

const UsersLayout = ({ children }:Props) => {
  return <>{children}</>;
}

export default UsersLayout;