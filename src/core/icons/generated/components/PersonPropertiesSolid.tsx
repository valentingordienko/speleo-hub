import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonPropertiesSolid.svg';

export function PersonPropertiesSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="PersonPropertiesSolid">
      <SVG />
    </Icon>
  );
}
