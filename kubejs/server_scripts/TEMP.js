ServerEvents.recipes((event) => {
  event.shapeless("1x kubejs:steel_ingot", [
    "kubejs:coke_coal",
    "kubejs:coke_coal",
    "kubejs:coke_coal",
    "kubejs:coke_coal",
    "minecraft:raw_iron",
    "minecraft:raw_iron",
  ]);

  event.shapeless("1x kubejs:coke_coal", [
    "minecraft:coal",
    "minecraft:coal",
    "supplementaries:ash",
    "supplementaries:ash",
    "minecraft:blaze_powder",
    "minecraft:blaze_powder",
  ]);
});
