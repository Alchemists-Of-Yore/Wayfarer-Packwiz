StartupEvents.registry("item", (event) => {
  event.create("triple_meat_treat").food(food => {
    food
      .nutrition(6)
      .saturation(0.8)
      .removeEffect('minecraft:hunger')
      .alwaysEdible()
});
})

