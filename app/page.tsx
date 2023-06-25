import Image from 'next/image';
import CustomButton from '@/components/ui/button/CustomButton';
import { page } from './page.constants';
import PageHeader from '@/components/ui/header/PageHeader';

export default function Home() {
  return (
    <main className="grid min-h-screen text-white grid-rows-2">
      <div className="self-end flex justify-center">
        <PageHeader title={page.title}></PageHeader>
      </div>
      <div className="flex flex-col items-center gap-4 self-end p-20">
        <span className="w-72">
          <CustomButton text={page.primaryButtonText} />
        </span>
        <span className="w-72">
          <CustomButton variant="secondary" text={page.secondaryButtonText} />
        </span>
      </div>
    </main>
  );
}
