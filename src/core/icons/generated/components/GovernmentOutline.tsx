import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GovernmentOutline.svg';

export function GovernmentOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="GovernmentOutline">
      <SVG />
    </Icon>
  );
}
