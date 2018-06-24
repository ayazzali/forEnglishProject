import { StackNavigator } from "react-navigation"

const _REST = "http://192.168.43.252:3000"
    , _users = "users"

export function RestFetch(route = 'posts/1/comments', action = "GET", bodyThatIWillStringify: string) {
    console.log(route);
    return fetch(_REST + '/' + route, {
        headers: { 'Content-Type': 'application/json' },
        method: action,
        body: JSON.stringify(bodyThatIWillStringify)
    })
        .then(e => e.json())
        .then(res => {
            console.log('[from RestFetch] V')
            console.log(res);//todo delete
            return res;
        })

}
/// useless
export let screens = {
    _CategoriesList: "_CategoriesList",
    _CategoryButton: "_CategoryButton",
    _Login: "_Login",
    _CategoryFull: "_CategoryFull",
    _MainTeacher: "_MainTeacher",
    _TeacherStat: "_TeacherStat",
}
export const DB = {
    usersCategories: 'usersCategories',
    categories: 'categories',
    users: 'users',
    getWord: (wId: number) => __wordsInMemory.w.filter(f => f.id = +wId)[0],

}
export const DB_actionNames = {
    Card: 'card',
    Test_4: 'test4',
    Test_Written: 'testWritten'
}

export const randomizeList = () => 0.5 - Math.random();

export const lJson = (v: any) => { console.log(JSON.stringify(v)); };
export const l=lJson;
export const lSimple = (v: any) => { console.log(v); };

export interface typeWordsInMemory {
    id: number
    word: String
    partofspeech: String
    translation: String
    filter: String
    example?: String
    percent?:number
}

