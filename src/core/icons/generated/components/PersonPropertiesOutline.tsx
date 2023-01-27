import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PersonPropertiesOutline.svg';

export function PersonPropertiesOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PersonPropertiesOutline">
      <SVG />
    </Icon>
  );
}
