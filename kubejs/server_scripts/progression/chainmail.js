ServerEvents.recipes((event) => {
  event.shaped("2x minecraft:chain", [" NN", "N N", "NN "], {
    N: "minecraft:iron_nugget",
  });
  event.shaped("minecraft:chain", [" BB", "B B", "BB "], {
    B: "kubejs:tin_nugget",
  });
  event.shaped("minecraft:chain", [" BB", "B B", "BB "], {
    B: "create:zinc_nugget",
  });
  event.remove([{ id: "minecraft:chain" }]);
  event.remove([{ id: "create:crafting/appliances/chain_from_zinc" }]);

  event.shaped("minecraft:chainmail_helmet", ["CCC", "C C", "   "], {
    C: "minecraft:chain",
  });
  event.shaped("minecraft:chainmail_chestplate", ["C C", "CCC", "CCC"], {
    C: "minecraft:chain",
  });
  event.shaped("minecraft:chainmail_leggings", ["CCC", "C C", "C C"], {
    C: "minecraft:chain",
  });
  event.shaped("minecraft:chainmail_boots", ["C C", "C C", "   "], {
    C: "minecraft:chain",
  });
});
