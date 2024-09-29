import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="cars" className="flex justify-center mt-4 text-2xl"><Button variant="destructive">Cars</Button></Link>
    </div>
  );
}
