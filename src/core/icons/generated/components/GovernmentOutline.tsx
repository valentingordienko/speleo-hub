import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/GovernmentOutline.svg';

export function GovernmentOutline(props: TProps) {
  return (
    <Icon {...props} name="GovernmentOutline">
      <SVG />
    </Icon>
  );
}
