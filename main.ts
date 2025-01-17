scene.onOverlapTile(SpriteKind.Player, assets.tile`B`, function (sprite, location) {
    tiles.placeOnRandomTile(Playr, assets.tile`I`)
    info.clearCountup()
    info.startCountup(true)
})
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    if (controller.A.isPressed()) {
        Playr.vy = -120
    } else {
        Playr.vy = 100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`F`, function (sprite, location) {
    tiles.placeOnRandomTile(Playr, assets.tile`I`)
    info.clearCountup()
    info.startCountup(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`J`, function (sprite, location) {
    info.pauseCountup()
    game.splash(info.getTimeElapsed())
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`E`, function (sprite, location) {
    tiles.placeOnRandomTile(Playr, assets.tile`I`)
    info.clearCountup()
    info.startCountup(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Playr.vy = -120
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`1`, function (sprite, location) {
    info.startCountup(true)
    tiles.setCurrentTilemap(tilemap`Level1`)
    tiles.placeOnRandomTile(Playr, assets.tile`I`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`C`, function (sprite, location) {
    tiles.placeOnRandomTile(Playr, assets.tile`I`)
    info.clearCountup()
    info.startCountup(true)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Playr.vy = 100
})
let Playr: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`Lvlsel`)
Playr = sprites.create(assets.image`Playr`, SpriteKind.Player)
Playr.scale = 3.3
scene.cameraFollowSprite(Playr)
controller.moveSprite(Playr, 120, 0)
