StartupEvents.registry("item", (event) => {
  event.create("silverfish_eggs");
  event.create("redstone_circuit");
  event.create("mattock_mould");
  event.create("slug");
  event.create("incendiary_slug");
  event.create("buckshot_slug");
  event.create("discharged_matrix").maxStackSize(1);
  //event.create("rubber");
  event.create("aviation_fuel").burnTime(600);
  event.create("coke_coal").burnTime(3200);
  event
    .create("spoon")
    .maxStackSize(1)
    .parentModel("minecraft:item/handheld")
    .burnTime(400);

  event.create("mining_helmet", "helmet");
});

StartupEvents.registry("block", (event) => {
  event
    .create("wax_block")
    .soundType("mud")
    .hardness(0.7)
    .resistance(0.3)
    .tagBlock("minecraft:mineable/axe")
    .tagBlock("minecraft:mineable/shovel")
    .tagBlock("minecraft:infiniburn_end")
    .tagBlock("minecraft:infiniburn_nether")
    .tagBlock("minecraft:infiniburn_overworld");

  event
    .create("concrete")
    .copyPropertiesFrom("minecraft:light_gray_concrete")
    .tagBlock("minecraft:mineable/pickaxe");
  event
    .create("concrete_slab", "slab")
    .copyPropertiesFrom("minecraft:light_gray_concrete")
    .tagBlock("minecraft:mineable/pickaxe");
  event
    .create("concrete_stairs", "stairs")
    .copyPropertiesFrom("minecraft:light_gray_concrete")
    .tagBlock("minecraft:mineable/pickaxe");
  event
    .create("concrete_powder", "falling")
    .copyPropertiesFrom("minecraft:light_gray_concrete_powder")
    .tagBlock("minecraft:mineable/shovel");

  event
    .create("coke_coal_block")
    .soundType("stone")
    .hardness(1.2)
    .resistance(0.5)
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("c:storage_blocks");
});
