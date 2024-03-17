import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['./index'],
  clean: false,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
})
