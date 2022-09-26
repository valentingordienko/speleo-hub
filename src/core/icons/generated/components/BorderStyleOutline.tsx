import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BorderStyleOutline.svg';

export function BorderStyleOutline(props: TProps) {
  return (
    <Icon {...props} name="BorderStyleOutline">
      <SVG />
    </Icon>
  );
}
