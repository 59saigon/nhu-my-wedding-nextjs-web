
import Head from "next/head";
import AboutPage from "./about";
import type { Metadata } from "next";
import { Const } from "@/lib/const";

export const metadata: Metadata = {
  title: 'Makeup Chuyên Sâu & Áo Dài Cưới Tại NhuMy Studio',
  description: 'NhuMy Studio chuyên dịch vụ makeup chuyên sâu, áo dài cưới, vest, và trang phục sự kiện. Mang đến sự tinh tế, chuyên nghiệp và phong cách cá nhân hóa.',
  keywords: 'makeup chuyên sâu, áo dài cưới, dịch vụ vest cưới, trang phục sự kiện, studio chuyên nghiệp',
  robots: 'index, follow',
};

export default function Page() {
  return <>
  <Head>
    <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}/about`} />
  </Head>
  <AboutPage />
</>
}
