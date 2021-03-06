import React from 'react';
import {getComponent} from './getComponent';
import {Node} from './Node';
import {NodePropTypes} from './NodePropTypes';

export function ContainerNode({node, config}) {
  const Component = getComponent(config, node.type);
  return (
    <Component>
      {node.nodes.map((childNode, index) => <Node node={childNode} config={config} key={index}/>)}
    </Component>
  );
}

ContainerNode.propTypes = NodePropTypes;
