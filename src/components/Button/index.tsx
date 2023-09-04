import {TouchableOpacityProps} from 'react-native'

import { Container, Title, ButtonTypeStyledProps } from './styled';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyledProps;
}

const Button = ({
  title,
  type = 'PRIMARY',
  ...rest
}: Props) => {
  return (
    <Container
      type={type}
      {...rest}
    >
      <Title>
        {title}
      </Title>
    </Container>
   );
}

export default Button;
