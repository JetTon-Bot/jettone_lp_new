/* eslint-disable */

import styles from './RequestSection.module.css'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import React from 'react'
import Form from '@/components/sharable/form/Form'
import telegram from '../../../assets/icons/telegram.svg'
import mail from '../../../assets/icons/mail.svg'
import agreement from '../../../assets/icons/agreement.svg'
import Link from 'next/link'

const RequestSection = () => {
    const { t } = useTranslation()

    return (
        <section className={styles.request__section} id="advantages">
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.footer}>
                        <div className={styles.text__content}>
                            <p className={styles.glavniy}>
                                {t('request.title')}
                            </p>
                            {/* <p className={styles.about}>{t('request2')}</p>
                            <p className={styles.about_bottom}>
                                {t('request3')}
                            </p> */}
                            <h3 className={styles.name}>{t('footer.title')}</h3>
                            <ul className={styles.list}>
                                <li>
                                    <a
                                        className={styles.item}
                                        target="_blank"
                                        href="https://t.me/JetTonPartners"
                                    >
                                        <Image src={telegram} alt="telegram" />
                                        <span className={styles.contacts}>
                                            @support
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={styles.item}
                                        target="_blank"
                                        href="mailto:support@jetton.partners"
                                    >
                                        <Image src={mail} alt="mail" />
                                        <span className={styles.contacts}>
                                            support@jetton.partners
                                        </span>
                                    </a>
                                </li>
                                <li>

                                    <a
                                        className={styles.item}
                                         href="/agreement"
                                    >
                                         <Image src={agreement} alt="agreement" />
                                        <span className={styles.contacts}>
                                            Affiliate Program Agreement
                                        </span>
                                     </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.form__block}>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RequestSection
