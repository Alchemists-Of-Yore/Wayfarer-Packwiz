ServerEvents.recipes((event) => {
  event.shapeless("kubejs:silver_ingot", ["9x kubejs:silver_nugget"]);
  event.shapeless("9x kubejs:silver_nugget", ["kubejs:silver_ingot"]);
  event.shapeless("kubejs:silver_block", ["9x kubejs:silver_ingot"]);
  event.shapeless("9x kubejs:silver_ingot", ["kubejs:silver_block"]);
  event.smelting("kubejs:silver_ingot", "kubejs:raw_silver").xp(0.7);
  event.blasting("kubejs:silver_ingot", "kubejs:raw_silver").xp(0.7);

  event.remove({ id: "supplementaries:goblet" });
  event.shaped("supplementaries:goblet", ["N N", " N ", " N "], {
    N: "kubejs:silver_nugget",
  });
});
