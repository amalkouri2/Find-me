import '../styles/globals.css';
import { IntlProvider } from 'react-intl';
import en from '../translations/en.json';
import ar from '../translations/ar.json';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState('en');
  const messages = locale === 'ar' ? ar : en;
  return (
    <IntlProvider locale={locale} messages={messages}>
      <div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
        <header style={{display:'flex',justifyContent:'space-between',padding:16}}>
          <h1>Find<span style={{color:'#0b5fff'}}>AI</span></h1>
          <div>
            <button onClick={()=>setLocale('en')}>English</button>
            <button onClick={()=>setLocale('ar')}>العربية</button>
          </div>
        </header>
        <Component {...pageProps} />
      </div>
    </IntlProvider>
  )
}
export default MyApp;