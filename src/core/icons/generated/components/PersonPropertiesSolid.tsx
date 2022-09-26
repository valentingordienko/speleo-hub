import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonPropertiesSolid.svg';

export function PersonPropertiesSolid(props: TProps) {
  return (
    <Icon {...props} name="PersonPropertiesSolid">
      <SVG />
    </Icon>
  );
}
