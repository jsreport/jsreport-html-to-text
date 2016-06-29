import Properties from './Properties.js'
import Studio from 'jsreport-studio'

Studio.addPropertiesComponent('html-to-text', Properties, (entity) => entity.__entitySet === 'templates' && entity.recipe === 'html-to-text')

Studio.addApiSpec({
  template: {
    htmlToText: {
      wordWrap: 130
    }
  }
})
