import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IISOutline.svg';

export function IISOutline(props: TProps) {
  return (
    <Icon {...props} name="IISOutline">
      <SVG />
    </Icon>
  );
}
