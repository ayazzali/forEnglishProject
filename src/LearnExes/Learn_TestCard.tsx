import React from "react";
import { Text } from "react-native-elements";
import { View, TouchableOpacity } from "react-native";
import { WrapLearn_LWordsAgainstLWords } from "./WrapLearn_LWordsAgainstLWords"
import { DB_actionNames, DB, __wordsInMemory, typeWordsInMemory, randomizeList, l } from '../util'

interface Props__Learn_TestCard {
    word: typeWordsInMemory
    words3: Array<typeWordsInMemory>
    whatToDoAfter: (IRememberThisWord: boolean) => void
}

/**
 * дай мне слово (и 3!!! варианта перевода для теста  --неправильных конечно)
 * --
 * рисую слово и переводы может РИСУНОК???
 * делаю на сово-перевод обработчик
 *      выводим правильно или нет
 *          если нет - показываем правильный
 *          если да - то ХЗ???
 */
class Learn_TestCard extends React.Component<Props__Learn_TestCard, any>{

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
        let translations4 = this.props.words3//.map(_ => _.translation)
        translations4.push(this.props.word)
        translations4 = translations4.sort(randomizeList)
        let translations4View = translations4.map((_, key) => (
            <View key={_.id}>
                <TouchableOpacity onPress={this.choosetranslation.bind(this, _.id)}>
                    <Text h4 style={{ paddingBottom: 10 }}>
                        {key + 1}) {_.translation}
                    </Text></TouchableOpacity></View>))
        return (
            <View>
                <Text style={{ width: 200, height: 200, backgroundColor: "#ccffcc" }}>
                    тут может быть рисунок...
                </Text>
                <Text h2 style={{ textAlign: 'center' }}>
                    {this.props.word.word}
                </Text>
                <View >
                    {translations4View}
                </View>
            </View>
        )
    }
}

export function TestLearn_TestCard() {
    let wList: Array<typeWordsInMemory>;
    wList = []//{ id: 8, word: "lklklklklklword", filter: "", partofspeech: " n", translation: "khhjhjhj rt" }]//__wordsInMemory;
    wList.push(__wordsInMemory.w[0])
    wList.push(__wordsInMemory.w[2])
    wList.push(__wordsInMemory.w[3])
    var w: typeWordsInMemory = __wordsInMemory.w[11]// { id: 8, word: "lklklklklklword", filter: "знакомства", partofspeech: "n", translation: "khhjhjhj rt" }
    return (
        <Learn_TestCard words3={wList} word={w} whatToDoAfter={() => alert("whatToDoAfter")} />
    )
}

interface typePropsW_TC {
    words: Array<typeWordsInMemory>
    whatToDoAfter?: () => void
}
interface typeStateW_TC {
    current: number,
    badRemeberedWordCount: Array<number>
}
/**
 * рисую тесты для всех слов
 * - варианты переводов беру из этих же слов
 */
export class WrapLearn_TestCards extends React.Component<typePropsW_TC, typeStateW_TC>{
    constructor(p: typePropsW_TC) {
        super(p);
        this.state = {
            current: 0,
            badRemeberedWordCount: []
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
        if (word==undefined) {
            if (this.props.whatToDoAfter)
                this.props.whatToDoAfter()
            alert("Вы молодец!")
            return (<View></View>);
        }
        if (!word) debugger
        // doing wList
        let copyWords = this.props.words.slice()
        //l(copyWords.length)
        copyWords.splice(this.state.current, 1)
        let wList = copyWords.sort(randomizeList).slice(0, 3)
        //l(wList)
        //wList.push(word)

        // done wList
        let d: number = 2
        d = d + 0.2;
        return (
            <Learn_TestCard words3={wList} word={word} whatToDoAfter={(IRememberThisWord) =>
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
        )
    }
}