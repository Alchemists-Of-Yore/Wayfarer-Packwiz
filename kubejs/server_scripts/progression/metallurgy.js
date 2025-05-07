ServerEvents.recipes((event) => {
  event.custom({
    type: "wayfarer_core:melting",
    ingredients: [
      {
        item: "kubejs:raw_tin",
      },
    ],
    duration: 600,
    result: {
      id: "kubejs:tin_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:melting",
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
    type: "wayfarer_core:melting",
    ingredients: [
      {
        item: "create:raw_zinc",
      },
    ],
    duration: 600,
    result: {
      id: "create:zinc_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:melting",
    ingredients: [
      {
        item: "kubejs:raw_silver",
      },
    ],
    duration: 600,
    result: {
      id: "kubejs:silver_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:melting",
    ingredients: [
      {
        item: "minecraft:raw_gold",
      },
    ],
    duration: 600,
    result: {
      id: "minecraft:gold_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:melting",
    ingredients: [
      {
        tag: "kubejs:copper",
      },
      {
        tag: "kubejs:tin",
      },
    ],
    duration: 1600,
    result: {
      id: "kubejs:bronze_ingot",
    },
  });

  event.custom({
    type: "wayfarer_core:melting",
    ingredients: [
      {
        tag: "kubejs:copper",
      },
      {
        tag: "kubejs:zinc",
      },
    ],
    duration: 1600,
    result: {
      id: "create:brass_ingot",
      count: 2,
    },
  });

  event.remove({ type: "smelting", output: "copper_ingot" });
  event.remove({ type: "blasting", output: "copper_ingot" });
  event.remove({ type: "smelting", output: "gold_ingot" });
  event.remove({ type: "blasting", output: "gold_ingot" });
  event.remove({ type: "smelting", output: "create:zinc_ingot" });
  event.remove({ type: "blasting", output: "create:zinc_ingot" });
});
