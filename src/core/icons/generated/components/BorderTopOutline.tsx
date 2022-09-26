import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderTopOutline.svg';

export function BorderTopOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderTopOutline">
      <SVG />
    </Icon>
  );
}
