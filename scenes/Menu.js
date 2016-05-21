AG.Menu = function(){};

//buttonHelper object to helper manage button stuff
var buttonHelper = {
  //what happens when play button is clicked
  startGame: function (){
    changeState("Cutscene");
  }
};

AG.Menu.prototype = {
  preload: function (){
    game.load.spritesheet("creditsButtonTemp", "Assets/Sprites/creditsButtonTemp.png", 314, 124);
    game.load.spritesheet("playButtonTemp", "Assets/Sprites/playButtonTemp.png", 314, 125 );
    game.load.spritesheet("settingsButtonTemp", "Assets/Sprites/settingsButtonTemp.png", 314, 127);

  },
	
  create: function(){
    console.log('You are in the Menu state');
    game.stage.backgroundColor = '#fff';
    
    //create buttons
    buttonHelper.playButton = game.add.button(game.world.centerX, game.world.height - 50, "playButtonTemp", buttonHelper.startGame, null, 1, 2, 3, 1);
    buttonHelper.settingsButton = game.add.button(game.world.width - 50, game.world.centerY*2/3, "settingsButtonTemp", null, null, 1, 2, 3, 1);
    buttonHelper.creditsButton = game.add.button(game.world.centerX, game.world.height + 50, "creditsButtonTemp", null, null, 1, 2, 3, 1);

  
    //tween buttons
    game.add.tween(buttonHelper.playButton).to( { y: game.world.centerY/3 }, 300, "Linear", true);
    game.add.tween(buttonHelper.settingsButton).to( { x: game.world.centerX }, 300, "Linear", true);
    game.add.tween(buttonHelper.creditsButton).to( { y: game.world.centerY }, 300, "Linear", true);

  },

  update: function(){

  }
};