/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Box, Center,  Image,  Text,Button

} from 'native-base';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
type SectionProps = PropsWithChildren<{
  title: string;
}>;
const newColorTheme = {
  brand: {
    900: '#5B8DF6',
    800: '#ffffff',
    700: '#cccccc',
  },
};


function Home({navigation}: any): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <View style={styles.body}>
    //   <View style={styles.imag}>
    //     <Image source={{uri: '/home.png'}} /> 
    //    </View>
    //   <Text style={styles.header}>Quiz App's</Text>
    //   <Button title="Test" onPress={() => navigation.navigate('Quiz')} />
    // </View>        
    <Box height="100%">
      <Box>

      <Image source={{
        uri:"data:image/jpeg;base64,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"
    }} alt="Alternatext"   size="250px" width='100%'  
/>
      </Box>
      <Box  style={{backgroundColor:'#00194a',height:'100%'}}>
{/* <Image source={}/> */}
      <Box>
        <Center fontWeight='bold' fontSize="2xl" mt="120px">

<Text fontSize="2xl" color="white">Let's Play!</Text>
</Center>

      </Box>
<Box width="100%" style={{display:'flex',justifyContent:"flex-end",alignItems:'center'}}>
  <Box style={{width:'50%',alignItems:'center'} } m='50px'>
     <Button  onPress={() => navigation.navigate('Quiz')} variant='Outline' color="red" bg='white'  width='100%'>Start</Button>
     </Box>

</Box>
</Box>

    </Box>
  );
}

const styles = StyleSheet.create({
  body: {
    height: 50,
    width: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: 'blue',
    marginHorizontal: 120,
    marginTop: 120,
  },
  header: {
    color: 'white',
    fontSize: 19,
    fontWeight: '800',
  },
  imag: {
    height: 10,
    width: 10,
  },
});

export default Home;