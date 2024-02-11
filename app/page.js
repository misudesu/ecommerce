import Image from "next/image";
import ViewProduct from "./pages/product/page";
import RootLayout from "./pages/layout";

export default function Home() {

  return (
    <RootLayout>
  <ViewProduct/>
  </RootLayout>
  );
}
