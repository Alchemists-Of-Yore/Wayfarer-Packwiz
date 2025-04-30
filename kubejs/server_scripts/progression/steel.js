ServerEvents.recipes((event) => {
  event.remove([{ id: "minecraft:netherite_ingot" }]);
  event.remove([{ id: "minecraft:netherite_helmet_smithing" }]);
  event.remove([{ id: "minecraft:netherite_chestplate_smithing" }]);
  event.remove([{ id: "minecraft:netherite_leggings_smithing" }]);
  event.remove([{ id: "minecraft:netherite_boots_smithing" }]);
  event.remove([{ id: "minecraft:netherite_sword_smithing" }]);
  event.remove([{ id: "minecraft:netherite_shovel_smithing" }]);
  event.remove([{ id: "minecraft:netherite_axe_smithing" }]);
  event.remove([{ id: "minecraft:netherite_pickaxe_smithing" }]);
  event.remove([{ id: "minecraft:netherite_hoe_smithing" }]);
  event.remove([{ id: "farmersdelight:netherite_knife_smithing" }]);

  event.remove([{ id: "minecraft:diamond_sword" }]);
  event.remove([{ id: "minecraft:diamond_shovel" }]);
  event.remove([{ id: "minecraft:diamond_axe" }]);
  event.remove([{ id: "minecraft:diamond_pickaxe" }]);
  event.remove([{ id: "minecraft:diamond_hoe" }]);
  event.remove([{ id: "farmersdelight:diamond_knife" }]);

  event.shapeless("kubejs:steel_ingot", ["9x kubejs:steel_nugget"]);
  event.shapeless("9x kubejs:steel_nugget", ["kubejs:steel_ingot"]);
  event.shapeless("kubejs:steel_block", ["9x kubejs:steel_ingot"]);
  event.shapeless("9x kubejs:steel_ingot", ["kubejs:steel_block"]);
  event.shapeless("kubejs:coke_coal_block", ["9x kubejs:coke_coal"]);
  event.shapeless("9x kubejs:coke_coal", ["kubejs:coke_coal_block"]);

  event.shaped("minecraft:saddle", ["LLL", "LIL", " L "], {
    I: "kubejs:steel_ingot",
    L: "minecraft:leather",
  });

  event.shaped("minecraft:diamond_sword", [" C ", " C ", " S "], {
    C: "kubejs:steel_ingot",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_shovel", [" C ", " S ", " S "], {
    C: "kubejs:steel_ingot",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_hoe", [" CC", " S ", " S "], {
    C: "kubejs:steel_ingot",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_pickaxe", ["CCC", " S ", " S "], {
    C: "kubejs:steel_ingot",
    S: "minecraft:stick",
  });
  event.shaped("minecraft:diamond_axe", [" CC", " SC", " S "], {
    C: "kubejs:steel_ingot",
    S: "minecraft:stick",
  });
  event.shaped("farmersdelight:diamond_knife", ["   ", " C ", " S "], {
    C: "kubejs:steel_ingot",
    S: "minecraft:stick",
  });

  event.remove([{ id: "backpacks:backpack_from_rope" }]);
  event.shaped("backpacks:backpack", ["LLL", "RCR", "LLL"], {
    C: "kubejs:steel_ingot",
    L: "minecraft:leather",
    R: "farmersdelight:rope",
  });

  event.remove([{ id: "supplementaries:cannon_2" }]);
  event.replaceInput(
    { id: "supplementaries:cannon" },
    "minecraft:iron_ingot",
    "kubejs:steel_ingot"
  );

  event.remove({ id: "minecraft:recovery_compass" });
  event.shaped("minecraft:recovery_compass", [" S ", "RDR", " T "], {
    T: "kubejs:steel_ingot",
    R: "minecraft:redstone",
    D: "minecraft:diamond",
    S: "minecraft:echo_shard",
  });

  event.remove({ id: "piglinproliferation:buckler" });
  event.shaped("piglinproliferation:buckler", [" S ", "SLS", " S "], {
    S: "kubejs:steel_ingot",
    L: "minecraft:leather",
  });
});
