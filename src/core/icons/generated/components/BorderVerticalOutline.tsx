import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderVerticalOutline.svg';

export function BorderVerticalOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderVerticalOutline">
      <SVG />
    </Icon>
  );
}
