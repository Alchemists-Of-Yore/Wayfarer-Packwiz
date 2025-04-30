ServerEvents.recipes((event) => {
  event.shapeless("kubejs:tin_ingot", ["9x kubejs:tin_nugget"]);
  event.shapeless("9x kubejs:tin_nugget", ["kubejs:tin_ingot"]);
  event.shapeless("kubejs:tin_block", ["9x kubejs:tin_ingot"]);
  event.shapeless("9x kubejs:tin_ingot", ["kubejs:tin_block"]);
  event.smelting("kubejs:tin_ingot", "kubejs:raw_tin").xp(0.7);
  event.blasting("kubejs:tin_ingot", "kubejs:raw_tin").xp(0.7);
  event.shaped("minecraft:bucket", ["   ", "B B", " B "], {
    B: "kubejs:tin_ingot",
  });

  event.replaceInput(
    { id: "supplementaries:bubble_blower" },
    "minecraft:iron_ingot",
    "kubejs:tin_ingot"
  );
  event.replaceInput(
    { id: "supplementaries:bubble_blower" },
    "minecraft:iron_nugget",
    "kubejs:tin_nugget"
  );

  event.replaceInput(
    { id: "supplementaries:lunch_basket" },
    "minecraft:bamboo",
    "kubejs:tin_ingot"
  );
});
