ServerEvents.recipes((event) => {
  event.shaped("wayfarer_core:repeating_crossbow", ["RJR", "HTH", " S "], {
    S: "minecraft:stick",
    H: "minecraft:string",
    R: "minecraft:repeater",
    J: "kubejs:steel_ingot",
    T: "minecraft:tripwire_hook",
  });

  event.shaped("wayfarer_core:arbalest", ["RJR", "HTH", " S "], {
    S: "#minecraft:planks",
    H: "minecraft:string",
    R: "#c:stripped_logs",
    J: "kubejs:steel_ingot",
    T: "minecraft:tripwire_hook",
  });
});
