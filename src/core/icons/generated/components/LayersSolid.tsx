import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/LayersSolid.svg';

export function LayersSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="LayersSolid">
      <SVG />
    </Icon>
  );
}
