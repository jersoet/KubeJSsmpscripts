ServerEvents.recipes(event => {
  event.replaceInput(
    { output: 'cataclysm:ignitium_helmet' },
    'minecraft:netherite_helmet',
    'create_deep_dark:echo_armor_helmet'
  )
  event.replaceInput(
    { output: 'cataclysm:ignitium_chestplate' },
    'minecraft:netherite_chestplate',
    'create_deep_dark:echo_armor_chestplate'
  )
  event.replaceInput(
    { output: 'cataclysm:ignitium_leggings' },
    'minecraft:netherite_leggings',
    'create_deep_dark:echo_armor_leggings'
  )
  event.replaceInput(
    { output: 'cataclysm:ignitium_boots' },
    'minecraft:netherite_boots',
    'create_deep_dark:echo_armor_boots'
  )
  event.replaceInput(
    { output: 'cataclysm:ignitium_sword' },
    'minecraft:netherite_sword',
    'create_deep_dark:echo_sword'
  )
})
