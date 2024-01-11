/*
    Class
        Polymorphism & method override

        - polymorphism
            Classes have the same methods but different implementations

        - methods override
            Allowing child class to provide implementation of a method in parent class
            A method in child class must have same name as parent class


        - tsconfit feature
            noImplicitOverride
*/

// هو تعدد الاوجه polymorphism ال
// كدير حاجة مختلفة method هاد ال class لكن فكل method فيهم نفس ال class اي مثلا عندنا شحال من



// مثال واقعي
// مثلا عندنا مجموعة من الناس كيديرو فعل الاكل
// هالي كياكل بيدو و هالي كياكل بمعلقة و هالي كدير فمو فالزلافة باش يشرب الحريرة
// كلهم كيديرو فعل الاكل ولكن كل واحد و طريقتو
// اي تعدد الاوجه polymorphism هدا هو ال



// gaming بمثال من عالم ال polymorphism غنطبقو هاد ال

// base class named Player دبا عندنا
// attack method فيه سمية اللاعب و
// وكدير تاهي الهجوم ولكن بطريقة مختلفة player class ولي هي شخصية كتورث من ال amazon وعندنا
// barbarian نفس الحاجة لل
// وهادي هي فكرة تعدد الاوجه



// method override دبا ندويو على

// noImplicitOverride دبا قبل متفعل داك ال
// مغينبهك موالو حت غيعتابر دوك الطرق منفاصلين attack in base class ومشيتي بدلتي سميت ال
// polymorphism ولكن بهذا كتكون خرجتي على مفهوم ال

// فالكلاس الاب غينبهك method ولكن فاش كتفعلو وكتبدل سمية ال
// base class لي فال attack على ال override كدير derive classes لي فال attack غيقولك بلي ال
// override keyword لهذا خاصك ضيف

class Player {
    constructor(public playerName: string) { }
    attack(): void {
        console.log("Player Attacking now")
    }
}

class AmazonCharacter extends Player {
    constructor(playerName: string, public spears: number) {
        super(playerName)
    }

    // غينبهك دبا base class فال attack الا بدلتي سمية override keyword ودبا فاش درتي
    // declared in the base class وهي اصلا ماشي override keyword وغيقولك بلي علاش درتي لهاذي
    override attack(): void {
        // super.attack()
        console.log("Attacking with spears")
        this.spears -= 1;
    }
}

class BarbarianCharacter extends Player {
    constructor(playerName: string, public axeDurabillity: number) {
        super(playerName)
    }
    override attack(): void {
        // super.attack()
        console.log("Attacking with axe")
        this.axeDurabillity -= 1;
    }
}


let barOne = new BarbarianCharacter("Obito", 100);

console.log(barOne.playerName); // Obito
console.log(barOne.axeDurabillity); // 100
barOne.attack(); // Attacking with axe
barOne.attack(); // Attacking with axe
barOne.attack(); // Attacking with axe
console.log(barOne.axeDurabillity); // 97