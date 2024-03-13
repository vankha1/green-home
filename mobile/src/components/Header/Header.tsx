import { Image, Text, View } from 'react-native'
import styles from './styles'
import Button from '../Button/Button'
import { icons } from '../../constants'

const Header = ({ navigation} : any) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text
                style={[
                    styles.title,
                ]}
            >
                    Welcome
            </Text>
        </View>
        <Button isLogin={false}>
            <Image
              src={icons.plusIcon}
              style={styles.icon}
            />
        </Button>
    </View>
  )
}
export default Header