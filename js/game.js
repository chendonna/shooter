var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
        game.load.image('background', '../assets/dark.jpg');
        game.load.spritesheet('enemy', '../assets/mechanicmountfosure.png', 142, 142, 5);
        game.load.spritesheet('ground', '../assets/tiles.png', 0, 103);
}

var enemy;
function create() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.add.sprite(0, 0, 'background');

        enemy = game.add.sprite(game.world.width - 150, game.world.height - 150, 'enemy', 1);
        enemy.animations.add('run', [1], 30, true);
        enemy.animations.play('run');
        game.add.tween(enemy).to({ y: 0 }, game.world.height, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);
        enemy.animations.currentAnim.speed = 1;
        /*game.add.tween(enemy).to({y: game.world.height}, 0, Phaser.Easing.Quadratic.InOut, true, 0, 1000, false);*/

        /*game.physics.arcade.enable(enemy);

        enemy.body.bounce.y = 0.2;
        enemy.body.gravity.y = 300;
        enemy.body.collideWorldBounds = true;*/
}

function update() {
}
