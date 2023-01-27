import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderBoldTopOutline.svg';

export function BorderBoldTopOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderBoldTopOutline">
      <SVG />
    </Icon>
  );
}
