import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderOuterOutline.svg';

export function BorderOuterOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderOuterOutline">
      <SVG />
    </Icon>
  );
}
