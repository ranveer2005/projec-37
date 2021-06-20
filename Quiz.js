class Quiz {
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
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      background("yellow")
  
      

      textSize(30);
      text("quiz Start", 180,100);
  
    Contestant.getPlayerInfo();
  
  
    if(allContestants !== undefined){
      var display_position = 250;
      fill("blue")
      textSize(15)
      text("NOTE: CONTESTANTS WHO ANSWERED CORRECT ARE HIGHLIGHTED IN GREEN",130,230)
      for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("green");
          }
      else{
        fill("red");
           }
        display_position += 20;
        textSize(15);
        text(allContestants[plr].name + ": " + allContestants[plr].answer, 200, display_position)
    
    
  
  
        
      
    }
    
    }
    
    }
  
  }