import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderTopOutline.svg';

export function BorderTopOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderTopOutline">
      <SVG />
    </Icon>
  );
}
