ServerEvents.recipes((event) => {
  event.shapeless("create:iron_sheet", [
    "another_furniture:furniture_hammer",
    "minecraft:iron_ingot",
    "minecraft:iron_ingot",
  ]);
  event.shapeless("create:copper_sheet", [
    "another_furniture:furniture_hammer",
    "minecraft:copper_ingot",
    "minecraft:copper_ingot",
  ]);
  event.shapeless("create:golden_sheet", [
    "another_furniture:furniture_hammer",
    "minecraft:gold_ingot",
    "minecraft:gold_ingot",
  ]);
  event.shapeless("create:brass_sheet", [
    "another_furniture:furniture_hammer",
    "create:brass_ingot",
    "create:brass_ingot",
  ]);
});
