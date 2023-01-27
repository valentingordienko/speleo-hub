import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/IISOutline.svg';

export function IISOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="IISOutline">
      <SVG />
    </Icon>
  );
}
