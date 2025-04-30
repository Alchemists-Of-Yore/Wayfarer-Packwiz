ServerEvents.recipes((event) => {
  event.custom({
    type: "farmersdelight:cooking",
    cookingtime: 100,
    experience: 0.3,
    ingredients: [
      {
        item: "nomansland:cooked_venison",
      },
      {
        item: "minecraft:cooked_beef",
      },
      {
        item: "minecraft:cooked_porkchop",
      },
      {
        item: "minecraft:sugar",
      },
    ],
    recipe_book_tab: "misc",
    result: {
      count: 4,
      id: "kubejs:triple_meat_treat",
    },
  });
});
