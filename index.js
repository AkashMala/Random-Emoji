const btnE1=document.getElementById("btn");
const emojiNameE1=document.getElementById("emoji-name");

const emoji=[];
async function getEmoji(){
    let response = await fetch("https://emoji-api.com/emojis?access_key=50b910dfe95bcfedce7252588b9fce9f06e30439");
data=await response.json()

console.log(data);
 for(let i=0; i<1500; i++){
    emoji.push({
       
        
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
    });
 }
}
 getEmoji();

btnE1.addEventListener("click",() => {
    // const randomNum=Math.random();
  
    
    
    const randomNum = Math.floor(Math.random() * emoji.length);
   
    btnE1.innerText=emoji[randomNum].emojiName;
    emojiNameE1.innerText=emoji[randomNum].emojiCode;
})