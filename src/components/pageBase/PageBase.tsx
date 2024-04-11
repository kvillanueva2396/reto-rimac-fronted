import { StoreProvider } from '@/store/storeProvider';
import { Header } from '../header';

interface Props {
  children: React.ReactNode;
}

export default function PageBase({ children }: Props) {
  return (
    <StoreProvider>
      <div className="page-base relative">
        <Header />
        {children}
      </div>
    </StoreProvider>
  );
}
