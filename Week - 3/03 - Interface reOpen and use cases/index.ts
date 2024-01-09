/*
    Interface

        interface reOpen and use cases
*/

// interface وهي انك كتكون عرفتي ديجا شي interface لشي reOpen فكرة ال
// جديدة ف كتفتحو وكضيف ليه ليبغيتي property وكتجي من بعد كتبغي ضيف ليه

// وكنضيفو فيه شي حاجة جديدة settings interface وانما كنعاودو نفتحو ال extend المثال التحت مكنديروش


// home page
interface Settings {
    darkTheme: boolean,
    font: string
}

// articles page
interface Settings {
    sidebar: boolean
}

// contact page
interface Settings {
    sendButton: boolean
}


let userSettings: Settings = {
    darkTheme: false,
    font: "Helvetica",
    sidebar: false,
    sendButton: true
}