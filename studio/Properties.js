import React, { Component } from 'react'

export default class Properties extends Component {
  render () {
    const { entity, onChange } = this.props
    const recipeProps = entity.htmlToText || {}

    return (
      <div className='properties-section'>
        <div className='form-group'><label>word wrap</label>
          <input
            title='Wrap the line after x characters' type='number' placeholder='130' min='0' max='1000'
            value={recipeProps.wordWrap}
            onChange={(v) => onChange({_id: entity._id, htmlToText: {wordWrap: v.target.value}})} />
        </div>
      </div>
    )
  }
}