// import Image from 'next/image'
// import styles from "./page.module.css"
import { Inter } from "next/font/google"
import Link from "next/link"

const inter = Inter({ subsets:['latin']})

export default function Home() {
  return (
    <>
      {/* <h1 className={styles.title}>Home Page</h1> */}
      <h1 className={inter.className}>Home Page</h1>
      <Link href="/users">Users</Link>
    </>
  )
}
