player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player_1;
document.getElementById("player2_name").innerHTML = player_2;

player1_score = 0;
player2_score = 0;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question Turn :  "+ player_1;
document.getElementById("player_answer").innerHTML = "answer Turn :  "+ player_2;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charat1 = word.charAt(1);
    console.log(charat1);

    middle_number = Math.floor(word.length/2);
    middle_word = word.charAt(middle_number);
    console.log(middle_word);

    second_last_number = word.length - 1;
second_last_word = word.charAt(second_last_number);
    console.log(second_last_word);

    remove_1 = word.replace(charat1,"_");
    remove_2 = remove_1.replace(middle_word,"_");
    remove_3 = remove_2.replace(second_last_word,"_");

    question_word = "<h4 id='word_display' > Q:" + remove_3 +  "</h4>"
    input_box = "<br><input type='text' id='input_check_box'>"
    button_check ="<br><button class='btn btn-info' onclick='check()'> check </button>" 
     row = question_word+input_box + button_check;
document.getElementById("output").innerHTML = row ;
document.getElementById("word").value ="";
}

question_turn = player_1 ;
answer_turn = player_2 ;

function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();

    if(answer == word)
    {
        if(answer_turn == player_1)
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;   
        }
    }
    if(question_turn == player_1)
    {
        question_turn = player_2;
        document.getElementById("player_question").innerHTML = "question Turn :  "+ player_2;
    }
    else
    {
        question_turn = player_1;
        document.getElementById("player_question").innerHTML = "question Turn :  "+ player_1;    
    }
    if(answer_turn == player_1)
    {
        answer_turn = player_2;
        document.getElementById("player_answer").innerHTML = "answer Turn :  "+ player_2;
    }
    else
    {
        answer_turn = player_1;
        document.getElementById("player_answer").innerHTML = "answer_turn :  "+ player_1;    
    }

    document.getElementById("output").innerHTML = "";
}
