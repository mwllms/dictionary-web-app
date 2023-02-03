import './globals.css'
import { Inter, Lora, Inconsolata } from '@next/font/google'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })
const inconsolata = Inconsolata({ subsets: ['latin'], variable: '--font-inconsolata' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  )
}
