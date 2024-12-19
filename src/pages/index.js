import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function home() {
  return (
    <div className={styles.page}>
        <h1>Home</h1>
        <Image 
            src="https://media.istockphoto.com/id/177428869/photo/men-without-eyes.jpg?s=2048x2048&w=is&k=20&c=aI-w0YJ3fzcxBraO1LdNjnUIrXjo8emjmpoR_YQIFUo=" 
            alt="alt" 
            width={500} 
            height={500} />
    </div>
  )
}

export default home
