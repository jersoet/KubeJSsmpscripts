ServerEvents.recipes(event => {
  const incompleteMechanism = 'kubejs:incomplete_nuclear_mechanism'

  event.recipes.create.sequenced_assembly(
    ['kubejs:nuclear_mechanism'],
    'kubejs:echo_mechanism',
    [
      event.recipes.create.deploying(
        incompleteMechanism,
        [incompleteMechanism, 'createnuclear:uranium_rod']
      ),
      event.recipes.create.pressing(
        incompleteMechanism,
        incompleteMechanism
      ),
      event.recipes.create.deploying(
        incompleteMechanism,
        [incompleteMechanism, 'createnuclear:uranium_rod']
      )
    ]
  )
    .transitionalItem(incompleteMechanism)
    .loops(1)

  event.replaceInput(
    { output: 'createnuclear:reactor_core' },
    'create:precision_mechanism',
    'kubejs:nuclear_mechanism'
  )
})
