PlayerEvents.tick(event => {
  const player = event.player

  // Alleen op de server uitvoeren en elke 1 seconde (20 ticks) om lag te voorkomen
  if (player.level.isClientSide() || player.age % 20 !== 0) return

  // De correcte KubeJS methode om armor op te vragen via EquipmentSlot (indicies: feet=0, legs=1, chest=2, head=3)
  const headItem = player.getItemBySlot('head').id
  const chestItem = player.getItemBySlot('chest').id
  const legsItem = player.getItemBySlot('legs').id
  const feetItem = player.getItemBySlot('feet').id

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