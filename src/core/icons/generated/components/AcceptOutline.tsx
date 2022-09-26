import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcceptOutline.svg';

export function AcceptOutline(props: TProps) {
  return (
    <Icon {...props} name="AcceptOutline">
      <SVG />
    </Icon>
  );
}
