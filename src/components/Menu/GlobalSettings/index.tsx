import React from 'react'
import { Flex, IconButton, CogIcon, useModal } from 'components/@pancakeswap/pancake-uikit/src'
import SettingsModal from './SettingsModal'

const GlobalSettings = () => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <IconButton onClick={onPresentSettingsModal} variant="text" scale="sm" mr="8px" id="open-settings-dialog-button">
        <CogIcon height={24} width={24} color="textSubtle" />
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings
