/*
    Generics

        - It helps to write reusable code
        - Allow to pass type as a parameter to another type
        - You will be able to deal with multiple types without using ":any"
        - we can creat generics with:
            Classes
            Function
            Methods
            Interfaces
*/

// generics اولا نبداو بالمشكل لي كيحل هاد ال

// معينة data type ولي كل وحدة كترجع لينا functions نعتابرو عندنا هاد ال

function returnString(val: string): string {
    return val
}

function returnNumber(val: number): number {
    return val
}

function returnboolean(val: boolean): boolean {
    return val
}

// مكنتيش مصرح بيها قبل data type من هادو ولقيتي راسك خاصك ترجع function ونفتارضو جيتي من بعد ستدعيتي شي
// لي بغيتي ترجعو type باش ضيف ال union type ف لي غيجي فبالك انك غترجع للفانكش ودير
// او الديناميكية فالكود reusable code ولكن هاد الفكرة كتقتل فكرة ال




// لي بغيتي فلحظة الاستدعاء type ولي كتمكنك انك دير نوع ال generics فلهاذا كاينة ال
// functions لل call فاللحظة لي كدير فيها type بمعنى اخر انك كتحدد ال
// كتحط قيمتو من بعد param هو generic ال

function returnAnyType<genericType>(val: genericType): genericType {
    return val
}

console.log(returnAnyType(100));
console.log(returnAnyType("string"));
console.log(returnAnyType(true));
console.log(returnAnyType([1, 2, 3, 4])); // اوتو type و ايضا بلا تدخل منك كيحط ليك ال قيمة ديال