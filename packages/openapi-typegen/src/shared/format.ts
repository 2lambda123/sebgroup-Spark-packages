import prettier = require('prettier')

const header = `/**
 * This file was auto-generated.
 * Do not make direct changes to the file.
 */

import {
  APIServerDefinition,
  BaseClient,
  GenericRouteHandler,
} from '@sebspark/openapi-core'
 
/* tslint:disable */
/* eslint-disable */`

export const formatFile = async (rows: string[]): Promise<string> => {
  const withHeader = [header, ...rows]
  const code = withHeader.join('\n\n')
  const formatted = await prettier.format(code, {
    parser: 'typescript',
    singleQuote: true,
    semi: false,
  })
  return formatted
}

export const formatTitle = (title: string) => {
  return title.replace(/ /g, '').replace(/[^a-zA-Z0-9]/g, '_')
}