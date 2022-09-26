import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PropertiesSolid.svg';

export function PropertiesSolid(props: TProps) {
  return (
    <Icon {...props} name="PropertiesSolid">
      <SVG />
    </Icon>
  );
}
