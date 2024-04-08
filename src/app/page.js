"use client"
import { useAppSelector } from "@/lib/hooks";
import Homepage from "./components/Homepage";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const isAuthenticated = useAppSelector((state) => state?.auth.authenticated ? state.auth.authenticated : false);
 
  if (!isAuthenticated) {
    router.push('/sign-in')
  }
  return (
    <div>
     <Homepage/>
    </div>
  );
}
