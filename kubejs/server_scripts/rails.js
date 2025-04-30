ServerEvents.recipes((event) => {
  event.remove({ id: "minecraft:rail" });
  event.shaped("8x minecraft:rail", ["R R", "RSR", "R R"], {
    R: "minecraft:iron_nugget",
    S: "minecraft:stick",
  });

  event.remove({ id: "minecraft:powered_rail" });
  event.shaped("8x minecraft:powered_rail", ["RXR", "RSR", "RIR"], {
    R: "minecraft:iron_nugget",
    S: "minecraft:stick",
    X: "kubejs:redstone_circuit",
    I: "minecraft:redstone",
  });

  event.remove({ id: "minecraft:activator_rail" });
  event.shaped("8x minecraft:activator_rail", ["RXR", "RSR", "RIR"], {
    R: "minecraft:iron_nugget",
    S: "minecraft:stick",
    X: "kubejs:redstone_circuit",
    I: "minecraft:redstone_torch",
  });

  event.remove({ id: "minecraft:detector_rail" });
  event.shaped("8x minecraft:detector_rail", ["RXR", "RSR", "RIR"], {
    R: "minecraft:iron_nugget",
    S: "minecraft:stick",
    X: "kubejs:redstone_circuit",
    I: "minecraft:stone_pressure_plate",
  });
});
