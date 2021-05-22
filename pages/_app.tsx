/*
 * @文档描述:
 * @author: 伟烽
 * @Date: 2021-05-21 15:02:13
 * @LastEditTime: 2021-05-22 19:28:15
 * @LastEditors: 伟烽
 */
import '../styles/global.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
