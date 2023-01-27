import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderOuterOutline.svg';

export function BorderOuterOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderOuterOutline">
      <SVG />
    </Icon>
  );
}
