// let hello = 'Hello World';
// alert(hello);

// let int1 = 1;
// alert(int1);

// alert(4 + 3);

// alert('Hello' + 'World');

// let str1 = 'Hello'
// let str2 = 'World!!'
// alert(str1 + str2);

// let orange = 100;
// let apple = 120;

// if(orange < apple){
//   alert('みかんの値段がリンゴより安い');
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段');
// } else{
//   alert('みかんの値段がリンゴより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num *= 2;
//   count += 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');

// let int1 = 2 + 7;
// alert('2+7=' + int1);

// let int2 = 7 - 2;
// alert('7-2=' + int2);

// let int3 = 2 * 7;
// alert('2*7=' + int3);

// let int4 = 7 / 2;
// alert('7/2=' + int4);


//メイン部分
// let alertString;
// alertString = addString("WebCamp");

// //作成した関数を呼び出す
// alert(alertString);

// //作成した関数
// function addString(strA){
//   let addStr = "Hello" + strA;
//   return addStr;
// }

// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// alert ('あなたの選んだ手は' + user_hand + 'です。');

// function getJShand(){
//   let js_hand_num = Math.floor(Math.random()*3);

//   if(js_hand_num == 0){
//     js_hand = 'グー';
//   } else if(js_hand_num == 1){
//     js_hand = 'チョキ';
//   } else if(js_hand_num == 2){
//     js_hand = 'パー';
//   }

//   return js_hand;
// }

let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
  while((user_hand != "グー") && (user_hand != "チョキ") &&　(user_hand != "パー") &&　(user_hand != null)){
    alert("グー・チョキ・パーのいずれかを入力してください");
    user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
  }

let js_hand = getJShand();

let judge = WinLose(user_hand, js_hand);

if(user_hand != null){
  alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function WinLose(user,js){
  let WinLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      WinLoseStr = "あいこ";
    } else if(js == "チョキ"){
      WinLoseStr = "勝ち";
    } else if(js == "パー"){
      WinLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      WinLoseStr = "負け";
    } else if(js == "チョキ"){
      WinLoseStr = "あいこ";
    } else if(js == "パー"){
      WinLoseStr = "勝ち";
    }
  }　else if(user == "パー"){
    if(js == "グー"){
      WinLoseStr = "勝ち";
    } else if(js == "チョキ"){
      WinLoseStr = "負け";
    } else if(js == "パー"){
      WinLoseStr = "あいこ";
    }
  }

  return WinLoseStr;
}