دبا درنا هاد ال command باش يكون عندنا tsconfig.json

    tsc --init

دبا فكرة ال src and dist وهو بحال المثال ديال ال sass وهي ان ال browser مكيتعاملش مع ال sass و انما معا ال css file لي غيخرج من ال sass

ومنه نفس الحاجة مع ال typscriptes files

ف كدير ملف src دير فيه السورس كود. ودير ملف dist لي غيتحط فيه ملف ال js اولا css من بعد عملية ال compilation

بالنسبة ل tsconfig فيه configurations خاصة بال typescript. و منها rootDir اي الملف لي غتكتب منو ts و كونفيك ديال outDir ولي هو ال dist لي غيدير فيه الاكواد من بعد ال compalition

من بعد كدير هاد ال command لي غيخدم على اساس دوك ال config ويبدا compile

    tsc -w

