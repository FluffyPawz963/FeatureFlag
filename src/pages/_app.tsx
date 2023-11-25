import { AppProps } from 'next/app'
import '../styles/bootstrap.min.css'
import '../app/page.module.css'
import '../app/custom.css'
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}