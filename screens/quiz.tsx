import axios from 'axios';
import {useEffect, useState} from 'react';
import { Pressable, StyleSheet, View} from 'react-native';
import Submit from './submit';
import {Box, Text,Button, Radio, Spinner} from 'native-base';
const shuffleArray = (array: any) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const Quiz = ({navigation}: any) => {
  const [results, setResults]: any = useState([]);

  const [question, setquestion]: any = useState('');
  const [score, setScore] = useState(0);
  const [ques, setQue] = useState(0);
  const [loading, isLoading] = useState(false);
  const [options, setOptions]: any = useState([]);
const[clicked,setClicked] =useState(null)
  const getData = async () => {
    // const data =await axios
    //   .get('https://opentdb.com/api.php?amount=10')
    //   .then((response: any) => console.log(response.results[0]));
    isLoading(true);
    const url = 'https://opentdb.com/api.php?amount=10';
    const res = await fetch(url);
    const data = await res.json();
    let arr: any = [];
    arr.push(data.results[ques]);

    setResults(arr);
    setquestion(data.results[ques].question);
    setOptions(shuffle(data?.results[ques]));
    isLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  const shuffle = (_questions: any) => {
    let option = [..._questions.incorrect_answers];
    option.push(_questions.correct_answer);

    shuffleArray(option);
    return option;
  };
  const handleOptions = (option: any,index:any) => {
    console.log('optionnnnn', option);
    setClicked(index)
    let correct = results.find((item: any) => option === item.correct_answer);

    if (option === correct?.correct_answer) {
      setScore(score + 1);
    }
  };
  const handlePress = () => {
    if (ques < 10) {
      setQue(ques + 1);
      getData();
    }
  };
  const handlePrev = () => {
    setQue(ques - 1);
    getData();
  };
  const handleSubmit = () => {
    navigation.navigate('Result', {score: score});
  };
  return (
    <Box style={{backgroundColor: '#00194a', height: '100%'}}>
      {loading ? (
        <View style={styles.loader}>
      <Spinner color="emerald.500" />
        </View>
      ) : (
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            height: '100%',
          }}>
          <Box style={{}} p='5px'>
            {question !== 0 && (
              <Text fontSize="xl" color="grey" mt="50px" fontWeight='bold'>
                Q.{question}
              </Text>
            )}
          </Box>
            <Box style={{width:'100%'}}>
              {options.map((option: any,index:any, key = {option}) => (
                <Box
                             style={{display: 'flex', alignItems: 'flex-start',justifyContent:'center'}}
                  ml="25px" p='5px' >
                   
                  <Text
                    onPress={() => handleOptions(option,index)}
                  
                    color="white"
                    style={{color: 'white'}} fontSize='xl' fontWeight='bold'>
                   {index+1}. {option}
                    {'\n'}
                  </Text>
                </Box>
              ))}
            </Box>
          <Box style={{width:'100%'}} p='15px'>
            {ques > 9 ? (
              <Button onPress={handleSubmit} variant='Outline' color="red" bg='grey'  width='100%'><Text fontSize='xl' fontWeight='bold'>Submit</Text></Button>
            ) : (
              <Box >
              <Button onPress={handlePress} variant='Outline' color="red" bg='grey'  width='100%'><Text fontSize='xl' fontWeight='bold'>Next</Text></Button>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  options: {
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  header: {
    color: 'white',
    fontSize: 19,
    fontWeight: '800',
  },
  loader: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Quiz;
