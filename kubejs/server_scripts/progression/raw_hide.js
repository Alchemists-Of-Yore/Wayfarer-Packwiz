ServerEvents.recipes((event) => {
  event.shaped("4x minecraft:leather", [" H ", "HWH", " H "], {
    H: "minecraft:rabbit_hide",
    W: "wayfarer_core:wax",
  });
});

LootJS.modifiers((event) => {
  event
    .addEntityModifier([
      "nomansland:deer",
      "minecraft:polar_bear",
      "minecraft:horse",
      "minecraft:mule",
      "minecraft:donkey",
      "minecraft:hoglin",
      "minecraft:llama",
      "minecraft:trader_llama",
      "minecraft:wolf",
    ])
    .randomChance(0.5)
    .addLoot("minecraft:rabbit_hide")
    .setCount([1, 2]);

  event
    .addEntityModifier(["minecraft:fox", "minecraft:panda"])
    .randomChance(0.2)
    .addLoot("minecraft:rabbit_hide");

  event
    .addEntityModifier(["minecraft:cow", "minecraft:camel"])
    .addLoot("minecraft:rabbit_hide")
    .setCount([1, 4]);

  event
    .addEntityModifier([
      "minecraft:cow",
      "minecraft:horse",
      "minecraft:mule",
      "minecraft:donkey",
      "minecraft:mooshroom",
      "minecraft:llama",
      "minecraft:trader_llama",
    ])
    .removeLoot("leather");
});
