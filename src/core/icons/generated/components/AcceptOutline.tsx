import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/AcceptOutline.svg';

export function AcceptOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="AcceptOutline">
      <SVG />
    </Icon>
  );
}
