PlayerEvents.tick(event => {
  const player = event.player

  if (player.age % 20 !== 0) return

  const chestItem = player.chestArmorItem
  const hasFullIgnitiumSet =
    player.headArmorItem === 'cataclysm:ignitium_helmet' &&
    (chestItem === 'cataclysm:ignitium_chestplate' ||
      chestItem === 'cataclysm:ignitium_elytra_chestplate') &&
    player.legsArmorItem === 'cataclysm:ignitium_leggings' &&
    player.feetArmorItem === 'cataclysm:ignitium_boots'

  if (hasFullIgnitiumSet) {
    player.potionEffects.add('minecraft:resistance', 40, 1, false, true)
    player.potionEffects.add('minecraft:strength', 40, 1, false, true)
  }
})
