// 1章
// var hello = "Hello World";
// alert(hello);


// 2章
// alert(4 + 3);

// var str1 = 'Hello';
// var str2 = 'World!!!';
// alert(str1 + str2);

// var orange = 100;
// var apple = 120;

// if(orange < apple){
//   alert("みかんの値段がりんごより安い");
// } else if(orange == apple){
//   alert("みかんとりんごが同じ値段");
// } else{
//   alert("みかんの値段がりんごより高い");
// }

// var max = 100;
// var num = 1;
// var count = 0;

// while(num < max){
//   num = num*2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// do{
//   最低１回は行われる処理
// }while(条件式);

// var i;
// var num = 0;

// for(i=1; i<11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// ３章
// メイン部分
// var alertString;
// alertString = addString("WebCamp");

// 作成した関数を呼び出す
// alert(alertString);

// 作成した関数
//function addString(strA){
//   var addStr = "Hello" + strA;
//   return addStr;
// }

// 入力ダイアログ
// var promptStr = prompt('何か好きな文字を入力してください。');
// alert(promptStr);

// じゃんけんの手を入力してもらうプロンプト欄を生成
var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
// じゃんけんの手をランダムに作成する関数を呼び出す
var js_hand = getJShand();
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
var judge = WinLose(user_hand, js_hand);
// 結果を表示する
alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  var js_hand_num = Math.floor(Math.random()*3);
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function WinLose(user,js){
  var WinLoseStr,

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}