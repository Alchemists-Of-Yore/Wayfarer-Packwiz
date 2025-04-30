LootJS.modifiers((event) => {
  event.addTableModifier(/.*/).removeLoot("portablehole:portable_hole");
});

ServerEvents.recipes((event) => {
  event.shaped("portablehole:portable_hole", [" E ", "EME", " E "], {
    E: "minecraft:ender_pearl",
    M: "kubejs:discharged_matrix",
  });
});

//TODO: ON RIGHT CLICKING WITH PORTABLE_HOLE ON A BLOCK, IT IS TURNED INTO DISCHARGED_MATRIX

ServerEvents.tags("item", (event) => {
  event.add("portablehole:portable_hole_immune", "moyai:moyai");
});
