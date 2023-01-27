import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderBoldRightOutline.svg';

export function BorderBoldRightOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderBoldRightOutline">
      <SVG />
    </Icon>
  );
}
