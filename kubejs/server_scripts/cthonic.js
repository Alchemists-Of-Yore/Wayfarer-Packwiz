ServerEvents.tags("entity_type", (event) => {
  //Adds Entities to Subject of Evil tag
  event.add("kubejs:subject_of_evil", "#minecraft:illager");
  event.add("kubejs:subject_of_evil", "#minecraft:illager_friends");
  event.add("kubejs:subject_of_evil", "#minecraft:raiders");
  event.add("kubejs:subject_of_evil", "minecraft:vex");
  event.add("kubejs:subject_of_evil", "minecraft:wither_skeleton");
  event.add("kubejs:subject_of_evil", "minecraft:phantom");
});

LootJS.modifiers((event) => {
  event
    .addEntityModifier("#kubejs:subject_of_evil")
    .addLoot("wayfarer_core:cthonic_calculus")
    .randomChance(0.05);

  event
    .addTableModifier("minecraft:blocks/spawner")
    .addLoot("wayfarer_core:cthonic_calculus")
    .setCount([1, 2]);

  event
    .addTableModifier("minecraft:blocks/trial_spawner")
    .addLoot("wayfarer_core:cthonic_calculus")
    .setCount([0, 1]);

  event
    .addTableModifier("nomansland:blocks/monster_anchor")
    .addLoot("wayfarer_core:cthonic_calculus")
    .setCount([0, 1]);
});
