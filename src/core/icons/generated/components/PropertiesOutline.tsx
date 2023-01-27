import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PropertiesOutline.svg';

export function PropertiesOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="PropertiesOutline">
      <SVG />
    </Icon>
  );
}
