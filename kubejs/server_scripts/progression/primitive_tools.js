ServerEvents.recipes((event) => {
  //Tools
  event.shaped("kubejs:flint_shovel", [" C ", " S ", " S "], {
    C: "minecraft:flint",
    S: "minecraft:stick",
  });
  event.shaped("kubejs:flint_axe", [" CC", " SC", " S "], {
    C: "minecraft:flint",
    S: "minecraft:stick",
  });
  event.shaped("kubejs:bone_pick", ["CCC", " S ", " S "], {
    C: "minecraft:bone",
    S: "minecraft:stick",
  });
});
