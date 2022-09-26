import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderRightOutline.svg';

export function BorderRightOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderRightOutline">
      <SVG />
    </Icon>
  );
}
