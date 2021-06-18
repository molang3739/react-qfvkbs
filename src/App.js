import React from 'react';
import './style.css';
import i18n from 'i18next';
import { Trans } from 'react-i18next';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
const resources = {
  en: {
    translation: {
      'Welcome to React': 'Welcome to React and react-i18next'
    }
  },
  fr: {
    translation: {
      'Welcome to React': 'Bienvenue à React et react-i18next'
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

import { useTranslation } from 'react-i18next';
let trans = '0000';
function MyComponent() {
  const { t, i18n } = useTranslation();
  // console.log('trans2',t('Welcome to React'))
  // trans = t('Welcome to React');
  debugger;

  return <h1>{t('Welcome to React')}</h1>;
}
function updatetrans(arg) {
  // console.log(arg, 'arg');
  // trans = arg;
}
// console.log(trans);

// export function new1() {
//   return (
//     <>
//       <MyComponent updatetrans={this.updatetrans.bind(this)} />
//     </>
//   );
// }
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!123</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <Res/> */}
    </div>
  );
}
