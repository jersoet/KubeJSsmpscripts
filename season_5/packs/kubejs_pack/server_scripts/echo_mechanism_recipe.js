ServerEvents.recipes(event => {
  const incompleteMechanism = 'kubejs:incomplete_echo_mechanism'

  event.recipes.create.sequenced_assembly(
    ['kubejs:echo_mechanism'],
    'create:precision_mechanism',
    [
      event.recipes.create.deploying(
        incompleteMechanism,
        [incompleteMechanism, 'minecraft:echo_shard']
      ),
      event.recipes.create.pressing(
        incompleteMechanism,
        incompleteMechanism
      ),
      event.recipes.create.deploying(
        incompleteMechanism,
        [incompleteMechanism, 'create_deep_dark:echo_ingot']
      ),
      event.recipes.create.pressing(
        incompleteMechanism,
        incompleteMechanism
      ),
      event.recipes.create.deploying(
        incompleteMechanism,
        [incompleteMechanism, 'create:brass_sheet']
      )
    ]
  )
    .transitionalItem(incompleteMechanism)
    .loops(1)
})
