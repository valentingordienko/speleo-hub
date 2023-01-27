import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PropertiesSolid.svg';

export function PropertiesSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PropertiesSolid">
      <SVG />
    </Icon>
  );
}
