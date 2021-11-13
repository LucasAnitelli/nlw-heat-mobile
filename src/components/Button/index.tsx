import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ColorValue,
  ActivityIndicator
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  color: ColorValue,
  backgroundColor: ColorValue,
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { title, backgroundColor, color, icon, isLoading = false } = props
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, { backgroundColor }]}
      disabled={isLoading}
      {...props}
    >
      {isLoading
        ? <ActivityIndicator color={color} />
        :
        <>
          <AntDesign name={icon} size={24} style={styles.icon} />
          <Text style={[
            styles.title,
            {
              color
            }
          ]}>
            {title}
          </Text>
        </>
      }
    </TouchableOpacity>
  );
}

export default Button;