import React from 'react';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles';
import avatarImg from '../../assets/avatar.png';
import { COLORS } from '../../theme';

const Sizes = {
  small: {
    containerSize: 32,
    avatarSize: 28
  },
  normal: {
    containerSize: 48,
    avatarSize: 42,
  }
}

interface UserPhotoProps {
  imageUri: string | undefined;
  sizes?: 'small' | 'normal';
}

const avatarDefault = Image.resolveAssetSource(avatarImg).uri;

const UserPhoto: React.FC<UserPhotoProps> = (props: UserPhotoProps) => {
  const { imageUri, sizes = 'normal' } = props
  const { avatarSize, containerSize } = Sizes[sizes];

  return (
    <LinearGradient
      colors={[COLORS.PINK, COLORS.YELLOW]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={[
        styles.container,
        {
          width: containerSize,
          height: containerSize,
          borderRadius: containerSize / 2,
        }
      ]}
    >
      <Image
        style={[
          styles.avatar,
          {
            width: avatarSize,
            height: avatarSize,
            borderRadius: avatarSize / 2,
          }
        ]}
        source={{ uri: imageUri || avatarDefault }}
      />
    </LinearGradient>
  );
}

export default UserPhoto;