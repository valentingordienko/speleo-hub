import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderHorizontalOutline.svg';

export function BorderHorizontalOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderHorizontalOutline">
      <SVG />
    </Icon>
  );
}
