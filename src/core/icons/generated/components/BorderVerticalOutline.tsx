import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderVerticalOutline.svg';

export function BorderVerticalOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderVerticalOutline">
      <SVG />
    </Icon>
  );
}
