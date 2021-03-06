function Medic(id, player, position, sprite){
    this.id = id;
    this.assetId = MenuItems.MEDIC;
    this.player = player;
    this.attack = 1;
    this.healing = 4;
    this.health = 3;
    this.maxHealth = 3;
    this.range = 3;
    this.tilePosition = position;
    this.sprite = sprite;
    this.type = "medic";
    this.icon = "";
    this.asset = "";
    this.moveable = true;
}

Medic.prototype = Object.create(Character.prototype);
Medic.prototype.constructor = Character;

Medic.load = function(){
    game.load.image('bmedicOut','assets/grid/bdokter out.png');
    game.load.image('rmedicOut','assets/grid/rdokter out.png');
    game.load.image('bmedicIn','assets/grid/bdokter in.png');
    game.load.image('rmedicIn','assets/grid/rdokter in.png');

    // game.load.audio('medicSelect', 'assets/sounds/medic_select.mp3');
    // game.load.audio('medicHurt', 'assets/sounds/medic_hurt.mp3');
    // game.load.audio('medicDeath', 'assets/sounds/medic_death.mp3');
    
}


Medic.healAnimation = function(source, target)
{
        healSheet = game.add.sprite(target.tilePosition.x*tileSize, target.tilePosition.y*tileSize, 'medicHealSpritesheet');
        healAnim = healSheet.animations.add('healAnimation');

        healSound = game.add.audio('medicHeal');
        healSound.play();

        healSheet.animations.play('healAnimation', 10, false, true);
}
