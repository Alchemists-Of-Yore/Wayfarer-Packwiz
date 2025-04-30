Platform.mods.kubejs.name = "Wayfarer";

StartupEvents.registry("block", (event) => {
  event
    .create("nothing")
    .unbreakable()
    .displayName("???")
    .tagItem("kubejs:admin_item");
});
