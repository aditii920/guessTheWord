function addUser(){
    player_1 =document.getElementById("player1_input").value;
    player_2 =document.getElementById("player2_input").value;

    localStorage.setItem("player1_name",player_1);
    localStorage.setItem("player2_name",player_2);

    window.location="game_page.html";
}