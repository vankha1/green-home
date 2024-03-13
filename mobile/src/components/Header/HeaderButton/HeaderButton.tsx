import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'


interface HeaderButtonProps {
    iconUrl: any,
    dimension: string,
    handlePress: () => void
}

const HeaderButton = ({ iconUrl, dimension, handlePress } : HeaderButtonProps) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        src={iconUrl}
        resizeMode='cover'
        style={styles.btnImg}
      />
    </TouchableOpacity>
  )
}

export default HeaderButton