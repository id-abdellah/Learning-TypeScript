/*
    Type annotation with objects
*/


let personInformations: {
    // باش تكون للقراءة فقط وغير قابلة للتغيير readonly يمكن ليك دير لاي خاصية
    readonly username: string,
    age: number,
    isHire: boolean,
    // tpye of nested obj يمكن ليك دير تا
    skills: {
        first: string,
        second: string,
        three: [number, string, boolean]
    }
    // فاي تاهنا باش لبغيتي دير هاد الخاصية ديرها مبغيتيش بلاش optional symbole يمكن ليك تستعمل ال
    // و متبتيش الخاصية فراه غينبهك optional حيت لمدرتيش ال
    currentStatus?: string
} = {
    username: "mohamed",
    age: 29,
    isHire: true,
    skills: {
        first: "Html",
        second: "Javascript",
        three: [100, "a", false]
    },
};