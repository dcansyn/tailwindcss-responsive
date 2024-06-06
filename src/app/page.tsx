import { Button } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button
        className="bg-blue-300 text-white hover:shadow-xl"
        xs="bg-white text-black"
        sm="bg-black text-white"
        md="w-2/4"
        lg="w-3/4"
        xl="h-20"
        xxl="h-10 w-2/5"
      >
        Buralar eskiden dutluktu!
      </Button>
    </main>
  );
}
