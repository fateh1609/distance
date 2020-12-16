class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountref= await database.ref("playerCount").once("value");
      if(playerCountref.exists()){
        playerCount=playerCountref.val();
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("START",50,50);
    Player.getPlayerInfo();

    if(allPlayers!== undefined){
      var display_position=130;
      for(var plr in allPlayers){

        if(plr==="player"+player.index){
         fill("blue");
        }
         else{
           fill("red");
         }
        

      }
      display_position=display_position+50;
      text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display_position);
    }
    
if(keyIsDown(UP_ARROW) && player.index!==null){
player.distance=player.distance+100;
player.update();

}
  }
}
