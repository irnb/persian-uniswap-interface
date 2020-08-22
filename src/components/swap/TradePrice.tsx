import React from 'react'
import { Currency, Price } from '@uniswap/sdk'
import { useContext } from 'react'
import { Repeat } from 'react-feather'
import { Text } from 'rebass'
import { ThemeContext } from 'styled-components/macro'
import { StyledBalanceMaxMini } from './styleds'
import { useTranslation } from 'react-i18next'

interface TradePriceProps {
  price?: Price
  inputCurrency?: Currency
  outputCurrency?: Currency
  showInverted: boolean
  setShowInverted: (showInverted: boolean) => void
}

export default function TradePrice({
  price,
  inputCurrency,
  outputCurrency,
  showInverted,
  setShowInverted
}: TradePriceProps) {
  const theme = useContext(ThemeContext)
  const { t } = useTranslation()
  const formattedPrice = showInverted ? price?.toSignificant(6) : price?.invert()?.toSignificant(6)

  const show = Boolean(inputCurrency && outputCurrency)
  const label = showInverted
    ? `${outputCurrency?.symbol} ${t('per')} ${inputCurrency?.symbol}`
    : `${inputCurrency?.symbol} ${t('per')} ${outputCurrency?.symbol}`

  return (
    <Text
      fontWeight={500}
      fontSize={14}
      color={theme.text2}
      style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
    >
      {show ? (
        <>
          {formattedPrice ?? '-'} {label}
          <StyledBalanceMaxMini onClick={() => setShowInverted(!showInverted)}>
            <Repeat size={14} />
          </StyledBalanceMaxMini>
        </>
      ) : (
        '-'
      )}
    </Text>
  )
}
