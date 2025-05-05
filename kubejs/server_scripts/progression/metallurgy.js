ServerEvents.recipes((event) => {
  event.custom({
    type: "wayfarer_core:crucible",
    ingredients: [
      {
        item: "kubejs:tin_ingot",
      },
    ],
    duration: 600,
    result: {
      id: "kubejs:tin_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:crucible",
    ingredients: [
      {
        item: "minecraft:raw_copper",
      },
    ],
    duration: 600,
    result: {
      id: "minecraft:copper_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:crucible",
    ingredients: [
      {
        item: "minecraft:copper_ingot",
      },
      {
        item: "kubejs:tin_ingot",
      },
    ],
    duration: 1600,
    result: {
      id: "kubejs:bronze_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:crucible",
    ingredients: [
      {
        item: "minecraft:copper_ingot",
      },
      {
        item: "create:zinc_ingot",
      },
    ],
    duration: 1600,
    result: {
      id: "create:brass_ingot",
    },
  });

  event.remove({ type: "smelting", output: "copper_ingot" });
  event.remove({ type: "blasting", output: "copper_ingot" });
});
