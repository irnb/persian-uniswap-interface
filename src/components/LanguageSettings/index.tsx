import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components/macro'
import { TYPE } from '../../theme'
import { AutoColumn } from '../Column'
import { AutoRow, RowFixed } from '../Row'

import { useTranslation } from 'react-i18next'

const FancyButton = styled.button`
  color: ${({ theme }) => theme.text1};
  align-items: center;
  height: 2rem;
  border-radius: 36px;
  font-size: 12px;
  width: auto;
  min-width: 3rem;
  border: 1px solid ${({ theme }) => theme.bg3};
  outline: none;
  background: ${({ theme }) => theme.bg1};
  :hover {
    border: 1px solid ${({ theme }) => theme.bg4};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
  }
`

const Option = styled(FancyButton)<{ active: boolean }>`
  margin-right: 8px;
  :hover {
    cursor: pointer;
  }
  background-color: ${({ active, theme }) => active && theme.primary1};
  color: ${({ active, theme }) => (active ? theme.white : theme.text1)};
`

export default function SlippageTabs() {
  const { t } = useTranslation()
  const theme = useContext(ThemeContext)
  // const [language, setLanguage] = useState()
  const changeLanguage = (code: string) => {
    console.log('injaaaaaaaaa')
    localStorage.setItem('language', code)
    window.location.reload()
  }
  console.log("localStorage.getItem('language')=", localStorage.getItem('language'))
  return (
    <AutoColumn gap="md">
      <AutoColumn gap="sm">
        <RowFixed>
          <TYPE.black fontWeight={400} fontSize={14} color={theme.text2}>
            {t('setting.language')}
          </TYPE.black>
        </RowFixed>
        <AutoRow justify="end">
          <Option
            onClick={() => {
              changeLanguage('fa')
            }}
            active={localStorage.getItem('language') === 'fa'}
          >
            {t('setting.persian')}
          </Option>
          <Option
            onClick={() => {
              changeLanguage('en')
            }}
            active={localStorage.getItem('language') === 'en'}
          >
            {t('setting.english')}
          </Option>
        </AutoRow>
      </AutoColumn>
    </AutoColumn>
  )
}
