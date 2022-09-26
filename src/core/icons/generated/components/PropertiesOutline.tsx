import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/PropertiesOutline.svg';

export function PropertiesOutline(props: TProps) {
  return (
    <Icon {...props} name="PropertiesOutline">
      <SVG />
    </Icon>
  );
}
