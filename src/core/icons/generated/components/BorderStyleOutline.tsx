import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderStyleOutline.svg';

export function BorderStyleOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="BorderStyleOutline">
      <SVG />
    </Icon>
  );
}
