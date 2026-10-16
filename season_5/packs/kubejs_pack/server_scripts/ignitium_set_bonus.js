const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot')

PlayerEvents.tick(event => {
  const player = event.player

  if (player.age % 20 !== 0) return

  const headItem = player.getItemBySlot(EquipmentSlot.HEAD).id
  const chestItem = player.getItemBySlot(EquipmentSlot.CHEST).id
  const legsItem = player.getItemBySlot(EquipmentSlot.LEGS).id
  const feetItem = player.getItemBySlot(EquipmentSlot.FEET).id

  const hasFullIgnitiumSet =
    headItem === 'cataclysm:ignitium_helmet' &&
    (chestItem === 'cataclysm:ignitium_chestplate' ||
      chestItem === 'cataclysm:ignitium_elytra_chestplate') &&
    legsItem === 'cataclysm:ignitium_leggings' &&
    feetItem === 'cataclysm:ignitium_boots'

  if (hasFullIgnitiumSet) {
    player.potionEffects.add('minecraft:resistance', 40, 1, false, true)
    player.potionEffects.add('minecraft:strength', 40, 1, false, true)
  }
})
