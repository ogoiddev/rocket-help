import { VStack, Heading, Icon, useTheme } from 'native-base';
import { Envelope, Key } from 'phosphor-react-native';
import { useState } from 'react';

import Logo from '../assets/logo_primary.svg';
import { Button } from '../components/Button';
import { Input } from '../components/input';

export function SignIn() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems='center' bg='gray.600' px={8} pt={24}>
      <Logo />

      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Sign In

      </Heading>

      <Input
        onChangeText={setName}
        placeholder="E-mail"
        mb={4}
        InputLeftElement={
          <Icon as={ Envelope } color={colors.gray[300]} ml={4}/>
        }
      />
      
      <Input
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        mb={8}
        InputLeftElement={
          <Icon as={ Key } color={colors.gray[300]} ml={4}/>
        }
      />

      <Button title="Enter" w="full" />

    </VStack>
  )
}