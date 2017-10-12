import React, { Component } from 'react'
import { LocaleProvider } from 'antd-mobile'
import enUS from 'antd-mobile/lib/locale-provider/en_US'

export default class Layout extends Component<any, any> {
  render() {
    const { language, children } = this.props
    const locale: any = language.substr(0, 2) === 'en' ? enUS : undefined

    return (
      <LocaleProvider locale={locale}>
        {children}
      </LocaleProvider>
    )
  }
}
