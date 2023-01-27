import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderBottomOutline.svg';

export function BorderBottomOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderBottomOutline">
      <SVG />
    </Icon>
  );
}
