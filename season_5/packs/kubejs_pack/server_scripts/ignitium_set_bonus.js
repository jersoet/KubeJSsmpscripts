PlayerEvents.tick(event => {
  const player = event.player

  // Voer de check alleen uit op de server en elke 20 ticks (1 seconde)
  if (player.level.isClientSide() || player.age % 20 !== 0) return

  const headItem = player.headArmorItem.id
  const chestItem = player.chestArmorItem.id
  const legsItem = player.legsArmorItem.id
  const feetItem = player.feetArmorItem.id

  const hasFullIgnitiumSet =
    headItem === 'cataclysm:ignitium_helmet' &&
    (chestItem === 'cataclysm:ignitium_chestplate' ||
      chestItem === 'cataclysm:ignitium_elytra_chestplate') &&
    legsItem === 'cataclysm:ignitium_leggings' &&
    feetItem === 'cataclysm:ignitium_boots'

  if (hasFullIgnitiumSet) {
    // PotionEffects.add(effect, duration_ticks, amplifier, ambient, particles)
    player.potionEffects.add('minecraft:resistance', 40, 1, false, true)
    player.potionEffects.add('minecraft:strength', 40, 1, false, true)
  }
})