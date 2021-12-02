import React from 'react'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import Footer from 'components/Menu/Footer'
import { PageMeta } from 'components/Layout/Page'
import { MENU_HEIGHT } from 'components/@pancakeswap/pancake-uikit/src/widgets/Menu/config'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px;
  padding-bottom: 0;
  // min-height: calc(100vh - 64px);
  min-height: calc(100vh - 0px);
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  background-image: url("/images/vegas/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: calc(${MENU_HEIGHT+24}px);
  
  ${({ theme }) => theme.mediaQueries.xs} {
    padding-top: ${MENU_HEIGHT+24}px;
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 24px;
    padding-top: ${MENU_HEIGHT+24}px;
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    // padding-top: 32px;
    padding-top: ${MENU_HEIGHT+32}px;
    // min-height: calc(100vh - 64px);
    min-height: calc(100vh - 0px);
  }
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <>
      <PageMeta />
      <StyledPage {...props}>
        {children}
        <Flex flexGrow={1} />
        {/* <Footer /> */}
      </StyledPage>
    </>
  )
}

export default Page
