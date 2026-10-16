ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly(
    ['kubejs:echo_mechanism'],
    'create:precision_mechanism',
    [
      event.recipes.create.deploying(
        'create:incomplete_precision_mechanism',
        ['create:incomplete_precision_mechanism', 'minecraft:echo_shard']
      ),
      event.recipes.create.pressing(
        'create:incomplete_precision_mechanism',
        'create:incomplete_precision_mechanism'
      ),
      event.recipes.create.deploying(
        'create:incomplete_precision_mechanism',
        ['create:incomplete_precision_mechanism', 'create_deep_dark:echo_ingot']
      ),
      event.recipes.create.pressing(
        'create:incomplete_precision_mechanism',
        'create:incomplete_precision_mechanism'
      ),
      event.recipes.create.deploying(
        'create:incomplete_precision_mechanism',
        ['create:incomplete_precision_mechanism', 'create:brass_sheet']
      )
    ]
  )
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(1)
})
