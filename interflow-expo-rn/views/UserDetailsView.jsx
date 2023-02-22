import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import UserDetailsHeader from '../components/social/user/UserDetailsHeader'
import UserCollectionCard from '../components/social/user/UserCollectionCard'

export default function UserDetailsView({navigation}) {

  const handleNav = () => {
    navigation.navigate("UserCollection");
  };

  return (
    <View style={styles.container}>
      <UserDetailsHeader
        backgroundImageSource={"https://res.cloudinary.com/ddbgaessi/image/upload/v1676908822/doodles_jheqf6.png"}
        userName="Florence"
        userAddress="0xf52d4"
        onPressButton={() => console.log('Button pressed')}
        buttonText="Follow"
        avatarImageSource={"https://res.cloudinary.com/ddbgaessi/image/upload/v1676665910/flovatarLogo_x0lwdb.png"}
        bottomRightText1="Followers:"
        bottomRightText2="10"
      />

      <UserCollectionCard onPress={handleNav} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})