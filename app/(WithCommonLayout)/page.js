import RecentPosts from "@/components/modules/RecentPosts";

export default async function Home() {
  return (
    <div className="h-[calc(100vh-30px)] bg-[url('/assets/glass.jpg')]">
      <RecentPosts />
    </div>
  );
}
