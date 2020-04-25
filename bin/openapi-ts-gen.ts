#!/usr/bin/env node

// import { log } from '../src/log'

import renderer  from 'openapi-codegen'

// load a config and a definition
renderer.main(
  definition,
  config,
  configName,
)
