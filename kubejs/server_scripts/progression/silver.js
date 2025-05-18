ServerEvents.recipes((event) => {
  event.shapeless("kubejs:silver_ingot", ["9x kubejs:silver_nugget"]);
  event.shapeless("9x kubejs:silver_nugget", ["kubejs:silver_ingot"]);
  event.shapeless("kubejs:silver_block", ["9x kubejs:silver_ingot"]);
  event.shapeless("9x kubejs:silver_ingot", ["kubejs:silver_block"]);

  event.remove({ id: "supplementaries:goblet" });
  event.shaped("supplementaries:goblet", ["N N", " N ", " N "], {
    N: "kubejs:silver_nugget",
  });

  event.remove({ id: "minecraft:brewing_stand" });
  event.shaped("minecraft:brewing_stand", 
    [" B ",
       " B ",
        "SSS"], {
    B: "kubejs:blaze_rod",
    S: "kubejs:silver_ingot",
  });
});
