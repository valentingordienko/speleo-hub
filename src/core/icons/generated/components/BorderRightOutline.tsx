import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderRightOutline.svg';

export function BorderRightOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderRightOutline">
      <SVG />
    </Icon>
  );
}
