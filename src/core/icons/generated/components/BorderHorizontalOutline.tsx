import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderHorizontalOutline.svg';

export function BorderHorizontalOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderHorizontalOutline">
      <SVG />
    </Icon>
  );
}
