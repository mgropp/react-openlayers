import * as React from 'react';
import * as ol from 'openlayers';
import {Util} from "../util";
import {Map} from '../map';

export class Modify extends React.Component<any, any> {

  interaction: ol.interaction.Modify;

  options: any = {
    condition: undefined,
    deleteCondition: undefined,
    pixelTolerance: undefined,
    style: undefined,
    features: undefined,
    wrapX: undefined
  };

  events: any = {
    'change': undefined,
    'change:active': undefined,
    'modifyend': undefined,
    'modifystart': undefined,
    'propertychange': undefined
  };

  constructor(props) { super(props); }

  render() { return null; }

  componentDidMount () {
    let options = Util.getOptions(Object['assign'](this.options, this.props));
    console.log('modify options', options);
    this.interaction = new ol.interaction.Modify(options);
    this.context.mapComp.interactions.push(this.interaction)
  }

}

Modify['contextTypes'] = {
  mapComp: React.PropTypes.instanceOf(Map),
  map: React.PropTypes.instanceOf(ol.Map)
};
