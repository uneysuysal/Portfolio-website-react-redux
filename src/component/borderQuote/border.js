import React from 'react'
import './border.css'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
export default function Border() {
    const { t } = useTranslation();
    return (<div className="dark:bg-black">
<blockquote class="otro-blockquote">
{t('border.text')}
  <span>Steve Jobs</span>
</blockquote></div>
    )
}
