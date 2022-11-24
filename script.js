function test(ch) 
{ let nbrwords=1
let nbrvow=0
for (let i=0 ; i< ch.length;i++){
    if(ch[i]==" "){
    nbrwords ++
}
 if (ch[i]=="a"||ch[i]=="i"||ch[i]=="o"||ch[i]=="e"||ch[i]=="y"||ch[i]=="u"||ch[i]=="A"||ch[i]=="I"||ch[i]=="O"||ch[i]=="E"||ch[i]=="Y"||ch[i]=="U"){
     nbrvow++
 }
 }
  console.log("number of vowels is"+ nbrvow)
     console.log("number of words is"+ nbrwords)
         console.log("length of the sentence is"+ ch.length) 
         
    }
    test("hello myworld")

