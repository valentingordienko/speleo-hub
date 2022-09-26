import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonPropertiesOutline.svg';

export function PersonPropertiesOutline(props: TProps) {
  return (
    <Icon {...props} name="PersonPropertiesOutline">
      <SVG />
    </Icon>
  );
}
