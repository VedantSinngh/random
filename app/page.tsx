import HomeClient from '@/components/HomeClient';

export default async function Home() {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 2300));

  return <HomeClient />;
}
