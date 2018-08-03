import React from "react";
import { Text } from "react-native-elements";
import { View, TouchableOpacity } from "react-native";
import { WrapLearn_LWordsAgainstLWords } from "./WrapLearn_LWordsAgainstLWords"
import { DB_actionNames, DB, __wordsInMemory, typeWordsInMemory, randomizeList, l } from '../util'

interface Props__Learn_ChooseWordInSentence {
    word: typeWordsInMemory
    /** to choose, without right Word  */
    words3: Array<typeWordsInMemory>
    whatToDoAfter: (IRememberThisWord: boolean) => void
}

/**
 * ~~всё как Learn_TestCard~~
 * дай мне слово (и 3!!! других слов для выбора  --неправильных конечно)
 * --
 * рисую предложение без правильного слова и вариатны сслов чтоб вставить туда
 * делаю на выбор-слова обработчик
 *      - выводим правильно или нет:
 *         -  -- если нет - показываем правильный 
 *          - если да - то ХЗ???
 */
class Learn_ChooseWordInSentence extends React.Component<Props__Learn_ChooseWordInSentence, any>{

    choosetranslation(wordId: Number) {
        //alert(wordId)
        if (wordId == this.props.word.id) {
            l("Правильно" + wordId)
            this.props.whatToDoAfter(true)
        }
        else {
            /**ХЗ??? что делать */
            l("Не правильно" + wordId)
        }
    }
    render() {
        let sentence = this.props.word.example && this.props.word.example.replace(this.props.word.word, " .... ")
        if (!sentence)
            alert('Sorry. Go back :(')
        let wordsToChoose4 = this.props.words3//.map(_ => _.translation)
        wordsToChoose4.push(this.props.word)
        wordsToChoose4 = wordsToChoose4.sort(randomizeList)
        let translations4View = wordsToChoose4.map((_, key) => (
            <View key={_.id}>
                <TouchableOpacity onPress={this.choosetranslation.bind(this, _.id)}>
                    <Text style={{ paddingBottom: 10 }}>
                        {key + 1}) {_.word}
                    </Text></TouchableOpacity></View>))
        return (
            <View>
                <Text style={{ padding: 10 }}>Задание: Выберите подходящее слово по смыслу в предложение </Text>
                <Text h4 style={{ textAlign: 'center' }}>
                    {sentence}
                </Text>
                <View >
                    {translations4View}
                </View>
            </View>
        )
    }
}

//del
export function TestLearn_ChooseWordInSentence() {
    let wList: Array<typeWordsInMemory>;
    wList = []//{ id: 8, word: "lklklklklklword", filter: "", partofspeech: " n", translation: "khhjhjhj rt" }]//__wordsInMemory;
    wList.push(__wordsInMemory.w[0])
    wList.push(__wordsInMemory.w[2])
    wList.push(__wordsInMemory.w[4])
    var w: typeWordsInMemory = __wordsInMemory.w[3]// { id: 8, word: "lklklklklklword", filter: "знакомства", partofspeech: "n", translation: "khhjhjhj rt" }
    return (
        <Learn_ChooseWordInSentence words3={wList} word={w} whatToDoAfter={() => alert("whatToDoAfter")} />
    )
}

interface typeProps_CWIS {
    words: Array<typeWordsInMemory>
    whatToDoAfter?: () => void
}
interface typeState_CWIS {
    current: number
    badRemeberedWordCount: Array<number>
    nowWeShowingQuestion: boolean
}

/**
 * прокидывает props - words где есть *example*
 * и всё
 * @param props 
 */
export function Wrap2Learn_ChooseWordInSentence(props: typeProps_CWIS) {
    let p = { ...props, words: props.words.filter(_ => _.example != undefined).slice() }
    return (
        <WrapLearn_ChooseWordInSentence {...p} />)
}
/** 
 * ~~всё как Learn_TestCard~~
 * рисую предложения для всех слов 
 * - варианты слов беру из этих же слов
 * ### убрать русское предложение! из задания
 */
class WrapLearn_ChooseWordInSentence extends React.Component<typeProps_CWIS, typeState_CWIS>{
    constructor(p: typeProps_CWIS) {
        super(p);
        this.state = {
            current: 0,
            badRemeberedWordCount: [],
            nowWeShowingQuestion: false
        }
    }
    IsHeRepeatingBadWords(): boolean {
        if (this.state.current == this.props.words.length - 1)
            if (this.state.badRemeberedWordCount.length > 0)
                return true
        return false
    }
    render() {
        let cur = this.state.current// новый очередной индекс 
        if (this.state.current == this.props.words.length)
            if (this.state.badRemeberedWordCount.length > 0)
                cur = this.state.badRemeberedWordCount[0]

        let word = this.props.words[cur]
        if (word == undefined) {
            if (this.props.whatToDoAfter)
                this.props.whatToDoAfter()
            alert("Вы молодец!")
            return (<View></View>);
        }
        if (!word)
            alert("sorry. choose other word :(")
        // doing wList
        let copyWords = this.props.words.slice()
        copyWords.splice(this.state.current, 1)
        let wList = copyWords.sort(randomizeList).slice(0, 3)
        //wList.push(word)
        // done wList
        return (
            <View>
                <Learn_ChooseWordInSentence
                    words3={wList}
                    word={word}
                    whatToDoAfter={(IRememberThisWord) =>
                        this.setState(prv => {
                            var toSetState = {
                                current: prv.current + 1,
                                badRemeberedWordCount: prv.badRemeberedWordCount //nothing means
                            }
                            if (IRememberThisWord) {
                                if (this.IsHeRepeatingBadWords())
                                    toSetState.badRemeberedWordCount.splice(0)//удаляем то слово которое повторяли
                                else
                                    __wordsInMemory.w = __wordsInMemory.w.map(_ => {
                                        if (_.id == prv.current)
                                            _.percent = _.percent ? _.percent + 0.3 : 0.3;
                                        return _
                                    })
                            }
                            else {
                                if (!this.IsHeRepeatingBadWords())
                                    toSetState.badRemeberedWordCount = prv.badRemeberedWordCount.concat([prv.current,])
                            }

                            return toSetState
                        })} />
                {this.state.nowWeShowingQuestion
                    && <View style={{ width: 100, height: 130, backgroundColor: 'orange' }}>
                        here is question ^)
                        </View>}
            </View>
        )
    }
}