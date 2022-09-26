import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderBottomOutline.svg';

export function BorderBottomOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderBottomOutline">
      <SVG />
    </Icon>
  );
}
