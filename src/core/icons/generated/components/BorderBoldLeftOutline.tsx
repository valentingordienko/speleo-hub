import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderBoldLeftOutline.svg';

export function BorderBoldLeftOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderBoldLeftOutline">
      <SVG />
    </Icon>
  );
}
