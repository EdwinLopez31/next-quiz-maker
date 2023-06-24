import Image from 'next/image';

export default function Home() {
  return (
    <main className="grid place-content-center min-h-screen text-white">
      <h1 className="text-6xl transition-[text-shadow] duration-150 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)] hover:[text-shadow:_0_6px_0_rgb(0_0_0_/_40%)]">
        My NextJS Boilerplate
      </h1>
    </main>
  );
}
