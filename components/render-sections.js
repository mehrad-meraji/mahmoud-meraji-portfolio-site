import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {upperFirst} from 'lodash'
import * as SectionComponents from './sections';
import cn from "classnames";

function resolveSections (section) {
  // eslint-disable-next-line import/namespace
  const Section = SectionComponents[upperFirst(section._type)]
  
  if (Section) {
    return Section
  }
  
  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

function RenderSections (props) {
  const {sections, visible} = props
  
  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }
  
  return (
    <div className={cn({
      hidden: !visible
    })}>
      {
        sections.map(section => {
          const SectionComponent = resolveSections(section)
          if (!SectionComponent) {
            return <div>Missing section {section._type}</div>
          }
          return <SectionComponent {...section} key={section._key} />
        })
      }
    </div>
  )
}

export default RenderSections