export class __wordsInMemory {
    static w: Array<typeWordsInMemory> = [
        {
            "id": 1,
            "word": "a lot",
            "partofspeech": "adv",
            "translation": "много",
            "filter": "знакомство"
        },
        {
            "id": 2,
            "word": "action film",
            "partofspeech": "n",
            "translation": "боевик",
            "filter": "знакомство"
        },
        {
            "id": 3,
            "word": "actually",
            "partofspeech": "adv",
            "translation": "фактически, на самом деле",
            "example": "Well, actually, it's Tom. Ну, вообще-то это Том.",
            "filter": "знакомство"
        },
        {
            "id": 4,
            "word": "afford",
            "partofspeech": "v",
            "translation": "позволять себе",
            "example": "I can't afford to waiste so much time. Я не могу позволить себе тратить зря столько времени впустую.",
            "filter": "знакомство"
        },
        {
            "id": 5,
            "word": "all day",
            "partofspeech": "adv",
            "translation": "весь день",
            "filter": "знакомство"
        },
        {
            "id": 6,
            "word": "all the time",
            "partofspeech": "ph",
            "translation": "все время",
            "filter": "знакомство"
        },
        {
            "id": 7,
            "word": "allergic",
            "partofspeech": "adj",
            "translation": "аллергический",
            "example": "I'm allergic to animals. У меня аллергия на животных.",
            "filter": "знакомство"
        },
        {
            "id": 8,
            "word": "animal",
            "partofspeech": "n",
            "translation": "живтоное",
            "filter": "знакомство"
        },
        {
            "id": 9,
            "word": "animal lover",
            "partofspeech": "n",
            "translation": "любитель животных",
            "filter": "знакомство"
        },
        {
            "id": 10,
            "word": "answer",
            "partofspeech": "v",
            "translation": "отвечать",
            "filter": "знакомство"
        },
        {
            "id": 11,
            "word": "any",
            "partofspeech": "pron",
            "translation": "кто-нибудь, что-нибудь, какой-нибудь",
            "example": "Did any of yоu know about it? Знал ли кто-нибудь из вас об этом?",
            "filter": "знакомство"
        },
        {
            "id": 12,
            "word": "anything",
            "partofspeech": "pron",
            "translation": "(в вопр и отр) кто-нибудь, что-нибудь",
            "filter": "знакомство"
        },
        {
            "id": 13,
            "word": "appearance",
            "partofspeech": "n",
            "translation": "внешность",
            "filter": "знакомство"
        },
        {
            "id": 14,
            "word": "around the corner",
            "partofspeech": "ph",
            "translation": "за углом",
            "example": "Around the corner there is a shop. За углом находится магазин.",
            "filter": "знакомство"
        },
        {
            "id": 15,
            "word": "arrive",
            "partofspeech": "v",
            "translation": "прибывать, приезжать",
            "filter": "знакомство"
        },
        {
            "id": 16,
            "word": "ask",
            "partofspeech": "v",
            "translation": "спрашивать",
            "filter": "знакомство"
        },
        {
            "id": 17,
            "word": "avoid",
            "partofspeech": "v",
            "translation": "избегать",
            "example": "I avoid making friends with rude people. Я избегаю дружбы с грубыми людьми",
            "filter": "знакомство"
        },
        {
            "id": 18,
            "word": "band",
            "partofspeech": "n",
            "translation": "группа",
            "filter": "знакомство"
        },
        {
            "id": 19,
            "word": "be an only child",
            "partofspeech": "ph",
            "translation": "быть единственным ребенком",
            "example": "Are you an only child in your family? Ты единственный ребенок в семье?",
            "filter": "знакомство"
        },
        {
            "id": 20,
            "word": "be boring",
            "partofspeech": "ph",
            "translation": "быть скучным",
            "filter": "знакомство"
        },
        {
            "id": 21,
            "word": "be broke",
            "partofspeech": "ph",
            "translation": "на мели, банкрот",
            "example": "I'm broke - я на мели.",
            "filter": "знакомство"
        },
        {
            "id": 22,
            "word": "be from",
            "partofspeech": "ph",
            "translation": "быть родом",
            "example": "Where are you from? Откуда Вы родом?",
            "filter": "знакомство"
        },
        {
            "id": 23,
            "word": "be interested in",
            "partofspeech": "ph",
            "translation": "быть заинтересованным",
            "example": "I'm interested in sciences. Я интересуюсь науками.",
            "filter": "знакомство"
        },
        {
            "id": 24,
            "word": "be named after",
            "partofspeech": "ph",
            "translation": "быть названным в честь",
            "example": "Who are you named after? В честь кого тебя назвали?",
            "filter": "знакомство"
        },
        {
            "id": 25,
            "word": "beautiful",
            "partofspeech": "adj",
            "translation": "красивый",
            "filter": "знакомство"
        },
        {
            "id": 26,
            "word": "black",
            "partofspeech": "adj",
            "translation": "черный",
            "filter": "знакомство"
        },
        {
            "id": 27,
            "word": "blue",
            "partofspeech": "adj",
            "translation": "синий, голубой",
            "filter": "знакомство"
        },
        {
            "id": 28,
            "word": "boring",
            "partofspeech": "adj",
            "translation": "скучный",
            "filter": "знакомство"
        },
        {
            "id": 29,
            "word": "both",
            "partofspeech": "pron",
            "translation": "оба, обе",
            "example": "He speaks both English and Russian. Он говорит и по- английски и по-русски.",
            "filter": "знакомство"
        },
        {
            "id": 30,
            "word": "bread",
            "partofspeech": "n",
            "translation": "хлеб",
            "filter": "знакомство"
        },
        {
            "id": 31,
            "word": "break",
            "partofspeech": "n",
            "translation": "перемена, перерыв",
            "filter": "знакомство"
        },
        {
            "id": 32,
            "word": "brother",
            "partofspeech": "n",
            "translation": "брат",
            "filter": "знакомство"
        },
        {
            "id": 33,
            "word": "brown",
            "partofspeech": "adj",
            "translation": "коричневый",
            "filter": "знакомство"
        },
        {
            "id": 34,
            "word": "bus",
            "partofspeech": "n",
            "translation": "автобус",
            "example": "I go to the university by bus. Я езжу в университет на автобусе.",
            "filter": "знакомство"
        },
        {
            "id": 35,
            "word": "by the way",
            "partofspeech": "ph",
            "translation": "кстати",
            "filter": "знакомство"
        },
        {
            "id": 36,
            "word": "can",
            "partofspeech": "mv",
            "translation": "мочь, уметь",
            "filter": "знакомство"
        },
        {
            "id": 37,
            "word": "can't stand",
            "partofspeech": "ph",
            "translation": "терпеть не мочь",
            "filter": "знакомство"
        },
        {
            "id": 38,
            "word": "cartoons",
            "partofspeech": "n",
            "translation": "мультики",
            "filter": "знакомство"
        },
        {
            "id": 39,
            "word": "change",
            "partofspeech": "v",
            "translation": "меняться, изменять",
            "example": "John, please, change places with Mary.",
            "filter": "знакомство"
        },
        {
            "id": 40,
            "word": "check",
            "partofspeech": "v",
            "translation": "сравнивать",
            "example": "let's check the answers.",
            "filter": "знакомство"
        },
        {
            "id": 41,
            "word": "class",
            "partofspeech": "n",
            "translation": "класс",
            "filter": "знакомство"
        },
        {
            "id": 42,
            "word": "classmate",
            "partofspeech": "n",
            "translation": "одноклассник",
            "filter": "знакомство"
        },
        {
            "id": 43,
            "word": "clothes",
            "partofspeech": "n",
            "translation": "одежда",
            "filter": "знакомство"
        },
        {
            "id": 44,
            "word": "cold",
            "partofspeech": "adj",
            "translation": "холодный",
            "filter": "знакомство"
        },
        {
            "id": 45,
            "word": "color",
            "partofspeech": "n",
            "translation": "цвет",
            "filter": "знакомство"
        },
        {
            "id": 46,
            "word": "comedy",
            "partofspeech": "n",
            "translation": "комедия",
            "filter": "знакомство"
        },
        {
            "id": 47,
            "word": "common",
            "partofspeech": "adj",
            "translation": "общий",
            "example": "common interests - общие интересы",
            "filter": "знакомство"
        },
        {
            "id": 48,
            "word": "compare",
            "partofspeech": "v",
            "translation": "сравнивать",
            "example": "let's compare the answers.",
            "filter": "знакомство"
        },
        {
            "id": 49,
            "word": "conversation",
            "partofspeech": "n",
            "translation": "разговор беседа",
            "example": "How dou start a conversation with a stranger? Как ты начинаешь беседу с незнакомцем?",
            "filter": "знакомство"
        },
        {
            "id": 50,
            "word": "corner",
            "partofspeech": "n",
            "translation": "угол",
            "filter": "знакомство"
        },
        {
            "id": 51,
            "word": "correct",
            "partofspeech": "adj",
            "translation": "правильный",
            "example": "What is the correct answer? Какой ответ будет правильным?",
            "filter": "знакомство"
        },
        {
            "id": 52,
            "word": "crowded",
            "partofspeech": "adv",
            "translation": "переполненный,",
            "example": "crowded streets - улицы, запруженные народом",
            "filter": "знакомство"
        },
        {
            "id": 53,
            "word": "current",
            "partofspeech": "adj",
            "translation": "текущий, настоящий",
            "filter": "знакомство"
        },
        {
            "id": 54,
            "word": "delicious",
            "partofspeech": "adj",
            "translation": "вкусный",
            "filter": "знакомство"
        },
        {
            "id": 55,
            "word": "detective",
            "partofspeech": "n",
            "translation": "детектив",
            "filter": "знакомство"
        },
        {
            "id": 56,
            "word": "discuss",
            "partofspeech": "v",
            "translation": "обсуждать",
            "filter": "знакомство"
        },
        {
            "id": 57,
            "word": "do smth for a living",
            "partofspeech": "ph",
            "translation": "зарабатывать на жизнь",
            "example": "What do you do for a living? Как Вы зарабатываете на жизнь?",
            "filter": "знакомство"
        },
        {
            "id": 58,
            "word": "during",
            "partofspeech": "prep",
            "translation": "в течение, во время",
            "filter": "знакомство"
        },
        {
            "id": 59,
            "word": "either",
            "partofspeech": "adv",
            "translation": "также",
            "example": "If you don't go I won't go either. Если вы не пойдете, я тоже не пойду.",
            "filter": "знакомство"
        },
        {
            "id": 60,
            "word": "encourage",
            "partofspeech": "v",
            "translation": "воодушевлять",
            "filter": "знакомство"
        },
        {
            "id": 61,
            "word": "event",
            "partofspeech": "n",
            "translation": "событие",
            "filter": "знакомство"
        },
        {
            "id": 62,
            "word": "example",
            "partofspeech": "n",
            "translation": "пример",
            "filter": "знакомство"
        },
        {
            "id": 63,
            "word": "eye contact",
            "partofspeech": "n",
            "translation": "зрительный контакт",
            "filter": "знакомство"
        },
        {
            "id": 64,
            "word": "family",
            "partofspeech": "n",
            "translation": "семья",
            "example": "He comes from a peasant family. Он родился в крестьянской семье.",
            "filter": "знакомство"
        },
        {
            "id": 65,
            "word": "fan",
            "partofspeech": "n",
            "translation": "фанат",
            "filter": "знакомство"
        },
        {
            "id": 66,
            "word": "fashion",
            "partofspeech": "n",
            "translation": "мода",
            "filter": "знакомство"
        },
        {
            "id": 67,
            "word": "favourite",
            "partofspeech": "adj",
            "translation": "любимый",
            "example": "What is your favourite colour? Какой твойлюбимый цвет?",
            "filter": "знакомство"
        },
        {
            "id": 68,
            "word": "feature film",
            "partofspeech": "n",
            "translation": "художественный фильм",
            "filter": "знакомство"
        },
        {
            "id": 69,
            "word": "feel",
            "partofspeech": "v",
            "translation": "чувствовать",
            "filter": "знакомство"
        },
        {
            "id": 70,
            "word": "find out",
            "partofspeech": "v",
            "translation": "выяснить",
            "filter": "знакомство"
        },
        {
            "id": 71,
            "word": "food",
            "partofspeech": "n",
            "translation": "еда",
            "filter": "знакомство"
        },
        {
            "id": 72,
            "word": "foollow-up",
            "partofspeech": "adj",
            "translation": "вытекающий",
            "example": "Try to ask the follow-up questions. Старайся задавать вытекающие вопросы.",
            "filter": "знакомство"
        },
        {
            "id": 73,
            "word": "for hours",
            "partofspeech": "adv",
            "translation": "часами",
            "example": "I waited her for hours. Яждал ее часами.",
            "filter": "знакомство"
        },
        {
            "id": 74,
            "word": "full-time student",
            "partofspeech": "ph",
            "translation": "студент-очник",
            "filter": "знакомство"
        },
        {
            "id": 75,
            "word": "get to work",
            "partofspeech": "ph",
            "translation": "добираться до работы",
            "example": "How do you get to work? Как вы добираетесь до работы?",
            "filter": "знакомство"
        },
        {
            "id": 76,
            "word": "get together",
            "partofspeech": "ph",
            "translation": "собираться",
            "example": "they get together at his house",
            "filter": "знакомство"
        },
        {
            "id": 77,
            "word": "getting help",
            "partofspeech": "ph",
            "translation": "получать помощь",
            "filter": "знакомство"
        },
        {
            "id": 78,
            "word": "go ahead",
            "partofspeech": "ph",
            "translation": "продолжай, вперед",
            "filter": "знакомство"
        },
        {
            "id": 79,
            "word": "green",
            "partofspeech": "adj",
            "translation": "зеленый",
            "filter": "знакомство"
        },
        {
            "id": 80,
            "word": "grey",
            "partofspeech": "adj",
            "translation": "серый",
            "filter": "знакомство"
        },
        {
            "id": 81,
            "word": "guess",
            "partofspeech": "v",
            "translation": "1)угадывать, 2) предполагать, 3) амер. думать",
            "example": "He could only guess what time it was. Он мог только догадываться который час.",
            "filter": "знакомство"
        },
        {
            "id": 82,
            "word": "gym",
            "partofspeech": "n",
            "translation": "спорт зал",
            "filter": "знакомство"
        },
        {
            "id": 83,
            "word": "hate",
            "partofspeech": "v",
            "translation": "ненавидеть",
            "filter": "знакомство"
        },
        {
            "id": 84,
            "word": "have smth ready",
            "partofspeech": "ph",
            "translation": "иметь что-либо готовым",
            "filter": "знакомство"
        },
        {
            "id": 85,
            "word": "have to",
            "partofspeech": "mv",
            "translation": "приходиться",
            "filter": "знакомство"
        },
        {
            "id": 86,
            "word": "health",
            "partofspeech": "n",
            "translation": "здоровье",
            "filter": "знакомство"
        },
        {
            "id": 87,
            "word": "here",
            "partofspeech": "adv",
            "translation": "здесь, тут",
            "filter": "знакомство"
        },
        {
            "id": 88,
            "word": "hot",
            "partofspeech": "adj",
            "translation": "жаркий",
            "filter": "знакомство"
        },
        {
            "id": 89,
            "word": "hour",
            "partofspeech": "n",
            "translation": "час",
            "filter": "знакомство"
        },
        {
            "id": 90,
            "word": "how",
            "partofspeech": "pron",
            "translation": "как",
            "example": "How long have you been studying English? Сколько вы изучаете английский язык?",
            "filter": "знакомство"
        },
        {
            "id": 91,
            "word": "improve",
            "partofspeech": "v",
            "translation": "улучшать",
            "example": "How can people improve their social life? Как люди могут улучшить свою общественную жизнь?",
            "filter": "знакомство"
        },
        {
            "id": 92,
            "word": "in common",
            "partofspeech": "adv",
            "translation": "соместно",
            "example": "They have nothing in common. У них нет ничего общего.",
            "filter": "знакомство"
        },
        {
            "id": 93,
            "word": "information",
            "partofspeech": "n",
            "translation": "информация",
            "example": "Where can I get this information? Где я могу получить эту информацию?",
            "filter": "знакомство"
        },
        {
            "id": 94,
            "word": "interesting",
            "partofspeech": "adj",
            "translation": "интересный",
            "filter": "знакомство"
        },
        {
            "id": 95,
            "word": "interrogation",
            "partofspeech": "n",
            "translation": "допрос",
            "filter": "знакомство"
        },
        {
            "id": 96,
            "word": "it gets crowded",
            "partofspeech": "ph",
            "translation": "становится многолюдно",
            "example": "It gets pretty crowded outside. Становится довольно многолюдно на улице.",
            "filter": "знакомство"
        },
        {
            "id": 97,
            "word": "item of clothing",
            "partofspeech": "n",
            "translation": "предмет одежды",
            "filter": "знакомство"
        },
        {
            "id": 98,
            "word": "jacket",
            "partofspeech": "n",
            "translation": "жакет, куртка",
            "filter": "знакомство"
        },
        {
            "id": 99,
            "word": "keep",
            "partofspeech": "v",
            "translation": "держать, хранить, заставлять, продолжать",
            "filter": "знакомство"
        },
        {
            "id": 100,
            "word": "keep an eye contact",
            "partofspeech": "ph",
            "translation": "поддерживать зрительный контакт",
            "filter": "знакомство"
        },
        {
            "id": 101,
            "word": "keep quiet",
            "partofspeech": "ph",
            "translation": "соблюдать тишину",
            "filter": "знакомство"
        },
        {
            "id": 102,
            "word": "keep the conversation going",
            "partofspeech": "ph",
            "translation": "продолжать разговор",
            "filter": "знакомство"
        },
        {
            "id": 103,
            "word": "kind",
            "partofspeech": "n",
            "translation": "вид, род, сорт",
            "example": "various kinds of music - разная музыка (виды)",
            "filter": "знакомство"
        },
        {
            "id": 104,
            "word": "know",
            "partofspeech": "v",
            "translation": "знать",
            "filter": "знакомство"
        },
        {
            "id": 105,
            "word": "late",
            "partofspeech": "adj",
            "translation": "поздний",
            "example": "I'm late - я опоздал",
            "filter": "знакомство"
        },
        {
            "id": 106,
            "word": "let's = let us",
            "partofspeech": "ph",
            "translation": "давай, давайте",
            "example": "let's check the answers. Давайте проверим ответы.",
            "filter": "знакомство"
        },
        {
            "id": 107,
            "word": "like",
            "partofspeech": "v",
            "translation": "любить",
            "example": "What do you like? Что ты любишь?",
            "filter": "знакомство"
        },
        {
            "id": 108,
            "word": "line",
            "partofspeech": "n",
            "translation": "очередь",
            "filter": "знакомство"
        },
        {
            "id": 109,
            "word": "listen",
            "partofspeech": "v",
            "translation": "слушать",
            "filter": "знакомство"
        },
        {
            "id": 110,
            "word": "listener",
            "partofspeech": "n",
            "translation": "слушатель",
            "filter": "знакомство"
        },
        {
            "id": 111,
            "word": "live",
            "partofspeech": "v",
            "translation": "жить",
            "example": "where do you live? Где ты живешь?",
            "filter": "знакомство"
        },
        {
            "id": 112,
            "word": "live alone",
            "partofspeech": "ph",
            "translation": "жить одному",
            "example": "She lives alone. Она живет одна.",
            "filter": "знакомство"
        },
        {
            "id": 113,
            "word": "live around",
            "partofspeech": "v",
            "translation": "жить рядом",
            "filter": "знакомство"
        },
        {
            "id": 114,
            "word": "look",
            "partofspeech": "v",
            "translation": "смотреть",
            "filter": "знакомство"
        },
        {
            "id": 115,
            "word": "look at",
            "partofspeech": "v",
            "translation": "смотреть на",
            "filter": "знакомство"
        },
        {
            "id": 116,
            "word": "look forward",
            "partofspeech": "v",
            "translation": "ждать с нетерпением",
            "filter": "знакомство"
        },
        {
            "id": 117,
            "word": "loud",
            "partofspeech": "adv",
            "translation": "громкий",
            "filter": "знакомство"
        },
        {
            "id": 118,
            "word": "love to wear",
            "partofspeech": "ph",
            "translation": "нравиться носить",
            "filter": "знакомство"
        },
        {
            "id": 119,
            "word": "major",
            "partofspeech": "n",
            "translation": "специальность",
            "example": "What's your major? Какая у Вас специальность?",
            "filter": "знакомство"
        },
        {
            "id": 120,
            "word": "making conversation",
            "partofspeech": "ph",
            "translation": "вести беседу",
            "filter": "знакомство"
        },
        {
            "id": 121,
            "word": "making friends",
            "partofspeech": "ph",
            "translation": "заводить друзей",
            "example": "Do you like making friends? Тебе нравится заводить друзей?",
            "filter": "знакомство"
        },
        {
            "id": 122,
            "word": "mean (meant meant)",
            "partofspeech": "v",
            "translation": "значить, означать",
            "example": "What do you mean? Что ты имеешь ввиду?",
            "filter": "знакомство"
        },
        {
            "id": 123,
            "word": "middle name",
            "partofspeech": "n",
            "translation": "отчетство",
            "example": "What's your middle name? Какое у тебя отчество?",
            "filter": "знакомство"
        },
        {
            "id": 124,
            "word": "movie",
            "partofspeech": "n",
            "translation": "(разг) кинофильм",
            "example": "Did you enjoy the movie? Тебе понравился фильм?",
            "filter": "знакомство"
        },
        {
            "id": 125,
            "word": "much",
            "partofspeech": "adv",
            "translation": "много",
            "filter": "знакомство"
        },
        {
            "id": 126,
            "word": "name",
            "partofspeech": "n",
            "translation": "имя",
            "example": "What's your name? Как тебя зовут?",
            "filter": "знакомство"
        },
        {
            "id": 127,
            "word": "nearby",
            "partofspeech": "adj",
            "translation": "близлежащий, соседний",
            "example": "She met them in a nearby village. Она встретила их в соседней деревне.",
            "filter": "знакомство"
        },
        {
            "id": 128,
            "word": "negative comments",
            "partofspeech": "ph",
            "translation": "негативные комментарии",
            "filter": "знакомство"
        },
        {
            "id": 129,
            "word": "neighborhood",
            "partofspeech": "n",
            "translation": "соседство, округ, район",
            "example": "He lives in the neighbourhood of London. Он живет поблизости от Лондона.",
            "filter": "знакомство"
        },
        {
            "id": 130,
            "word": "new",
            "partofspeech": "adj",
            "translation": "новый",
            "filter": "знакомство"
        },
        {
            "id": 131,
            "word": "news",
            "partofspeech": "n",
            "translation": "новость",
            "filter": "знакомство"
        },
        {
            "id": 132,
            "word": "newspaper",
            "partofspeech": "n",
            "translation": "газета",
            "filter": "знакомство"
        },
        {
            "id": 133,
            "word": "nice to meet you",
            "partofspeech": "ph",
            "translation": "рад вас видеть",
            "filter": "знакомство"
        },
        {
            "id": 134,
            "word": "noisy",
            "partofspeech": "adj",
            "translation": "шумный",
            "filter": "знакомство"
        },
        {
            "id": 135,
            "word": "nothing",
            "partofspeech": "pron",
            "translation": "ничто, ничего",
            "filter": "знакомство"
        },
        {
            "id": 136,
            "word": "odd",
            "partofspeech": "adj",
            "translation": "странный",
            "filter": "знакомство"
        },
        {
            "id": 137,
            "word": "often",
            "partofspeech": "adv",
            "translation": "часто",
            "filter": "знакомство"
        },
        {
            "id": 138,
            "word": "only",
            "partofspeech": "adj",
            "translation": "единственный",
            "example": "Are you an only child in your family? Ты единственный ребенок в семье?",
            "filter": "знакомство"
        },
        {
            "id": 139,
            "word": "orange",
            "partofspeech": "adj",
            "translation": "оранжевый",
            "filter": "знакомство"
        },
        {
            "id": 140,
            "word": "other",
            "partofspeech": "adj",
            "translation": "другой",
            "filter": "знакомство"
        },
        {
            "id": 141,
            "word": "out",
            "partofspeech": "adv",
            "translation": "вне, снаружи, наружу",
            "example": "He left the bicycle out. Он оставил велосипед на улице.",
            "filter": "знакомство"
        },
        {
            "id": 142,
            "word": "parent",
            "partofspeech": "n",
            "translation": "родитель",
            "example": "When were your parents born? Когда день рождение твоих родителей?",
            "filter": "знакомство"
        },
        {
            "id": 143,
            "word": "part-time student",
            "partofspeech": "ph",
            "translation": "студент-вечерник",
            "filter": "знакомство"
        },
        {
            "id": 144,
            "word": "people",
            "partofspeech": "n",
            "translation": "люди",
            "filter": "знакомство"
        },
        {
            "id": 145,
            "word": "person",
            "partofspeech": "n",
            "translation": "человек",
            "filter": "знакомство"
        },
        {
            "id": 146,
            "word": "personal question",
            "partofspeech": "ph",
            "translation": "личный вопрос",
            "filter": "знакомство"
        },
        {
            "id": 147,
            "word": "pet",
            "partofspeech": "n",
            "translation": "домашний питомец",
            "filter": "знакомство"
        },
        {
            "id": 148,
            "word": "pineapple",
            "partofspeech": "n",
            "translation": "ананас",
            "filter": "знакомство"
        },
        {
            "id": 149,
            "word": "pink",
            "partofspeech": "adj",
            "translation": "розовый",
            "filter": "знакомство"
        },
        {
            "id": 150,
            "word": "place",
            "partofspeech": "n",
            "translation": "место",
            "filter": "знакомство"
        },
        {
            "id": 151,
            "word": "positive",
            "partofspeech": "adj",
            "translation": "позитивный",
            "filter": "знакомство"
        },
        {
            "id": 152,
            "word": "pro football",
            "partofspeech": "n",
            "translation": "профессиональный футбол",
            "filter": "знакомство"
        },
        {
            "id": 153,
            "word": "problems",
            "partofspeech": "n",
            "translation": "проблемы",
            "filter": "знакомство"
        },
        {
            "id": 154,
            "word": "purple",
            "partofspeech": "adj",
            "translation": "фиолетовый",
            "filter": "знакомство"
        },
        {
            "id": 155,
            "word": "question",
            "partofspeech": "n",
            "translation": "вопрос",
            "filter": "знакомство"
        },
        {
            "id": 156,
            "word": "read",
            "partofspeech": "v",
            "translation": "читать",
            "filter": "знакомство"
        },
        {
            "id": 157,
            "word": "ready",
            "partofspeech": "adj",
            "translation": "готовый",
            "filter": "знакомство"
        },
        {
            "id": 158,
            "word": "red",
            "partofspeech": "adj",
            "translation": "красный, рыжий",
            "filter": "знакомство"
        },
        {
            "id": 159,
            "word": "relaxed",
            "partofspeech": "adj",
            "translation": "расслабленный",
            "filter": "знакомство"
        },
        {
            "id": 160,
            "word": "response",
            "partofspeech": "n",
            "translation": "ответ, отклик, реакция",
            "example": "what is their response? Какой их ответ?",
            "filter": "знакомство"
        },
        {
            "id": 161,
            "word": "review",
            "partofspeech": "n",
            "translation": "обзор",
            "filter": "знакомство"
        },
        {
            "id": 162,
            "word": "rice",
            "partofspeech": "n",
            "translation": "рис",
            "filter": "знакомство"
        },
        {
            "id": 163,
            "word": "salary",
            "partofspeech": "n",
            "translation": "заработная плата",
            "filter": "знакомство"
        },
        {
            "id": 164,
            "word": "same",
            "partofspeech": "adj",
            "translation": "тот же самый, одинаковый",
            "filter": "знакомство"
        },
        {
            "id": 165,
            "word": "scene",
            "partofspeech": "n",
            "translation": "сцена",
            "filter": "знакомство"
        },
        {
            "id": 166,
            "word": "sentence",
            "partofspeech": "n",
            "translation": "предложение",
            "example": "I didn't understand the last sentence. Я не понял последнее предложение.",
            "filter": "знакомство"
        },
        {
            "id": 167,
            "word": "shopping",
            "partofspeech": "n",
            "translation": "покупки",
            "example": "to do shopping - делать покупки.",
            "filter": "знакомство"
        },
        {
            "id": 168,
            "word": "sience fiction",
            "partofspeech": "n",
            "translation": "науная фантастика",
            "filter": "знакомство"
        },
        {
            "id": 169,
            "word": "sister",
            "partofspeech": "n",
            "translation": "сестра",
            "filter": "знакомство"
        },
        {
            "id": 170,
            "word": "skill",
            "partofspeech": "n",
            "translation": "навык, умение",
            "filter": "знакомство"
        },
        {
            "id": 171,
            "word": "skirt",
            "partofspeech": "n",
            "translation": "юбка",
            "filter": "знакомство"
        },
        {
            "id": 172,
            "word": "sleep",
            "partofspeech": "v",
            "translation": "спать",
            "filter": "знакомство"
        },
        {
            "id": 173,
            "word": "smile",
            "partofspeech": "n",
            "translation": "улыбка",
            "filter": "знакомство"
        },
        {
            "id": 174,
            "word": "soap opera",
            "partofspeech": "n",
            "translation": "мыльная опера",
            "filter": "знакомство"
        },
        {
            "id": 175,
            "word": "social life",
            "partofspeech": "ph",
            "translation": "социальная жизнь",
            "filter": "знакомство"
        },
        {
            "id": 176,
            "word": "something",
            "partofspeech": "pron",
            "translation": "(в утвержд) кто-нибудь, что-нибудь, какой-нибудь",
            "filter": "знакомство"
        },
        {
            "id": 177,
            "word": "sound",
            "partofspeech": "v",
            "translation": "звучать",
            "filter": "знакомство"
        },
        {
            "id": 178,
            "word": "sound rude",
            "partofspeech": "ph",
            "translation": "звучать грубо",
            "filter": "знакомство"
        },
        {
            "id": 179,
            "word": "spell",
            "partofspeech": "v",
            "translation": "говорить или писать слово по буквам",
            "example": "how do you spell your name? Как произносится Ваше имя по буквам?",
            "filter": "знакомство"
        },
        {
            "id": 180,
            "word": "sport",
            "partofspeech": "n",
            "translation": "спорт",
            "filter": "знакомство"
        },
        {
            "id": 181,
            "word": "sport",
            "partofspeech": "n",
            "translation": "спорт",
            "filter": "знакомство"
        },
        {
            "id": 182,
            "word": "start",
            "partofspeech": "v",
            "translation": "начинать",
            "filter": "знакомство"
        },
        {
            "id": 183,
            "word": "stranger",
            "partofspeech": "n",
            "translation": "незнакомец",
            "filter": "знакомство"
        },
        {
            "id": 184,
            "word": "study skills",
            "partofspeech": "ph",
            "translation": "изучать навыки",
            "filter": "знакомство"
        },
        {
            "id": 185,
            "word": "suggestion",
            "partofspeech": "n",
            "translation": "предложение",
            "filter": "знакомство"
        },
        {
            "id": 186,
            "word": "sure",
            "partofspeech": "adj",
            "translation": "уверенный",
            "filter": "знакомство"
        },
        {
            "id": 187,
            "word": "sweatshirt",
            "partofspeech": "n",
            "translation": "свитшот",
            "filter": "знакомство"
        },
        {
            "id": 188,
            "word": "take",
            "partofspeech": "v",
            "translation": "требовать, понадобиться",
            "example": "It will take a lot of time. Это займет много время.",
            "filter": "знакомство"
        },
        {
            "id": 189,
            "word": "talk",
            "partofspeech": "v",
            "translation": "говорить, разговаривать",
            "filter": "знакомство"
        },
        {
            "id": 190,
            "word": "talk about yourself",
            "partofspeech": "ph",
            "translation": "говорить о себе",
            "example": "Let me talk about myself. Позвольте мне рассказать о себе.",
            "filter": "знакомство"
        },
        {
            "id": 191,
            "word": "taste",
            "partofspeech": "n",
            "translation": "вкус",
            "filter": "знакомство"
        },
        {
            "id": 192,
            "word": "television",
            "partofspeech": "n",
            "translation": "телевизор, телевидение",
            "filter": "знакомство"
        },
        {
            "id": 193,
            "word": "thank",
            "partofspeech": "v",
            "translation": "благодарить",
            "filter": "знакомство"
        },
        {
            "id": 194,
            "word": "theatre",
            "partofspeech": "n",
            "translation": "театр",
            "filter": "знакомство"
        },
        {
            "id": 195,
            "word": "things around",
            "partofspeech": "ph",
            "translation": "вещи вокруг",
            "filter": "знакомство"
        },
        {
            "id": 196,
            "word": "tonight",
            "partofspeech": "adv",
            "translation": "сегодня вечером",
            "example": "What are you doing tonight? Что вы делаете сегодня вечером?",
            "filter": "знакомство"
        },
        {
            "id": 197,
            "word": "too",
            "partofspeech": "adv",
            "translation": "слишком",
            "example": "It's too early. Еще слишком рано.",
            "filter": "знакомство"
        },
        {
            "id": 198,
            "word": "topic",
            "partofspeech": "n",
            "translation": "тема",
            "filter": "знакомство"
        },
        {
            "id": 199,
            "word": "try",
            "partofspeech": "v",
            "translation": "пытаться, стараться",
            "filter": "знакомство"
        },
        {
            "id": 200,
            "word": "turn",
            "partofspeech": "n",
            "translation": "очередь",
            "example": "It's your turn now.",
            "filter": "знакомство"
        },
        {
            "id": 201,
            "word": "TV show",
            "partofspeech": "n",
            "translation": "телевизионное шоу",
            "filter": "знакомство"
        },
        {
            "id": 202,
            "word": "type of TV show",
            "partofspeech": "ph",
            "translation": "вид ТВ шоу",
            "filter": "знакомство"
        },
        {
            "id": 203,
            "word": "understand (understood understood)",
            "partofspeech": "v",
            "translation": "понимать",
            "example": "Do you understand me? Ты меня понимаешь?",
            "filter": "знакомство"
        },
        {
            "id": 204,
            "word": "want",
            "partofspeech": "v",
            "translation": "хотеть",
            "filter": "знакомство"
        },
        {
            "id": 205,
            "word": "warm",
            "partofspeech": "adj",
            "translation": "теплый",
            "filter": "знакомство"
        },
        {
            "id": 206,
            "word": "watch",
            "partofspeech": "v",
            "translation": "смотреть, наблюдать",
            "example": "Do you watch much television? Вы много смотрите телевизор?",
            "filter": "знакомство"
        },
        {
            "id": 207,
            "word": "way",
            "partofspeech": "n",
            "translation": "1) путь, 2) способ",
            "example": "There are two ways how to work out this sum. Существует два способа решения этой задачи.",
            "filter": "знакомство"
        },
        {
            "id": 208,
            "word": "weather",
            "partofspeech": "n",
            "translation": "погода",
            "example": "What is the weather like today? Какая сегодня погода?",
            "filter": "знакомство"
        },
        {
            "id": 209,
            "word": "weekend",
            "partofspeech": "n",
            "translation": "суббота и воскресенье",
            "filter": "знакомство"
        },
        {
            "id": 210,
            "word": "weekend activity",
            "partofspeech": "n",
            "translation": "занятия ыходного дня",
            "filter": "знакомство"
        },
        {
            "id": 211,
            "word": "western",
            "partofspeech": "n",
            "translation": "вестерн",
            "filter": "знакомство"
        },
        {
            "id": 212,
            "word": "what",
            "partofspeech": "pron",
            "translation": "что, какой, что за",
            "example": "What books do you like? Какие книги вам нравятся?",
            "filter": "знакомство"
        },
        {
            "id": 213,
            "word": "when",
            "partofspeech": "pron",
            "translation": "когда",
            "example": "When were your parents born? Когда день рождение твоих родителей?",
            "filter": "знакомство"
        },
        {
            "id": 214,
            "word": "where",
            "partofspeech": "adv",
            "translation": "где, куда",
            "example": "where do you live? Где ты живешь?",
            "filter": "знакомство"
        },
        {
            "id": 215,
            "word": "white",
            "partofspeech": "adj",
            "translation": "белый",
            "filter": "знакомство"
        },
        {
            "id": 216,
            "word": "work out",
            "partofspeech": "v",
            "translation": "разрабатывать, составлять, решать, качаться",
            "filter": "знакомство"
        },
        {
            "id": 217,
            "word": "yellow",
            "partofspeech": "adj",
            "translation": "желтый",
            "filter": "знакомство"
        },
        {
            "id": 218,
            "word": "yorgut",
            "partofspeech": "n",
            "translation": "йогурт",
            "filter": "знакомство"
        },
        {
            "id": 219,
            "word": "everybody",
            "partofspeech": "pron",
            "translation": "все, каждый",
            "filter": "интересы"
        },
        {
            "id": 220,
            "word": "nobody",
            "partofspeech": "pron",
            "translation": "никто",
            "filter": "интересы"
        },
        {
            "id": 221,
            "word": "anybody",
            "partofspeech": "pron",
            "translation": "любой, каждый",
            "filter": "интересы"
        },
        {
            "id": 222,
            "word": "hobby",
            "partofspeech": "n",
            "translation": "хобби, интерес",
            "filter": "интересы"
        },
        {
            "id": 223,
            "word": "really",
            "partofspeech": "adv",
            "translation": "действительно",
            "filter": "интересы"
        },
        {
            "id": 224,
            "word": "reporter",
            "partofspeech": "n",
            "translation": "репортер",
            "filter": "интересы"
        },
        {
            "id": 225,
            "word": "a bit of",
            "partofspeech": "adv",
            "translation": "немного",
            "filter": "интересы"
        },
        {
            "id": 226,
            "word": "creative",
            "partofspeech": "adj",
            "translation": "креативный, творческий",
            "example": "I like to do a bit of creative writing everyday. Каждый день я немного пишу (сочиняю)",
            "filter": "интересы"
        },
        {
            "id": 227,
            "word": "novel",
            "partofspeech": "n",
            "translation": "роман",
            "filter": "интересы"
        },
        {
            "id": 228,
            "word": "design",
            "partofspeech": "v",
            "translation": "конструировать, проектировать",
            "filter": "интересы"
        },
        {
            "id": 229,
            "word": "card",
            "partofspeech": "n",
            "translation": "карточка, открытка",
            "filter": "интересы"
        },
        {
            "id": 230,
            "word": "be good at",
            "partofspeech": "ph",
            "translation": "преуспевать в чем-нибудь",
            "example": "Are you good at sports? Ты имеешь успехи в спорте?",
            "filter": "интересы"
        },
        {
            "id": 231,
            "word": "drawing",
            "partofspeech": "n",
            "translation": "рисунок, чертеж",
            "filter": "интересы"
        },
        {
            "id": 232,
            "word": "be really into",
            "partofspeech": "ph",
            "translation": "нравиться, любить",
            "example": "I'm really into computer graphics. Мне очень нравится компьютерная графика.",
            "filter": "интересы"
        },
        {
            "id": 233,
            "word": "computer graphics",
            "partofspeech": "n",
            "translation": "компьютерная графика",
            "filter": "интересы"
        },
        {
            "id": 234,
            "word": "a little",
            "partofspeech": "adv",
            "translation": "немного",
            "filter": "интересы"
        },
        {
            "id": 235,
            "word": "well",
            "partofspeech": "adv",
            "translation": "хорошо",
            "filter": "интересы"
        },
        {
            "id": 236,
            "word": "sing",
            "partofspeech": "v",
            "translation": "петь",
            "filter": "интересы"
        },
        {
            "id": 237,
            "word": "at all",
            "partofspeech": "adv",
            "translation": "совсем, полностью",
            "filter": "интересы"
        },
        {
            "id": 238,
            "word": "prefer",
            "partofspeech": "v",
            "translation": "предпочитать",
            "filter": "интересы"
        },
        {
            "id": 239,
            "word": "play pool",
            "partofspeech": "ph",
            "translation": "играть в бильярд",
            "filter": "интересы"
        },
        {
            "id": 240,
            "word": "jog",
            "partofspeech": "v",
            "translation": "бегать трусцой",
            "filter": "интересы"
        },
        {
            "id": 241,
            "word": "occasionally",
            "partofspeech": "adv",
            "translation": "временами, иногда",
            "filter": "интересы"
        },
        {
            "id": 242,
            "word": "stuff",
            "partofspeech": "n",
            "translation": "материал, вещь, штука",
            "filter": "интересы"
        },
        {
            "id": 243,
            "word": "excited",
            "partofspeech": "adj",
            "translation": "взволнованный",
            "filter": "интересы"
        },
        {
            "id": 244,
            "word": "whistle",
            "partofspeech": "v",
            "translation": "свистеть",
            "filter": "интересы"
        },
        {
            "id": 245,
            "word": "skate",
            "partofspeech": "v",
            "translation": "кататься на коньках",
            "filter": "интересы"
        },
        {
            "id": 246,
            "word": "board games",
            "partofspeech": "n",
            "translation": "настольные игры",
            "filter": "интересы"
        },
        {
            "id": 247,
            "word": "swim",
            "partofspeech": "v",
            "translation": "плавать",
            "filter": "интересы"
        },
        {
            "id": 248,
            "word": "join",
            "partofspeech": "v",
            "translation": "присоединяться",
            "filter": "интересы"
        },
        {
            "id": 249,
            "word": "meditation class",
            "partofspeech": "n",
            "translation": "занятие по медитации",
            "filter": "интересы"
        },
        {
            "id": 250,
            "word": "exercise",
            "partofspeech": "v",
            "translation": "упражняться",
            "filter": "интересы"
        },
        {
            "id": 251,
            "word": "martial arts",
            "partofspeech": "n",
            "translation": "боевые виды искусства",
            "filter": "интересы"
        },
        {
            "id": 252,
            "word": "dancer",
            "partofspeech": "n",
            "translation": "танцор",
            "filter": "интересы"
        },
        {
            "id": 253,
            "word": "poetry",
            "partofspeech": "n",
            "translation": "поэзия",
            "filter": "интересы"
        },
        {
            "id": 254,
            "word": "driving",
            "partofspeech": "n",
            "translation": "вождение",
            "filter": "интересы"
        },
        {
            "id": 255,
            "word": "ride a horse",
            "partofspeech": "ph",
            "translation": "кататься на лошади",
            "filter": "интересы"
        },
        {
            "id": 256,
            "word": "language",
            "partofspeech": "n",
            "translation": "язык",
            "filter": "интересы"
        },
        {
            "id": 257,
            "word": "take guitar lessons",
            "partofspeech": "ph",
            "translation": "брать уроки гитары",
            "filter": "интересы"
        },
        {
            "id": 258,
            "word": "leisure",
            "partofspeech": "n",
            "translation": "досуг",
            "filter": "интересы"
        },
        {
            "id": 259,
            "word": "care",
            "partofspeech": "v",
            "translation": "заботиться, думать",
            "example": "I don't care for classical music. Мне безразлична классическая музыка.",
            "filter": "интересы"
        },
        {
            "id": 260,
            "word": "primary education",
            "partofspeech": "ph",
            "translation": "начальное образование",
            "filter": "образование"
        },
        {
            "id": 261,
            "word": "secondary education",
            "partofspeech": "ph",
            "translation": "среднее образование",
            "filter": "образование"
        },
        {
            "id": 262,
            "word": "higher education",
            "partofspeech": "ph",
            "translation": "высшее образование",
            "filter": "образование"
        },
        {
            "id": 263,
            "word": "to enter",
            "partofspeech": "v",
            "translation": "поступать (в вуз)",
            "example": "What university have you entered? В какой университет вы поступили?",
            "filter": "образование"
        },
        {
            "id": 264,
            "word": "entrance",
            "partofspeech": "n",
            "translation": "поступление",
            "filter": "образование"
        },
        {
            "id": 265,
            "word": "subject",
            "partofspeech": "n",
            "translation": "предмет",
            "example": "What subjects do you like? Какие предметы тебе нравятся?",
            "filter": "образование"
        },
        {
            "id": 266,
            "word": "to attend",
            "partofspeech": "v",
            "translation": "посещать",
            "filter": "образование"
        },
        {
            "id": 267,
            "word": "to pass an examination",
            "partofspeech": "ph",
            "translation": "сдать экзамен",
            "filter": "образование"
        },
        {
            "id": 268,
            "word": "to fail an examination",
            "partofspeech": "ph",
            "translation": "не выдержать экзамен",
            "filter": "образование"
        },
        {
            "id": 269,
            "word": "course",
            "partofspeech": "n",
            "translation": "курс (лекций)",
            "filter": "образование"
        },
        {
            "id": 270,
            "word": "graduation",
            "partofspeech": "n",
            "translation": "окончание вуза",
            "filter": "образование"
        },
        {
            "id": 271,
            "word": "to graduate from",
            "partofspeech": "v",
            "translation": "окончить вуз",
            "example": "I will graduate from the university next year. Я закончу университет в следующем году",
            "filter": "образование"
        },
        {
            "id": 272,
            "word": "field",
            "partofspeech": "n",
            "translation": "область,сфера деятельности",
            "filter": "образование"
        },
        {
            "id": 273,
            "word": "knowledge",
            "partofspeech": "n",
            "translation": "знания",
            "filter": "образование"
        },
        {
            "id": 274,
            "word": "railway",
            "partofspeech": "n",
            "translation": "железная дорога",
            "filter": "транспорт"
        },
        {
            "id": 275,
            "word": "to drive",
            "partofspeech": "v",
            "translation": "водить",
            "filter": "транспорт"
        },
        {
            "id": 276,
            "word": "steam",
            "partofspeech": "n",
            "translation": "пар",
            "filter": "транспорт"
        },
        {
            "id": 277,
            "word": "to burn",
            "partofspeech": "v",
            "translation": "гореть,сжигать",
            "filter": "транспорт"
        },
        {
            "id": 278,
            "word": "coal",
            "partofspeech": "n",
            "translation": "уголь",
            "filter": "транспорт"
        },
        {
            "id": 279,
            "word": "level",
            "partofspeech": "n",
            "translation": "уровень",
            "filter": "транспорт"
        },
        {
            "id": 280,
            "word": "tube",
            "partofspeech": "n",
            "translation": "труба, метро",
            "filter": "транспорт"
        },
        {
            "id": 281,
            "word": "to tunnel",
            "partofspeech": "v",
            "translation": "прокладывать туннель",
            "filter": "транспорт"
        },
        {
            "id": 282,
            "word": "traffic",
            "partofspeech": "n",
            "translation": "транспорт, движение",
            "filter": "транспорт"
        },
        {
            "id": 283,
            "word": "to move",
            "partofspeech": "v",
            "translation": "двигаться",
            "filter": "транспорт"
        },
        {
            "id": 284,
            "word": "speed",
            "partofspeech": "n",
            "translation": "скорость",
            "filter": "транспорт"
        },
        {
            "id": 285,
            "word": "safety",
            "partofspeech": "n",
            "translation": "безопасность",
            "filter": "транспорт"
        },
        {
            "id": 286,
            "word": "accident",
            "partofspeech": "n",
            "translation": "несчастный случай",
            "filter": "транспорт"
        },
        {
            "id": 287,
            "word": "to test",
            "partofspeech": "v",
            "translation": "проверять, испытывать",
            "filter": "транспорт"
        },
        {
            "id": 288,
            "word": "to maintain",
            "partofspeech": "v",
            "translation": "осуществлять тех.обслуживание",
            "filter": "транспорт"
        },
        {
            "id": 289,
            "word": "science",
            "partofspeech": "n",
            "translation": "наука",
            "filter": "наука"
        },
        {
            "id": 290,
            "word": "discovery",
            "partofspeech": "n",
            "translation": "открытие",
            "filter": "наука"
        },
        {
            "id": 291,
            "word": "to discover",
            "partofspeech": "v",
            "translation": "открывать",
            "filter": "наука"
        },
        {
            "id": 292,
            "word": "research",
            "partofspeech": "n",
            "translation": "исследование",
            "filter": "наука"
        },
        {
            "id": 293,
            "word": "substance",
            "partofspeech": "n",
            "translation": "вещество",
            "filter": "наука"
        },
        {
            "id": 294,
            "word": "to split",
            "partofspeech": "v",
            "translation": "объяснение",
            "filter": "наука"
        },
        {
            "id": 295,
            "word": "explanation",
            "partofspeech": "n",
            "translation": "свойство",
            "filter": "наука"
        },
        {
            "id": 296,
            "word": "property",
            "partofspeech": "n",
            "translation": "имущество",
            "filter": "наука"
        },
        {
            "id": 297,
            "word": "nuclear",
            "partofspeech": "adj",
            "translation": "ядерный",
            "filter": "наука"
        },
        {
            "id": 298,
            "word": "channel",
            "partofspeech": "n",
            "translation": "канал,пролив",
            "filter": "транспорт"
        },
        {
            "id": 299,
            "word": "branch",
            "partofspeech": "n",
            "translation": "ветвь, ветка",
            "filter": "транспорт"
        },
        {
            "id": 300,
            "word": "route",
            "partofspeech": "n",
            "translation": "маршрут",
            "filter": "транспорт"
        },
        {
            "id": 301,
            "word": "cold",
            "partofspeech": "adj",
            "translation": "холодный/холодно",
            "filter": "погода"
        },
        {
            "id": 302,
            "word": "hot",
            "partofspeech": "adj",
            "translation": "жаркий/жарко",
            "filter": "погода"
        },
        {
            "id": 303,
            "word": "chilly",
            "partofspeech": "adj",
            "translation": "прохладный/прохладно",
            "filter": "погода"
        },
        {
            "id": 304,
            "word": "cool",
            "partofspeech": "adj",
            "translation": "прохладный/прохладно",
            "filter": "погода"
        },
        {
            "id": 305,
            "word": "warm",
            "partofspeech": "adj",
            "translation": "теплый/тепло",
            "filter": "погода"
        },
        {
            "id": 306,
            "word": "dry",
            "partofspeech": "adj",
            "translation": "сухой/сухо",
            "filter": "погода"
        },
        {
            "id": 307,
            "word": "wet",
            "partofspeech": "adj",
            "translation": "влажный/влажно",
            "filter": "погода"
        },
        {
            "id": 308,
            "word": "frosty",
            "partofspeech": "adj",
            "translation": "морозный/морозно",
            "filter": "погода"
        },
        {
            "id": 309,
            "word": "snowy",
            "partofspeech": "adj",
            "translation": "снежный/снежно",
            "filter": "погода"
        },
        {
            "id": 310,
            "word": "windy",
            "partofspeech": "adj",
            "translation": "ветренный/ветренно",
            "filter": "погода"
        },
        {
            "id": 311,
            "word": "cloudy",
            "partofspeech": "adj",
            "translation": "облачный/облачно",
            "filter": "погода"
        },
        {
            "id": 312,
            "word": "sunny",
            "partofspeech": "adj",
            "translation": "солнечный/солнечно",
            "filter": "погода"
        },
        {
            "id": 313,
            "word": "average",
            "partofspeech": "adj",
            "translation": "средний",
            "filter": "температура"
        },
        {
            "id": 314,
            "word": "terrible",
            "partofspeech": "adj",
            "translation": "ужасный",
            "filter": "погода"
        },
        {
            "id": 315,
            "word": "severe",
            "partofspeech": "adj",
            "translation": "суровый",
            "filter": "погода"
        },
        {
            "id": 316,
            "word": "stuffy",
            "partofspeech": "adj",
            "translation": "душный/душно",
            "filter": "погода"
        },
        {
            "id": 317,
            "word": "constant",
            "partofspeech": "adj",
            "translation": "постоянный",
            "filter": "температура"
        },
        {
            "id": 318,
            "word": "picturesque",
            "partofspeech": "adj",
            "translation": "живописный",
            "filter": "природа"
        },
        {
            "id": 319,
            "word": "wild",
            "partofspeech": "adj",
            "translation": "дикий",
            "filter": "природа"
        },
        {
            "id": 320,
            "word": "young",
            "partofspeech": "adj",
            "translation": "молодой",
            "filter": "возраст"
        },
        {
            "id": 321,
            "word": "middle-aged",
            "partofspeech": "adj",
            "translation": "среднего возраста",
            "filter": "возраст"
        },
        {
            "id": 322,
            "word": "elderly",
            "partofspeech": "adj",
            "translation": "пожилой",
            "filter": "возраст"
        },
        {
            "id": 323,
            "word": "old",
            "partofspeech": "adj",
            "translation": "старый",
            "filter": "возраст"
        },
        {
            "id": 324,
            "word": "fat",
            "partofspeech": "adj",
            "translation": "полный",
            "filter": "внешность"
        },
        {
            "id": 325,
            "word": "thin",
            "partofspeech": "adj",
            "translation": "худой",
            "filter": "внешность"
        },
        {
            "id": 326,
            "word": "slim",
            "partofspeech": "adj",
            "translation": "стройный",
            "filter": "внешность"
        },
        {
            "id": 327,
            "word": "skinny",
            "partofspeech": "adj",
            "translation": "тощий",
            "filter": "внешность"
        },
        {
            "id": 328,
            "word": "pale",
            "partofspeech": "adj",
            "translation": "бледный",
            "filter": "внешность"
        },
        {
            "id": 329,
            "word": "beautiful",
            "partofspeech": "adj",
            "translation": "красивый(о женщинах)",
            "filter": "внешность"
        },
        {
            "id": 330,
            "word": "nice",
            "partofspeech": "adj",
            "translation": "милый",
            "filter": "внешность"
        },
        {
            "id": 331,
            "word": "pretty",
            "partofspeech": "adj",
            "translation": "симпатичный",
            "filter": "внешность"
        },
        {
            "id": 332,
            "word": "tall",
            "partofspeech": "adj",
            "translation": "высокий",
            "filter": "внешность"
        },
        {
            "id": 333,
            "word": "red-haired",
            "partofspeech": "adj",
            "translation": "рыжеволосый",
            "filter": "внешность"
        },
        {
            "id": 334,
            "word": "blond",
            "partofspeech": "adj",
            "translation": "блондин(ка)",
            "filter": "внешность"
        },
        {
            "id": 335,
            "word": "wavy",
            "partofspeech": "adj",
            "translation": "волнистые (волосы)",
            "filter": "внешность"
        },
        {
            "id": 336,
            "word": "straight",
            "partofspeech": "adj",
            "translation": "прямые (волосы)",
            "filter": "внешность"
        },
        {
            "id": 337,
            "word": "bald",
            "partofspeech": "adj",
            "translation": "лысый",
            "filter": "внешность"
        },
        {
            "id": 338,
            "word": "freckled",
            "partofspeech": "adj",
            "translation": "веснушчатый",
            "filter": "внешность"
        },
        {
            "id": 339,
            "word": "tanned",
            "partofspeech": "adj",
            "translation": "загорелый",
            "filter": "внешность"
        },
        {
            "id": 340,
            "word": "good-looking",
            "partofspeech": "adj",
            "translation": "симпатичный",
            "filter": "внешность"
        },
        {
            "id": 341,
            "word": "handsome",
            "partofspeech": "adj",
            "translation": "красивый (о мужчинах)",
            "filter": "внешность"
        },
        {
            "id": 342,
            "word": "admire",
            "partofspeech": "v",
            "translation": "восхищаться",
            "filter": "эмоции"
        },
        {
            "id": 343,
            "word": "adore",
            "partofspeech": "v",
            "translation": "обожать",
            "filter": "эмоции"
        },
        {
            "id": 344,
            "word": "annoy",
            "partofspeech": "v",
            "translation": "раздражать",
            "filter": "эмоции"
        },
        {
            "id": 345,
            "word": "believe",
            "partofspeech": "v",
            "translation": "верить",
            "filter": "эмоции"
        },
        {
            "id": 346,
            "word": "cry",
            "partofspeech": "v",
            "translation": "плакать",
            "filter": "эмоции"
        },
        {
            "id": 347,
            "word": "enjoy",
            "partofspeech": "v",
            "translation": "наслаждаться",
            "filter": "эмоции"
        },
        {
            "id": 348,
            "word": "feel",
            "partofspeech": "v",
            "translation": "чувствовать",
            "filter": "эмоции"
        },
        {
            "id": 349,
            "word": "forgive",
            "partofspeech": "v",
            "translation": "прощать",
            "filter": "эмоции"
        },
        {
            "id": 350,
            "word": "hate",
            "partofspeech": "v",
            "translation": "ненавидеть",
            "filter": "эмоции"
        },
        {
            "id": 351,
            "word": "help",
            "partofspeech": "v",
            "translation": "помогать",
            "filter": "эмоции"
        },
        {
            "id": 352,
            "word": "hope",
            "partofspeech": "v",
            "translation": "надеяться",
            "filter": "эмоции"
        },
        {
            "id": 353,
            "word": "hug",
            "partofspeech": "v",
            "translation": "обнимать",
            "filter": "эмоции"
        },
        {
            "id": 354,
            "word": "irritate",
            "partofspeech": "v",
            "translation": "раздражать",
            "filter": "эмоции"
        },
        {
            "id": 355,
            "word": "mind",
            "partofspeech": "v",
            "translation": "возражать",
            "filter": "эмоции"
        },
        {
            "id": 356,
            "word": "persuade",
            "partofspeech": "v",
            "translation": "убеждать",
            "filter": "эмоции"
        },
        {
            "id": 357,
            "word": "satisfy",
            "partofspeech": "v",
            "translation": "удовлетворять",
            "filter": "эмоции"
        },
        {
            "id": 358,
            "word": "smile",
            "partofspeech": "v",
            "translation": "улыбаться",
            "filter": "эмоции"
        },
        {
            "id": 359,
            "word": "support",
            "partofspeech": "v",
            "translation": "поддерживать",
            "filter": "эмоции"
        },
        {
            "id": 360,
            "word": "wish",
            "partofspeech": "v",
            "translation": "желать",
            "filter": "эмоции"
        }
    ]

}