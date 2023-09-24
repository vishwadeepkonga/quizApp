import {Text, Box, Image, Center, Button} from 'native-base';
import {View} from 'react-native';
const Submit = ({route, navigation}: any) => {
  const {score} = route.params;
  const handleHome = () => {
    navigation.navigate('Home');
  };
  return (
    <Box style={{height: '100%', backgroundColor: 'white',justifyContent:'space-around'}}>
      <Box style={{height: '30%', alignItems: 'center'}} >
      <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/golden-winners-cup_1284-18399.jpg',
          }}
          alt="Alternatext"
          size="100%"
          width="50%"
        />
        <Center p='15px'>
          <Text fontSize="2xl">congratulations!</Text>{' '}
        </Center>
      </Box>

      <Box bg='#00194a' m='25px' mt='80px' >
        <Center >
          <Text fontSize="xl" color='white'>Your Score</Text>{' '}
        </Center>

        <Center>
          <Text fontSize="2xl" color='white'>{score} / 10</Text>{' '}
        </Center>
      </Box>
      <Box p='15px'>
        {' '}
        <Button onPress={handleHome} variant='Outline' color="white" bg='#00194a'  width='100%'><Text fontSize='xl' fontWeight='bold' color='white'>Home</Text></Button>

      </Box>
    </Box>
  );
};
export default Submit;
