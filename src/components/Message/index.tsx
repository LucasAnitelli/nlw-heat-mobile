import React from 'react';
import { View, Text } from 'react-native';
import UserPhoto from '../UserPhoto';
import { styles } from './styles';
import { MotiView } from 'moti'

export interface MessageProps {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

interface Props {
  data: MessageProps
}

const Message: React.FC<Props> = (props: Props) => {
  const { data } = props
  return (
    <MotiView
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 700 }}
      style={styles.container}
    >
      <Text style={styles.message}>
        {data.text}
      </Text>
      <View style={styles.footer}>
        <UserPhoto
          sizes='small'
          imageUri={data.user.avatar_url}
        />
        <Text style={styles.userName}>
          {data.user.name}
        </Text>
      </View>
    </MotiView>
  );
}

export default Message;