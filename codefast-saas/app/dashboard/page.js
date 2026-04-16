import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Private Dashboard</h1>
      <div>
        Welcome to your private dashboard. Here you can manage your feedback
        forms and view customer responses.
      </div>
    </main>
  );
}
