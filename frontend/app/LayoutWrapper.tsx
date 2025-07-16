"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/app/Components/navbar/navbar";
import Footer from "@/app/Components/footer/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Jika di halaman checkout, sembunyikan Navbar & Footer
  const hideLayout = pathname.startsWith("/page/checkout");

  return (
    <>
      {!hideLayout && (
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
      )}
      <main className={hideLayout ? "" : ""}>{children}</main>
      <div className="mt-30">
        {!hideLayout && <Footer />}
      </div>
    </>
  );
}
