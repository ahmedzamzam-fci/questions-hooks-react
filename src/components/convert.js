import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ lang, text }) => {
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: text,
            target: lang.value,
            key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };

    if (lang && text) {
      search();
    }
  }, [lang, text]);

  return <h1>{translatedText}</h1>;
};

export default Convert;
