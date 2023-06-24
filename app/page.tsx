import Image from 'next/image';
import CustomButton from '@/components/ui/button/CustomButton';
import { page } from './page.constants';
import PageHeader from '@/components/ui/header/PageHeader';

export default function Home() {
  return (
    <main className="grid place-content-center min-h-screen text-white">
      <PageHeader title={page.title}></PageHeader>
      <CustomButton text={page.primaryButtonText} />
      <CustomButton text={page.secondaryButtonText} />
    </main>
  );
}
