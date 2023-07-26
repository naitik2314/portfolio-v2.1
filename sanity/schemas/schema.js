import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import skill from './skill'
import experience from './experience'
import pageInfo from './pageInfo'
import project from './project'
import social from './social'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    pageInfo,
    experience,
    project,
    skill,
    social,
  ]),
})
